import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg";
}

const spacingMap = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
};

export function Section({ spacing = "md", className, children, ...props }: SectionProps) {
  return (
    <section className={cn(spacingMap[spacing], className)} {...props}>
      {children}
    </section>
  );
}
