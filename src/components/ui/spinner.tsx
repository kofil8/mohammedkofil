import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SpinnerProps extends React.ComponentProps<"svg"> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "gradient" | "pulse";
}

const sizeMap = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
  xl: "size-12",
};

function Spinner({
  className,
  size = "md",
  variant = "default",
  ...props
}: SpinnerProps) {
  const animationClass = variant === "pulse" ? "animate-pulse" : "animate-spin";

  const baseClass = cn(sizeMap[size], animationClass, className);

  if (variant === "gradient") {
    return (
      <div className={cn("rounded-full", sizeMap[size])}>
        <div
          className={cn(
            "rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin",
            sizeMap[size],
          )}
        />
      </div>
    );
  }

  return (
    <Loader2
      role="status"
      aria-label="Loading"
      className={baseClass}
      {...props}
    />
  );
}

export { Spinner };
export type { SpinnerProps };
