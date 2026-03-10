"use client";

import { CloudUpload, PlugZap, MessagesSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const steps = [
  {
    step: "Step 1",
    title: "Train the AI",
    description: "Businesses upload their information, FAQs, products, and policies.",
    icon: CloudUpload
  },
  {
    step: "Step 2",
    title: "Deploy the AI",
    description: "The AI connects to WhatsApp, Instagram, and phone systems.",
    icon: PlugZap
  },
  {
    step: "Step 3",
    title: "AI Handles Customers",
    description:
      "The AI chats, answers questions, books appointments, and transfers to humans when needed.",
    icon: MessagesSquare
  }
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-28 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From knowledge to conversations in days"
          description="A simple setup flow that gets your AI live on the channels that matter."
        />

        <Stagger className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <StaggerItem key={s.step}>
              <StepCard index={idx + 1} {...s} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function StepCard({
  index,
  step,
  title,
  description,
  icon: Icon
}: {
  index: number;
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Card className="relative h-full overflow-hidden p-6 transition">
      <div aria-hidden="true" className="absolute right-4 top-4 text-4xl font-semibold text-muted/60">
        {index}
      </div>
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-muted/40 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {step}
          </div>
          <div className="text-base font-semibold">{title}</div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </Card>
  );
}

