import {
  SectionHeader,
  SectionWrapper,
} from "@/components/custom/SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Cloud, Code2, Database, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation("about");
  const { ref: imageRef, isInView: imageInView } =
    useScrollAnimation<HTMLDivElement>({
      threshold: 0.2,
      triggerOnce: true,
    });

  const interests = [
    {
      icon: Code2,
      title: t("interests.backend.title"),
      description: t("interests.backend.description"),
    },
    {
      icon: Cloud,
      title: t("interests.cloud.title"),
      description: t("interests.cloud.description"),
    },
    {
      icon: Layers,
      title: t("interests.saas.title"),
      description: t("interests.saas.description"),
    },
    {
      icon: Database,
      title: t("interests.design.title"),
      description: t("interests.design.description"),
    },
  ];

  return (
    <SectionWrapper id="about" className="relative">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-2xl rounded-3xl" />

            {/* Image Container */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-border/50">
              <motion.img
                src="/about-portrait.png"
                alt={t("imageAlt")}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                loading="lazy"
              />

              {/* Scanline Effect on Hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
                  }}
                />
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                imageInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-card border border-border shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-gradient">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("stats.experience")}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-heading font-bold">{t("heading")}</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("paragraphs.intro")}</p>
              <p>{t("paragraphs.experience")}</p>
              <p>{t("paragraphs.company", { company: t("companyName") })}</p>
            </div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
              >
                <interest.icon className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-heading font-semibold text-sm mb-1">
                  {interest.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
