import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Tri-State Stone",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-[family-name:var(--font-cormorant)] text-8xl font-light text-gold">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
      <a href="/" className="mt-8 text-sm uppercase tracking-wider text-gold hover:underline">
        Return Home
      </a>
    </main>
  );
}
