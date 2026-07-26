import { neon } from "@neondatabase/serverless";
import type { LeadPayload } from "@/lib/send-lead-email";

export type StoredLead = {
  id: number;
  createdAt: string;
  name: string;
  phone: string;
  area: string | null;
  service: string | null;
  message: string | null;
  source: string | null;
  emailSent: boolean;
};

/**
 * Durable lead storage (Neon / any Postgres over HTTP).
 *
 * Why this exists alongside the email: Gmail can silently stop relaying — rate
 * limits, an account flag, a revoked app password — and until now a failed send
 * meant the enquiry was gone for good. The database is the record of truth; the
 * email is a notification. Every function here degrades to a no-op rather than
 * throwing, so a database outage can never cost us a lead either.
 *
 * Set DATABASE_URL (Vercel's Neon integration also exposes POSTGRES_URL).
 * Without it the site behaves exactly as it did before, minus /admin/leads.
 */
function connectionString(): string {
  return (
    process.env.DATABASE_URL?.trim() ||
    process.env.POSTGRES_URL?.trim() ||
    process.env.NEON_DATABASE_URL?.trim() ||
    ""
  );
}

export function isLeadStoreConfigured(): boolean {
  return connectionString().length > 0;
}

type SqlClient = ReturnType<typeof neon>;

function client(): SqlClient | null {
  const cs = connectionString();
  if (!cs) return null;
  try {
    return neon(cs);
  } catch (e) {
    console.error("[leads] bad connection string:", (e as Error).message);
    return null;
  }
}

// Per-instance latch. The DDL is idempotent and cheap, and nobody is going to
// run a migration tool by hand on this project, so the first write of each cold
// start ensures the table exists.
let schemaReady = false;

async function ensureSchema(sql: SqlClient): Promise<void> {
  if (schemaReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id          BIGSERIAL PRIMARY KEY,
      created_at  TIMESTAMPTZ  NOT NULL DEFAULT now(),
      name        TEXT         NOT NULL,
      phone       TEXT         NOT NULL,
      area        TEXT,
      service     TEXT,
      message     TEXT,
      source      TEXT,
      ip          TEXT,
      user_agent  TEXT,
      email_sent  BOOLEAN      NOT NULL DEFAULT FALSE
    )
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC)
  `;
  schemaReady = true;
}

/** Returns the new row id, or null if storage is off or the write failed. */
export async function saveLead(
  payload: LeadPayload,
  meta: { ip?: string; userAgent?: string } = {},
): Promise<number | null> {
  const sql = client();
  if (!sql) return null;
  try {
    await ensureSchema(sql);
    const rows = (await sql`
      INSERT INTO leads (name, phone, area, service, message, source, ip, user_agent)
      VALUES (
        ${payload.name}, ${payload.phone}, ${payload.area ?? null},
        ${payload.service ?? null}, ${payload.message ?? null},
        ${payload.source ?? null}, ${meta.ip ?? null}, ${meta.userAgent ?? null}
      )
      RETURNING id
    `) as { id: number | string }[];
    const id = rows[0]?.id;
    return id === undefined ? null : Number(id);
  } catch (e) {
    console.error("[leads] insert failed:", (e as Error).message);
    return null;
  }
}

/** Best-effort flag update; a failure here does not affect the stored lead. */
export async function markLeadEmailed(id: number): Promise<void> {
  const sql = client();
  if (!sql) return;
  try {
    await sql`UPDATE leads SET email_sent = TRUE WHERE id = ${id}`;
  } catch (e) {
    console.error("[leads] email flag update failed:", (e as Error).message);
  }
}

export async function listLeads(limit = 500): Promise<StoredLead[]> {
  const sql = client();
  if (!sql) return [];
  try {
    await ensureSchema(sql);
    const rows = (await sql`
      SELECT id, created_at, name, phone, area, service, message, source, email_sent
      FROM leads
      ORDER BY created_at DESC
      LIMIT ${limit}
    `) as Record<string, unknown>[];
    return rows.map((r) => ({
      id: Number(r.id),
      createdAt: new Date(r.created_at as string).toISOString(),
      name: String(r.name),
      phone: String(r.phone),
      area: (r.area as string | null) ?? null,
      service: (r.service as string | null) ?? null,
      message: (r.message as string | null) ?? null,
      source: (r.source as string | null) ?? null,
      emailSent: Boolean(r.email_sent),
    }));
  } catch (e) {
    console.error("[leads] list failed:", (e as Error).message);
    return [];
  }
}
