import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const NAME_RE = /(RobotOmen|Roboto|Roberto)/g;

export function BrandWord({
  name,
  className,
}: {
  name: "RobotOmen" | "Roboto" | "Roberto" | string;
  className?: string;
}) {
  return <span className={cn("brand-word", className)}>{name}</span>;
}

export function withBrandNames(text: string): ReactNode {
  if (!text) return text;
  const parts = text.split(NAME_RE);
  if (parts.length === 1) return text;
  return parts.map((part, index) => {
    if (part === "RobotOmen" || part === "Roboto" || part === "Roberto") {
      return <BrandWord key={`${part}-${index}`} name={part} />;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}
