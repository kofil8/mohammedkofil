import {
  SectionHeader,
  SectionWrapper,
} from "@/components/custom/SectionWrapper";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Experience() {
  const { t } = useTranslation("experience");

  const experiences = [
    {
      title: t("items.devSync.title"),
      company: t("items.devSync.company"),
      period: t("items.devSync.period"),
      description: t("items.devSync.description"),
      icon: Rocket,
      type: "work",
    },
    {
      title: t("items.techSolutions.title"),
      company: t("items.techSolutions.company"),
      period: t("items.techSolutions.period"),
      description: t("items.techSolutions.description"),
      icon: Code2,
      type: "work",
    },
    {
      title: t("items.digitalInnovations.title"),
      company: t("items.digitalInnovations.company"),
      period: t("items.digitalInnovations.period"),
      description: t("items.digitalInnovations.description"),
      icon: Briefcase,
      type: "work",
    },
    {
      title: t("items.education.title"),
      company: t("items.education.company"),
      period: t("items.education.period"),
      description: t("items.education.description"),
      icon: GraduationCap,
      type: "education",
    },
  ];

  return (
    <SectionWrapper id="experience" className="relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-primary via-secondary to-accent"
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={cn(
                "relative flex items-start gap-8",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
              )}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    "bg-card border-2 border-primary shadow-glow",
                  )}
                >
                  <experience.icon className="h-5 w-5 text-primary" />
                </motion.div>
              </div>

              {/* Content Card */}
              <div
                className={cn(
                  "ml-16 md:ml-0 md:w-[calc(50%-3rem)]",
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8",
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={cn(
                    "p-6 rounded-2xl bg-card border border-border/50",
                    "hover:border-primary/30 hover:shadow-glow transition-all duration-300",
                  )}
                >
                  {/* Period Badge */}
                  <span
                    className={cn(
                      "inline-block px-3 py-1 rounded-full text-xs font-medium mb-3",
                      experience.type === "education"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    {experience.period}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-bold mb-1">
                    {experience.title}
                  </h3>

                  {/* Company */}
                  <p className="text-primary font-medium text-sm mb-3">
                    {experience.company}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
