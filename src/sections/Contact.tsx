import { ContactForm } from "@/components/custom/ContactForm";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/custom/SectionWrapper";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation("contact");
  const highlightToken = "__HIGHLIGHT__";
  const headingTemplate = t("heading", { highlight: highlightToken });
  const [headingPrefix = "", headingSuffix = ""] =
    headingTemplate.split(highlightToken);

  const contactInfo = [
    {
      icon: Mail,
      label: t("info.email.label"),
      value: t("info.email.value"),
      href: "mailto:mohammedkofil8@gmail.com",
    },
    {
      icon: Phone,
      label: t("info.phone.label"),
      value: t("info.phone.value"),
      href: "tel:+8801729795968",
    },
    {
      icon: MapPin,
      label: t("info.location.label"),
      value: t("info.location.value"),
      href: "#",
    },
  ];

  const socialLinks = [
    {
      name: t("social.platforms.github"),
      href: "https://github.com",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: t("social.platforms.linkedin"),
      href: "https://linkedin.com",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: t("social.platforms.twitter"),
      href: "https://twitter.com",
      icon: Twitter,
      color: "hover:text-sky-500",
    },
    {
      name: t("social.platforms.whatsapp"),
      href: "https://wa.me/8801729795968",
      icon: MessageCircle,
      color: "hover:text-green-500",
    },
  ];
  return (
    <SectionWrapper id="contact" className="relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              {headingPrefix}
              <span className="text-gradient">{t("headingHighlight")}</span>
              {headingSuffix}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className={cn(
                  "group flex items-center gap-4 p-4 rounded-xl",
                  "bg-card/50 border border-border/50",
                  "hover:border-primary/30 hover:bg-card transition-all duration-300",
                )}
                aria-label={`${item.label}: ${item.value}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              {t("social.followMe")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "w-12 h-12 rounded-xl bg-card border border-border/50",
                    "flex items-center justify-center text-muted-foreground",
                    "hover:border-primary/30 hover:shadow-glow transition-all duration-300",
                    social.color,
                  )}
                  aria-label={`Follow on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "p-8 rounded-2xl",
            "bg-card/50 backdrop-blur-sm border border-border/50",
          )}
        >
          <h3 className="text-xl font-heading font-bold mb-6">
            {t("form.heading")}
          </h3>
          <ContactForm />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
