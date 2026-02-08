import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  className?: string;
  delay?: number;
}

const levelColors = {
  beginner: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  intermediate: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  advanced: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  expert: "bg-amber-500/10 text-amber-500 border-amber-500/20",
};

export function SkillBadge({
  name,
  icon,
  level = "intermediate",
  className,
  delay = 0,
}: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full border",
        "bg-card/50 backdrop-blur-sm",
        "hover:bg-card hover:border-primary/30 hover:shadow-glow",
        "transition-all duration-300 cursor-default",
        className,
      )}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="font-medium text-sm">{name}</span>
      {level && (
        <span
          className={cn(
            "text-xs px-2 py-0.5 rounded-full border",
            levelColors[level],
          )}
        >
          {level}
        </span>
      )}
    </motion.div>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: Array<{
    name: string;
    icon?: React.ReactNode;
    level?: "beginner" | "intermediate" | "advanced" | "expert";
  }>;
  className?: string;
  delay?: number;
}

export function SkillCategory({
  title,
  skills,
  className,
  delay = 0,
}: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("space-y-4", className)}
    >
      <h3 className="text-lg font-heading font-semibold text-foreground flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary" />
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            delay={delay + index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}
