import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Check, Loader2, Mail, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

interface ContactFormProps {
  className?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

// EmailJS Configuration
// Note: User needs to create a free account at https://www.emailjs.com/
// and set up a service and template
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

export function ContactForm({ className }: ContactFormProps) {
  const { t } = useTranslation("contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Track field validation state
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateField = (name: string, value: string): string => {
    if (!value.trim()) {
      return `${name} ${t("form.validation.required")}`;
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return t("form.validation.invalidEmail");
      }
    }

    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateField("Name", formData.name);
    const emailError = validateField("Email", formData.email);
    const messageError = validateField("Message", formData.message);

    setFieldErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    if (nameError || emailError || messageError) {
      toast.error(t("form.toast.fillFields"));
      return;
    }

    setFormStatus("submitting");

    try {
      // Try to send via EmailJS if configured
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: "mohammedkofil8@gmail.com",
          },
          EMAILJS_PUBLIC_KEY,
        );
      } else {
        // Fallback: Simulate sending for demo purposes
        // In production, replace with actual EmailJS credentials
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setFormStatus("success");
      toast.success(t("form.toast.success"));
      setFormData({ name: "", email: "", message: "" });
      setFieldErrors({ name: "", email: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("error");
      toast.error(t("form.toast.error"));

      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on change
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Send via WhatsApp
  const sendViaWhatsApp = () => {
    if (!formData.name || !formData.message) {
      toast.error(t("form.toast.nameAndMessageRequired"));
      return;
    }

    const phoneNumber = "+8801729795968";
    const text = encodeURIComponent(
      `Hi, I'm ${formData.name}.\n\n${formData.message}\n\nSent from your portfolio website`,
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
    toast.success(t("form.toast.openingWhatsApp"));
  };

  // Send via Email
  const sendViaEmail = () => {
    if (!formData.name || !formData.message) {
      toast.error(t("form.toast.nameAndMessageRequired"));
      return;
    }

    const subject = encodeURIComponent(
      `Message from ${formData.name} - Portfolio Contact`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    const mailtoUrl = `mailto:mohammedkofil8@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, "_blank");
    toast.success(t("form.toast.openingEmail"));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn("space-y-6", className)}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6"
        aria-label="Contact form"
      >
        {/* Form status announcement for screen readers */}
        <div
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {formStatus === "submitting" && t("form.status.submitting")}
          {formStatus === "success" && t("form.status.success")}
          {formStatus === "error" && t("form.status.error")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            {t("form.labels.name")}
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={t("form.placeholders.name")}
            value={formData.name}
            onChange={handleChange}
            required
            disabled={formStatus === "submitting"}
            className={cn(
              "h-12 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary focus:ring-primary/20 transition-all",
              fieldErrors.name &&
                "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
            )}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name && (
            <p
              id="name-error"
              className="text-xs text-red-500 flex items-center gap-1"
            >
              <span>⚠</span> {fieldErrors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            {t("form.labels.email")}
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t("form.placeholders.email")}
            value={formData.email}
            onChange={handleChange}
            required
            disabled={formStatus === "submitting"}
            className={cn(
              "h-12 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary focus:ring-primary/20 transition-all",
              fieldErrors.email &&
                "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
            )}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email && (
            <p
              id="email-error"
              className="text-xs text-red-500 flex items-center gap-1"
            >
              <span>⚠</span> {fieldErrors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            {t("form.labels.message")}
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder={t("form.placeholders.message")}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={formStatus === "submitting"}
            rows={5}
            className={cn(
              "bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary focus:ring-primary/20 resize-none transition-all",
              fieldErrors.message &&
                "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
            )}
            aria-invalid={!!fieldErrors.message}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
          />
          {fieldErrors.message && (
            <p
              id="message-error"
              className="text-xs text-red-500 flex items-center gap-1"
            >
              <span>⚠</span> {fieldErrors.message}
            </p>
          )}
        </div>

        {/* Primary Submit Button */}
        <Button
          type="submit"
          disabled={formStatus === "submitting" || formStatus === "success"}
          className={cn(
            "w-full h-14 sm:h-12 text-base font-medium transition-all duration-300",
            formStatus === "success"
              ? "bg-green-500 hover:bg-green-500"
              : formStatus === "error"
                ? "bg-red-500 hover:bg-red-500"
                : "bg-gradient-primary hover:shadow-glow",
          )}
        >
          {formStatus === "submitting" && (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          )}
          {formStatus === "success" && <Check className="mr-2 h-5 w-5" />}
          {formStatus === "error" && <Mail className="mr-2 h-5 w-5" />}
          {formStatus === "submitting"
            ? t("form.buttons.sending")
            : formStatus === "success"
              ? t("form.buttons.sent")
              : formStatus === "error"
                ? t("form.buttons.tryAgain")
                : t("form.buttons.send")}
        </Button>
      </form>

      {/* Alternative Contact Methods */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/50" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            {t("form.alternative.heading")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={sendViaWhatsApp}
          className="h-14 sm:h-11 gap-2 border-green-500/30 text-green-600 hover:bg-green-500/10 hover:border-green-500/50 transition-all text-sm sm:text-base"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">
            {t("form.alternative.whatsapp")}
          </span>
          <span className="sm:hidden">WhatsApp</span>
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={sendViaEmail}
          className="h-14 sm:h-11 gap-2 border-blue-500/30 text-blue-600 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all text-sm sm:text-base"
        >
          <Mail className="h-5 w-5" />
          <span className="hidden sm:inline">
            {t("form.alternative.gmail")}
          </span>
          <span className="sm:hidden">Gmail</span>
        </Button>
      </div>

      {/* Setup Notice */}
      {!EMAILJS_SERVICE_ID && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-600"
        >
          <strong>Note:</strong> To enable direct email sending, create a free
          account at{" "}
          <a
            href="https://www.emailjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            EmailJS
          </a>{" "}
          and update the configuration in .env file
        </motion.div>
      )}
    </motion.div>
  );
}
