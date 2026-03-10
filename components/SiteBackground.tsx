export function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 animated-mesh opacity-70 dark:opacity-80" />
      <div className="absolute inset-0 bg-grid bg-grid-light dark:bg-grid-dark opacity-[0.45] dark:opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/35 to-background" />
      <div className="absolute inset-0 noise opacity-[0.06] dark:opacity-[0.08]" />
    </div>
  );
}

