"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function Reveal({
  className,
  children,
  delay = 0,
  y = 14,
  ...props
}: MotionProps & {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

