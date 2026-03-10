"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type BillingPeriod = "monthly" | "3m" | "6m" | "12m";

const billingOptions: { id: BillingPeriod; label: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "3m", label: "3 Months" },
  { id: "6m", label: "6 Months" },
  { id: "12m", label: "12 Months" }
] as const;

const tierPricing: Record<
  BillingPeriod,
  {
    starter: string;
    growth: string;
    enterprise: string;
  }
> = {
  monthly: {
    starter: "₹4,999 / Month",
    growth: "₹7,999 / Month",
    enterprise: "₹11,999 / Month"
  },
  "3m": {
    starter: "₹13,249 / 3 Months",
    growth: "₹22,799 / 3 Months",
    enterprise: "₹33,199 / 3 Months"
  },
  "6m": {
    starter: "₹26,999 / 6 Months",
    growth: "₹43,199 / 6 Months",
    enterprise: "₹64,799 / 6 Months"
  },
  "12m": {
    starter: "₹47,999 / 12 Months",
    growth: "₹76,799 / 12 Months",
    enterprise: "₹115,199 / 12 Months"
  }
};

const tiers = [
  {
    id: "starter" as const,
    name: "Starter",
    tagline: "For small businesses",
    setup: "Setup: ₹14,999 one-time + 1st Month free",
    features: [
      "Choose 1 Bot",
      "WhatsApp AI Bot",
      "Instagram AI Bot",
      "AI Receptionist",
      "AI trained on business data",
      "Appointment booking",
      "Human call transfer",
      "Unlimited Conversations"
    ],
    cta: "Get Started",
    emphasized: false
  },
  {
    id: "growth" as const,
    name: "Growth",
    tagline: "For growing businesses",
    setup: "Setup: ₹22,999 one-time + 1st Month free",
    features: [
      "Choose Any 2 Bots",
      "WhatsApp + Instagram",
      "WhatsApp + AI Receptionist",
      "Instagram + AI Receptionist",
      "Appointment automation",
      "Human call transfer",
      "AI trained on business data",
      "Unlimited Conversations"
    ],
    cta: "Get Started",
    emphasized: true
  },
  {
    id: "enterprise" as const,
    name: "Enterprise",
    tagline: "For high-volume businesses",
    setup: "Setup: ₹29,999 one-time + 1st Month free",
    features: [
      "All 3 Bots Included",
      "WhatsApp AI Bot",
      "Instagram AI Bot",
      "AI Receptionist",
      "Human call transfer",
      "Priority support",
      "AI trained on business data",
      "Unlimited Conversations"
    ],
    cta: "Get Started",
    emphasized: false
  }
] as const;

export function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <section id="pricing" className="scroll-mt-28 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with conversations"
          description="Flexible subscription options for businesses of every size."
        />

        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 text-xs text-muted-foreground backdrop-blur">
            {billingOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setBilling(opt.id)}
                className={cn(
                  "px-3 py-1.5 rounded-full transition text-xs sm:text-sm",
                  billing === opt.id
                    ? "bg-primary text-primary-foreground shadow-[0_0_25px_rgba(56,189,248,0.45)]"
                    : "bg-transparent hover:bg-muted/60"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground sm:text-xs">
            Save up to <span className="font-semibold text-primary">20%</span> with annual plan.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 0.07}>
              <TierCard
                {...t}
                price={tierPricing[billing][t.id]}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TierCard({
  name,
  tagline,
  price,
  setup,
  features,
  cta,
  emphasized
}: {
  name: string;
  tagline: string;
  price: string;
  setup: string;
  features: readonly string[];
  cta: string;
  emphasized: boolean;
}) {
  return (
    <Card
      className={cn(
        "relative h-full p-6 transition",
        emphasized && "border-primary/40 shadow-[0_0_0_1px_rgba(99,102,241,0.35)]"
      )}
    >
      {emphasized ? (
        <div className="absolute right-6 top-6 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Most Popular
        </div>
      ) : null}

      <div className="text-sm font-semibold">{name}</div>
      <div className="mt-1 text-sm text-muted-foreground">{tagline}</div>

      <div className="mt-6">
        <div className="text-4xl font-semibold tracking-tight">{price}</div>
        <div className="mt-2 text-xs text-muted-foreground">{setup}</div>
      </div>

      <div className="mt-6 space-y-3">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-3 text-sm">
            <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary">
              <Check className="h-3.5 w-3.5" />
            </div>
            <div className="text-muted-foreground">{f}</div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <ButtonLink
          href="#contact"
          className="w-full justify-center"
          variant={emphasized ? "primary" : "secondary"}
        >
          {cta}
        </ButtonLink>
      </div>
    </Card>
  );
}

