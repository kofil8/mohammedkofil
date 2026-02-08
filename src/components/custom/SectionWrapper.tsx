import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  delay?: number;
  as?: "section" | "article" | "aside";
  ariaLabel?: string;
  staggerChildren?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.0,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function SectionWrapper({
  children,
  id,
  className,
  containerClassName,
  delay = 0,
  as: Component = "section",
  ariaLabel,
  staggerChildren = true,
}: SectionWrapperProps) {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionComponent = motion[Component] as any;

  return (
    <MotionComponent
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("py-16 sm:py-20 lg:py-24", className)}
      aria-label={ariaLabel}
    >
      <motion.div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          containerClassName,
        )}
        initial={staggerChildren ? "hidden" : undefined}
        animate={isInView && staggerChildren ? "visible" : undefined}
        variants={staggerChildren ? containerVariants : undefined}
      >
        {staggerChildren ? (
          <motion.div variants={itemVariants}>{children}</motion.div>
        ) : (
          children
        )}
      </motion.div>
    </MotionComponent>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn("mb-12 lg:mb-16", alignClasses[align], className)}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
