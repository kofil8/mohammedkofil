import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

interface PageLoaderProps {
  message?: string;
  subMessage?: string;
  fullScreen?: boolean;
  className?: string;
  spinnerSize?: "sm" | "md" | "lg" | "xl";
  spinnerVariant?: "default" | "gradient" | "pulse";
}

function PageLoader({
  message = "Loading",
  subMessage = "Please wait...",
  fullScreen = false,
  className,
  spinnerSize = "lg",
  spinnerVariant = "default",
}: PageLoaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        fullScreen
          ? "fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          : "py-20",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse" />
          <Spinner
            size={spinnerSize}
            variant={spinnerVariant}
            className="text-blue-500"
          />
        </div>

        <div className="text-center space-y-1">
          <h3 className="text-lg font-semibold text-foreground">{message}</h3>
          {subMessage && (
            <p className="text-sm text-muted-foreground">{subMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Minimal loader for in-section loading
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20 gap-3">
      <Spinner size="md" variant="default" />
      <span className="text-muted-foreground text-sm">Loading section...</span>
    </div>
  );
}

// Loading overlay for modals/dialogs
function LoadingOverlay({ message = "Processing..." }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <PageLoader message={message} fullScreen={false} />
    </div>
  );
}

export { LoadingOverlay, PageLoader, SectionLoader };
export type { PageLoaderProps };
