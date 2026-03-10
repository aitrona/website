"use client";

import { Instagram, MessageCircle, PhoneCall } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

function waLink(e164: string) {
  const digits = e164.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

function igLink(handle: string) {
  const clean = handle.replace(/^@/, "");
  return `https://instagram.com/${clean}`;
}

export function LiveDemo() {
  return (
    <section id="demo" className="scroll-mt-28 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Live demo"
          title="Test our AI"
          description="Try AITRONA instantly with demo channels across chat and voice."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3">
          <Reveal>
            <DemoCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp AI"
              subtitle="Message our bot on WhatsApp"
              value={site.demo.whatsappNumberE164}
              ctaLabel="Chat on WhatsApp"
              href={waLink(site.demo.whatsappNumberE164)}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <DemoCard
              icon={<Instagram className="h-5 w-5" />}
              title="Instagram AI"
              subtitle="DM our Instagram bot"
              value={site.demo.instagramHandle}
              ctaLabel="Open Instagram"
              href={igLink(site.demo.instagramHandle)}
            />
          </Reveal>
          <Reveal delay={0.16}>
            <DemoCard
              icon={<PhoneCall className="h-5 w-5" />}
              title="AI Receptionist"
              subtitle="Call our AI Receptionist"
              value={site.demo.callNumberE164}
              ctaLabel="Call AI Receptionist"
              href={`tel:${site.demo.callNumberE164}`}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function DemoCard({
  icon,
  title,
  subtitle,
  value,
  ctaLabel,
  href
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  value: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <Card className="h-full p-6 transition">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-muted/40 text-primary">
          {icon}
        </div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-sm text-muted-foreground">{subtitle}</div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-background/40 px-4 py-3">
        <div className="text-xs text-muted-foreground">Demo contact</div>
        <div className="mt-1 font-mono text-sm">{value}</div>
      </div>

      <div className="mt-6">
        <ButtonLink href={href} target="_blank" rel="noreferrer" variant="secondary" className="w-full justify-center">
          {ctaLabel}
        </ButtonLink>
      </div>
    </Card>
  );
}

