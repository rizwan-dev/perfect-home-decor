/**
 * Admin shell.
 *
 * The root layout mounts the marketing chrome (WhatsApp bubble, "Book visit"
 * pill, mobile CTA bar) for every route, and those float over a dense table. A
 * separate root layout would mean restructuring all 58 marketing routes into a
 * route group, so instead this hides just those three overlays via their
 * `data-site-float` marker. Deliberately not `.fixed` — that would also catch
 * the navbar's mobile menu panel and break navigation on a phone.
 *
 * The navbar and footer stay: they're a useful way back to the live site.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-admin-shell className="min-h-screen bg-cream">
      <style>{`
        body:has([data-admin-shell]) [data-site-float] { display: none !important; }
        body:has([data-admin-shell]) { padding-bottom: 0 !important; }
      `}</style>
      {children}
    </div>
  );
}
