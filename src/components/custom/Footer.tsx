import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const { t } = useTranslation("common");

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/kofil8",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/mohammadkofil",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://x.com/kofil8",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:mohammadkofil@gmail.com",
      icon: Mail,
    },
  ];

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.contact"), href: "#contact" },
  ];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={cn("border-t border-border/50 bg-muted/30", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl font-heading">
                  MK
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">
                  {t("footer.brand")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("footer.subtitle")}
                </p>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-sm"
            >
              {t("footer.description")}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-3 flex-wrap"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-glow transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-heading font-semibold mb-4">
              {t("footer.getInTouch")}
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <span className="block text-sm">{t("footer.email")}</span>
                <a
                  href="mailto:mohammadkofil@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  mohammadkofil@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-sm">{t("footer.location")}</span>
                <span className="text-foreground">
                  {t("footer.locationValue")}
                </span>
              </li>
              <li>
                <span className="block text-sm">{t("footer.company")}</span>
                <span className="text-foreground">
                  {t("footer.companyValue")}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t("footer.madeWith").replace("👨‍💻", "👨‍💻")}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            {" DevSync Bd"}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
