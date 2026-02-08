import {
  SectionHeader,
  SectionWrapper,
} from "@/components/custom/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Consultation() {
  const { t } = useTranslation("consultation");

  const consultationPerks = [
    {
      icon: MessageSquare,
      title: t("perks.review.title"),
      description: t("perks.review.description"),
    },
    {
      icon: CheckCircle2,
      title: t("perks.architecture.title"),
      description: t("perks.architecture.description"),
    },
    {
      icon: Calendar,
      title: t("perks.action.title"),
      description: t("perks.action.description"),
    },
  ];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper id="consultation" className="relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-[90px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[110px]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <SectionHeader
            align="left"
            title={t("title")}
            subtitle={t("subtitle")}
            className="mb-8"
          />
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("description")}
          </p>

          <div className="space-y-4">
            {consultationPerks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex gap-4 p-4 rounded-2xl bg-card/60 border border-border/60 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <perk.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              aria-label={t("aria.bookConsultation")}
            >
              {t("buttons.bookConsultation")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <a
                href="https://www.upwork.com/freelancers/~01c346888b878a06df?mp_source=share"
                target="_blank"
                rel="noreferrer"
                aria-label={t("aria.hireUpwork")}
              >
                {t("buttons.hireUpwork")}
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="border-2"
              aria-label={t("aria.exploreServices")}
            >
              {t("buttons.exploreServices")}
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl">
            <img
              src="/Consultation.png"
              alt={t("imageAlt")}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
