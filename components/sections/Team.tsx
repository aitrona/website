"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const founders = [
  {
    name: "Aarya Sharma",
    title: "Co-Founder",
    bio: "Focused on building delightful AI products that feel human, safe, and reliable at scale.",
    imageSrc: "/founders/aarya-sharma.png",
    objectPosition: "50% 12%"
  },
  {
    name: "Yash Bhalekar",
    title: "Co-Founder",
    bio: "Obsessed with converting conversations into revenue with automation that respects brand voice.",
    imageSrc: "/founders/yash-bhalekar.png",
    objectPosition: "50% 6%"
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
  bio,
  imageSrc,
  objectPosition
}: {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  objectPosition: string;
}) {
  return (
    <Card className="group p-6 transition">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border bg-muted/50">
          <Image
            src={imageSrc}
            alt={`${name} headshot`}
            fill
            sizes="64px"
            className="object-cover"
            style={{ objectPosition }}
          />
          <div aria-hidden="true" className="absolute inset-0 ring-1 ring-white/10" />
        </div>
        <div>
          <div className="text-base font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{title}</div>
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{bio}</p>
    </Card>
  );
}

