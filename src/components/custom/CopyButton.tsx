import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  text: string;
  label: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  showIcon?: boolean;
  className?: string;
  successMessage?: string;
}

export function CopyButton({
  text,
  label,
  variant = "ghost",
  size = "default",
  showIcon = true,
  className,
  successMessage = "Copied to clipboard!",
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success(successMessage, {
        description: `${label}: ${text}`,
      });

      // Reset icon after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={handleCopy}
        variant={variant}
        size={size}
        className={className}
        title={`Copy ${label} (${text})`}
      >
        {isCopied ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Check className="h-4 w-4 text-green-500" />
          </motion.div>
        ) : showIcon ? (
          <Copy className="h-4 w-4" />
        ) : null}
        <span className="ml-2">{label}</span>
      </Button>
    </motion.div>
  );
}
