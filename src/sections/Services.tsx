import {
  SectionHeader,
  SectionWrapper,
} from "@/components/custom/SectionWrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  Rocket,
  Server,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Services() {
  const { t } = useTranslation("services");

  const services = [
    {
      icon: Rocket,
      title: t("items.saas.title"),
      description: t("items.saas.description"),
      color: "from-blue-500 to-cyan-500",
      features: t("items.saas.features", { returnObjects: true }) as string[],
    },
    {
      icon: Server,
      title: t("items.backend.title"),
      description: t("items.backend.description"),
      color: "from-purple-500 to-pink-500",
      features: t("items.backend.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Code2,
      title: t("items.api.title"),
      description: t("items.api.description"),
      color: "from-orange-500 to-red-500",
      features: t("items.api.features", { returnObjects: true }) as string[],
    },
    {
      icon: Cloud,
      title: t("items.cloud.title"),
      description: t("items.cloud.description"),
      color: "from-green-500 to-emerald-500",
      features: t("items.cloud.features", { returnObjects: true }) as string[],
    },
    {
      icon: Database,
      title: t("items.business.title"),
      description: t("items.business.description"),
      color: "from-indigo-500 to-violet-500",
      features: t("items.business.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Zap,
      title: t("items.mvp.title"),
      description: t("items.mvp.description"),
      color: "from-amber-500 to-orange-500",
      features: t("items.mvp.features", { returnObjects: true }) as string[],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper id="services" className="relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <span className="text-sm font-medium text-primary">{t("badge")}</span>
        </motion.div>

        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div
              className={cn(
                "absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm",
                "bg-gradient-to-r",
                service.color,
              )}
            />
            <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-transparent transition-all duration-300">
              {/* Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-xl bg-gradient-to-r flex items-center justify-center mb-6",
                  service.color,
                )}
              >
                <service.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-primary">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              {t("cta.heading")}
            </h3>
            <p className="text-white/80 text-sm">{t("cta.description")}</p>
          </div>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-white/90 whitespace-nowrap"
            aria-label="Contact DevSync BD to start your project"
          >
            {t("cta.button")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
