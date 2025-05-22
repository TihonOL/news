import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  text?: string;
  className?: string;
}

export function Loader({
  size = 24,
  text,
  className,
  ...props
}: LoaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      <LoaderCircle
        className="animate-spin text-primary"
        size={size}
        aria-hidden="true"
      />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}