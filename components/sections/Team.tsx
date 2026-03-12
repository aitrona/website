"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const founders = [
  {
    name: "Aarya Sharma",
    title: "Co-Founder - AITRONA",
    phone: "+91 9967242003"
  },
  {
    name: "Yash Bhalekar",
    title: "Co-Founder - AITRONA",
    phone: "+91 80971 36289"
  }
] as const;

export function Team() {
  return (
    <section id="team" className="scroll-mt-28 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Team"
          title="Meet the Founders"
          description="A small team shipping fast — building AI agents for real-world customer conversations."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
          {founders.map((f, idx) => (
            <Reveal key={f.name} delay={idx * 0.08}>
              <FounderCard {...f} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FounderCard({
  name,
  title,
  phone
}: {
  name: string;
  title: string;
  phone: string;
}) {
  return (
    <Card className="group p-6 text-center transition sm:p-8">
      <div className="flex min-h-[112px] flex-col items-center justify-center gap-2">
        <div className="text-lg font-semibold sm:text-xl">{name}</div>
        <div className="text-sm text-muted-foreground sm:text-base">{title}</div>
        <div className="text-sm text-muted-foreground/90">{phone}</div>
      </div>
    </Card>
  );
}
