"use client";

import { Instagram, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "WhatsApp AI Bot",
    description:
      "AI that chats with customers on WhatsApp, answers questions, sends product info, and books appointments automatically.",
    icon: MessageCircle
  },
  {
    title: "Instagram AI Bot",
    description:
      "AI replies to Instagram DMs instantly, turning followers into customers.",
    icon: Instagram
  },
  {
    title: "AI Receptionist",
    description:
      "Human-like AI Receptionist that answers calls, speaks naturally, schedules appointments, and transfers to a human when requested.",
    icon: PhoneCall
  },
  {
    title: "Personal AI Assistant",
    description:
      'A personal AI "Jarvis" for busy people that manages calendar bookings, schedules meetings, and communicates with others on your behalf.',
    icon: Sparkles
  }
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Deploy AI where customers already talk"
          description="One platform. Multiple channels. A consistent, on-brand experience across chat and voice."
        />

        <Stagger className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <ServiceCard {...s} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Card className="group h-full p-6 transition">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-muted/40 text-primary shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />
    </Card>
  );
}

