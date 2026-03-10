import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-card/40 bg-clip-padding backdrop-blur-xl",
        "supports-[backdrop-filter]:bg-gradient-to-b supports-[backdrop-filter]:from-white/5 supports-[backdrop-filter]:to-white/0",
        "dark:supports-[backdrop-filter]:from-white/5 dark:supports-[backdrop-filter]:to-white/0",
        "shadow-[0_0_0_1px_rgba(148,163,184,0.25)]",
        className
      )}
      {...props}
    />
  );
}

