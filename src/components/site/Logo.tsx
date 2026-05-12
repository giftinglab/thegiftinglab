import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span
        className={`grid h-8 w-8 place-items-center rounded-sm font-display text-sm font-semibold ${
          light ? "bg-background text-primary" : "bg-primary text-primary-foreground"
        }`}
      >
        GL
      </span>
      <span className="font-display text-lg tracking-tight">
        The Gifting Lab
      </span>
    </Link>
  );
}