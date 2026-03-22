import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LeadForm } from "./LeadForm";

vi.mock("@/lib/site", () => ({
  COMPANY: {
    name: "Perfect Home Decor",
    whatsappE164: "919999999999",
  },
  whatsappLink: (msg: string) =>
    `https://wa.me/?text=${encodeURIComponent(msg)}`,
}));

function mockFetchResponse(overrides: {
  ok: boolean;
  status?: number;
  json?: () => Promise<unknown>;
}) {
  return {
    ok: overrides.ok,
    status: overrides.status ?? (overrides.ok ? 200 : 500),
    json:
      overrides.json ??
      (async () =>
        overrides.ok
          ? { ok: true, emailSent: true }
          : { ok: false, error: "Server error" }),
  };
}

describe("LeadForm", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("submits and shows success when API returns ok", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue(
      mockFetchResponse({ ok: true }),
    );
    globalThis.fetch = fetchMock;

    render(<LeadForm source="test-suite" />);

    await user.type(screen.getByLabelText(/^name$/i), "Test User");
    await user.type(screen.getByLabelText(/phone/i), "9876543210");
    await user.click(
      screen.getByRole("button", { name: /request free consultation/i }),
    );

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/call you shortly/i);
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/lead",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.stringContaining("Test User"),
      }),
    );
    const body = JSON.parse(fetchMock.mock.calls[0][1].body as string);
    expect(body).toMatchObject({
      name: "Test User",
      phone: "9876543210",
      source: "test-suite",
    });
  });

  it("shows SMTP setup hint when API accepts but email was not sent", async () => {
    const user = userEvent.setup();
    globalThis.fetch = vi.fn().mockResolvedValue(
      mockFetchResponse({
        ok: true,
        json: async () => ({
          ok: true,
          emailSent: false,
          info: "Configure SMTP in .env.local.",
        }),
      }),
    );

    render(<LeadForm />);
    await user.type(screen.getByLabelText(/^name$/i), "No Mail");
    await user.type(screen.getByLabelText(/phone/i), "9000000001");
    await user.click(
      screen.getByRole("button", { name: /request free consultation/i }),
    );

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/email not sent/i);
    });
    expect(screen.getByRole("status")).toHaveTextContent(/Configure SMTP/i);
  });

  it("shows server error when API returns not ok", async () => {
    const user = userEvent.setup();
    globalThis.fetch = vi.fn().mockResolvedValue(
      mockFetchResponse({
        ok: false,
        status: 503,
        json: async () => ({
          ok: false,
          error: "Email is not configured on the server yet.",
        }),
      }),
    );

    render(<LeadForm />);

    await user.type(screen.getByLabelText(/^name$/i), "A");
    await user.type(screen.getByLabelText(/phone/i), "1");
    await user.click(
      screen.getByRole("button", { name: /request free consultation/i }),
    );

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(
        /not configured on the server/i,
      );
    });
  });

  it("resets the form after success even when fetch is async (no false network error)", async () => {
    const user = userEvent.setup();
    let resolveJson!: (value: unknown) => void;
    const jsonDeferred = new Promise<unknown>((r) => {
      resolveJson = r;
    });

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => jsonDeferred,
    });

    render(<LeadForm />);
    const nameInput = screen.getByLabelText(/^name$/i) as HTMLInputElement;
    const phoneInput = screen.getByLabelText(/phone/i) as HTMLInputElement;

    await user.type(nameInput, "Delayed");
    await user.type(phoneInput, "9000000000");

    const clickPromise = user.click(
      screen.getByRole("button", { name: /request free consultation/i }),
    );
    resolveJson({ ok: true, emailSent: true });
    await clickPromise;

    await waitFor(() => {
      expect(screen.getByRole("status")).toBeInTheDocument();
    });
    expect(nameInput.value).toBe("");
    expect(phoneInput.value).toBe("");
  });
});
