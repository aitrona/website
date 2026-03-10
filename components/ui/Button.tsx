import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] " +
  "hover:scale-105 hover:shadow-lg";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 text-primary-foreground " +
    "shadow-[0_18px_45px_rgba(56,189,248,0.40)] hover:brightness-110 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]",
  secondary:
    "border border-border/70 bg-muted/60 text-foreground hover:bg-muted/80 hover:shadow-[0_0_30px_rgba(148,163,184,0.12)]",
  ghost:
    "text-muted-foreground hover:text-foreground hover:bg-muted/40 border border-transparent"
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base"
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href"> &
  CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

