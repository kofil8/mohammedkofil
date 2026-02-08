import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  animate?: boolean;
}

function Skeleton({ className, animate = true, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-md",
        animate && "animate-pulse",
        className,
      )}
      {...props}
    />
  );
}

// Skeleton for section headers
function SkeletonHeader() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

// Skeleton for cards
function SkeletonCard() {
  return (
    <div className="space-y-3 p-4 rounded-lg border border-border/50">
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

// Skeleton for grid of cards
function SkeletonGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export { Skeleton, SkeletonCard, SkeletonGrid, SkeletonHeader };
export type { SkeletonProps };
