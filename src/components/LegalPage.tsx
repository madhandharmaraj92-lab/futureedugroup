import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function LegalPage({ title, path, children }: { title: string; path: string; children: ReactNode }) {
  return (
    <main>
      <Breadcrumbs title={title} items={[{ name: title, path }]} />
      <section className="legal-content">
        <div className="container">
          <div className="legal-content-inner">{children}</div>
        </div>
      </section>
    </main>
  );
}
