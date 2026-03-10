"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" }
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              AI agents that respond on WhatsApp, Instagram, and phone calls — and a personal assistant AI for busy professionals.
            </p>
          </div>

          <div className="grid gap-2 md:justify-self-center">
            <div className="text-sm font-semibold">Links</div>
            <nav className="grid gap-1" aria-label="Footer">
              {footerLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:justify-self-end">
            <div className="text-sm font-semibold">Social</div>
            <div className="mt-3 flex items-center gap-2">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/60 text-muted-foreground transition hover:text-foreground hover:bg-muted/50"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            © 2026 {site.name}
          </div>
          <div className="flex items-center gap-4">
            <Link href="#top" className="hover:text-foreground">
              Back to top
            </Link>
            <a className="hover:text-foreground" href="mailto:founder.aitrona@gmail.com">
              founder.aitrona@gmail.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

