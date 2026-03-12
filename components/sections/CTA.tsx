"use client";

import { Container } from "@/components/ui/Container";
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
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Contact Us</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-6 space-y-3 text-base text-muted-foreground sm:text-lg">
                <p>
                  Email:{" "}
                  <a className="font-medium text-foreground hover:underline" href="mailto:founder.aitrona@gmail.com">
                    founder.aitrona@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a className="font-medium text-foreground hover:underline" href="tel:+918097922903">
                    +91 8097922903
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
