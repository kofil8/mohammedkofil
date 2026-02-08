import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Command, X } from "lucide-react";
import { useEffect, useState } from "react";

export function CommandPaletteHint() {
  const [isVisible, setIsVisible] = useState(false);
  const STORAGE_KEY = "command-palette-hint-dismissed";

  useEffect(() => {
    // Check if user has already seen the hint
    const hasSeenHint = localStorage.getItem(STORAGE_KEY);

    if (!hasSeenHint) {
      // Show hint after 2 seconds delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const isMac =
    typeof navigator !== "undefined" &&
    navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  const shortcut = isMac ? "⌘K" : "Ctrl+K";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="relative rounded-lg border bg-card p-4 shadow-lg backdrop-blur-sm">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDismiss}
              className="absolute right-2 top-2 h-6 w-6"
              aria-label="Dismiss hint"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Content */}
            <div className="flex items-start gap-3 pr-6">
              <div className="mt-1 rounded-full bg-primary/10 p-2">
                <Command className="h-5 w-5 text-primary" />
              </div>

              <div className="flex-1 space-y-2">
                <h4 className="font-semibold text-foreground">💡 Quick Tip</h4>
                <p className="text-sm text-muted-foreground">
                  Press{" "}
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                    {shortcut}
                  </kbd>{" "}
                  to open the command palette for quick navigation
                </p>

                <div className="flex gap-2 pt-1">
                  <Button
                    onClick={handleDismiss}
                    size="sm"
                    variant="outline"
                    className="h-8 text-xs"
                  >
                    Got it!
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
