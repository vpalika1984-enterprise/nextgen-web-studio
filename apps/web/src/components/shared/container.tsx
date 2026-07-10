import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
}

export function Container({ as: Tag = "div", className, children, ...props }: ContainerProps) {
  return (
    <Tag className={cn("container", className)} {...props}>
      {children}
    </Tag>
  );
}
