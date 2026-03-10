import { cn } from "@/lib/utils";

export function Logo({
  className,
  showWordmark = true
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-bold tracking-wide text-foreground",
        showWordmark && "text-lg sm:text-xl",
        className
      )}
    >
      AITRONA
    </span>
  );
}
