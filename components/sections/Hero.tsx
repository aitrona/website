"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className={cn("relative isolate overflow-hidden", "min-h-[100svh]")}
    >
      {/* Base background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/ai-hand-background.png')] bg-cover bg-center"
      />

      {/* Floating hand layers (cropped from same image) */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-95"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [-8, 8],
                x: [0, 10]
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
              }
        }
        style={{
          // reveal mostly the left side and fade toward center
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 70%)"
        }}
      >
        <div className="absolute inset-0 bg-[url('/ai-hand-background.png')] bg-cover bg-[position:15%_50%]" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-95"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [8, -8],
                x: [0, -10]
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
              }
        }
        style={{
          // reveal mostly the right side and fade toward center
          maskImage:
            "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage:
            "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 70%)"
        }}
      >
        <div className="absolute inset-0 bg-[url('/ai-hand-background.png')] bg-cover bg-[position:85%_50%]" />
      </motion.div>

      {/* Overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.18), transparent 60%)"
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid bg-grid-dark opacity-[0.10]"
      />

      {/* Foreground content */}
      <Container className="relative flex min-h-[100svh] items-center py-32">
        <div className="mx-auto w-full max-w-4xl text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-200 backdrop-blur"
          >
            <span className="text-gradient font-semibold">AITRONA</span>
            <span className="ml-2 hidden sm:inline text-gray-300">
              AI agents for WhatsApp, Instagram, and calls
            </span>
          </motion.div>

          <div className="space-y-6">
            <h1 className="font-display text-5xl md:text-6xl md:whitespace-nowrap font-bold tracking-tight text-white">
              AI That Talks To Your Customers
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed text-pretty">
              AITRONA deploys AI across WhatsApp, Instagram, and phone calls to
              automate customer conversations.
            </p>
          </div>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href="#demo"
              size="lg"
              className="group justify-center"
              aria-label="Try the AI"
            >
              Try the AI
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink
              href="#contact"
              size="lg"
              variant="secondary"
              className="justify-center"
              aria-label="Book demo"
            >
              Book Demo
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
