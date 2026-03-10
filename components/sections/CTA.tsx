"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CTA() {
  return (
    <section id="contact" className="scroll-mt-28 py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 shadow-glow sm:p-12">
          <div aria-hidden="true" className="absolute inset-0 bg-hero-glow opacity-80" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />

          <div className="relative mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Let AI Handle Your Customers
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
                Book a demo to see WhatsApp, Instagram, and AI Receptionist working together — with your brand voice and your business rules.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="#demo" variant="secondary" size="lg" className="justify-center">
                  Try the AI
                </ButtonLink>
                <ButtonLink href="mailto:founder.aitrona@gmail.com" size="lg" className="group justify-center">
                  Book a Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Contact: <span className="font-mono">founder.aitrona@gmail.com</span>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

