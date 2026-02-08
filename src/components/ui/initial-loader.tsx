import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface InitialLoaderProps {
  onLoadingComplete?: () => void;
  minLoadTime?: number;
  readyToFinish?: boolean;
  timeoutMs?: number;
}

function InitialLoader({
  onLoadingComplete,
  minLoadTime = 1800,
  readyToFinish = true,
  timeoutMs = 8000,
}: InitialLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [minTimeDone, setMinTimeDone] = useState(false);
  const [timeoutDone, setTimeoutDone] = useState(false);
  const hasCompleted = useRef(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const finishReady = readyToFinish || timeoutDone;
        if (finishReady && minTimeDone) {
          return 100;
        }

        const cap = minTimeDone ? 95 : 85;
        if (prev >= cap) {
          return prev;
        }

        return Math.min(prev + Math.random() * 10 + 2, cap);
      });
    }, 80);

    return () => {
      clearInterval(progressInterval);
    };
  }, [minTimeDone, readyToFinish, timeoutDone]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeDone(true);
    }, minLoadTime);

    return () => {
      clearTimeout(timer);
    };
  }, [minLoadTime]);

  useEffect(() => {
    if (!timeoutMs) return;
    const timer = setTimeout(() => {
      setTimeoutDone(true);
    }, timeoutMs);

    return () => {
      clearTimeout(timer);
    };
  }, [timeoutMs]);

  useEffect(() => {
    if (!isVisible || hasCompleted.current) return;
    if (!minTimeDone || (!readyToFinish && !timeoutDone)) return;

    hasCompleted.current = true;

    // Use requestAnimationFrame to avoid synchronous setState warning
    requestAnimationFrame(() => {
      setProgress(100);
    });

    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete?.();
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [isVisible, minTimeDone, onLoadingComplete, readyToFinish, timeoutDone]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl"
              />

              {/* Lottie Animation */}
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-48 w-48"
              >
                <DotLottieReact
                  src="https://lottie.host/da60d9bc-dfe6-4c46-96df-6932e4ef1c6f/hKfy4ZB2dZ.lottie"
                  loop
                  autoplay
                  className="h-full w-full"
                />
              </motion.div>
            </motion.div>

            {/* Text Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mohammad Kofil
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground mt-2"
              >
                Backend Engineer
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="relative h-1.5 w-[240px] overflow-hidden rounded-full bg-muted/50"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.15, ease: "linear" }}
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              />
              {/* Shimmer effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              ))}
            </motion.div>

            {/* Loading percentage */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8 }}
              className="text-xs text-muted-foreground font-mono"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { InitialLoader };
export type { InitialLoaderProps };
