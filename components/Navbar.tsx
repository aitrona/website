"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#demo", label: "Live Demo" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" }
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkNodes = useMemo(
    () =>
      links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground hover:bg-muted/50"
        >
          {l.label}
        </Link>
      )),
    []
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent",
        scrolled &&
          "border-border/70 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="#top" className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {linkNodes}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href="#contact" variant="primary" size="sm">
            Book Demo
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/70 backdrop-blur transition hover:bg-muted/60"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="pb-4">
          <div className="mt-2 grid gap-1 rounded-2xl border border-border bg-card/70 p-2 backdrop-blur">
            {linkNodes}
            <div className="mt-2 grid gap-2 p-1">
              <ButtonLink href="#demo" variant="secondary">
                Try the AI
              </ButtonLink>
              <ButtonLink href="#contact" variant="primary">
                Book Demo
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

