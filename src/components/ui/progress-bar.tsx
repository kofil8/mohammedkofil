import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  isAnimating?: boolean;
  duration?: number;
  className?: string;
}

function ProgressBar({
  isAnimating = true,
  duration = 3000,
  className,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(isAnimating ? 10 : 0);

  useEffect(() => {
    if (!isAnimating) {
      return;
    }
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 40;
      });
    }, 200);

    const timeout = setTimeout(() => {
      setProgress(100);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isAnimating, duration]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 z-50",
        progress === 0 ? "w-0" : `w-[${progress}%]`,
        className,
      )}
      style={{
        width: `${progress}%`,
        opacity: isAnimating ? 1 : 0,
      }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

export { ProgressBar };
export type { ProgressBarProps };
