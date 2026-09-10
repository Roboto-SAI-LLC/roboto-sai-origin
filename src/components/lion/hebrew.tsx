import { cn } from "@/lib/utils";

export function Hebrew({
  children,
  className,
  size = "body",
}: {
  children: string;
  className?: string;
  size?: "hero" | "display" | "body" | "caption";
}) {
  const sizeClass =
    size === "hero"
      ? "text-2xl leading-snug sm:text-4xl sm:leading-snug"
      : size === "display"
        ? "text-xl leading-snug sm:text-2xl"
        : size === "caption"
          ? "text-base leading-relaxed"
          : "text-lg leading-relaxed";

  return (
    <p
      lang="he"
      dir="rtl"
      className={cn("hebrew text-fg", sizeClass, className)}
    >
      {children}
    </p>
  );
}
