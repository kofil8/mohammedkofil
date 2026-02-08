import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { NAVIGATION_SECTIONS, SITE_CONFIG } from "@/constants";
import { useTheme } from "@/hooks/useTheme";
import {
  ArrowUp,
  Command as CommandIcon,
  Copy,
  Github,
  Laptop,
  Linkedin,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CommandPaletteProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ isOpen, onOpenChange }: CommandPaletteProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter sections with icons (for command palette display)
  const sections = NAVIGATION_SECTIONS.filter((section) => section.icon).map(
    (section) => ({
      name: section.id.charAt(0).toUpperCase() + section.id.slice(1),
      href: section.href,
      icon: section.icon!,
    }),
  );

  const navigateToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onOpenChange(false);
      setValue("");
    }
  };

  const handleThemeChange = (theme: "light" | "dark" | "system") => {
    setTheme(theme);
    onOpenChange(false);
    setValue("");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onOpenChange(false);
    setValue("");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    onOpenChange(false);
    setValue("");
  };

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(SITE_CONFIG.github);
    onOpenChange(false);
    setValue("");
  };

  const handleCopyLinkedin = () => {
    navigator.clipboard.writeText(SITE_CONFIG.linkedin);
    onOpenChange(false);
    setValue("");
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!isOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, onOpenChange]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <DialogHeader className="sr-only">
          <DialogTitle>Command Palette</DialogTitle>
          <DialogDescription>
            Search for commands and navigate sections
          </DialogDescription>
        </DialogHeader>
        <Command
          className="[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
          value={value}
          onValueChange={setValue}
        >
          <div className="flex h-12 items-center gap-2 border-b px-3">
            <CommandIcon className="h-5 w-5 shrink-0 opacity-50" />
            <input
              ref={inputRef}
              placeholder="Search commands..."
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
            />
          </div>
          <CommandList>
            {/* Navigation Section */}
            <CommandGroup heading="Navigate">
              {sections.map((section) => (
                <CommandItem
                  key={section.name}
                  value={`nav-${section.name.toLowerCase()}`}
                  onSelect={() => navigateToSection(section.href)}
                  className="cursor-pointer"
                >
                  <section.icon className="mr-2 h-4 w-4" />
                  <span>{section.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator />

            {/* Theme Section */}
            <CommandGroup heading="Theme">
              <CommandItem
                value="theme-light"
                onSelect={() => handleThemeChange("light")}
                className="cursor-pointer"
              >
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
                {resolvedTheme === "light" && (
                  <CommandShortcut>✓</CommandShortcut>
                )}
              </CommandItem>
              <CommandItem
                value="theme-dark"
                onSelect={() => handleThemeChange("dark")}
                className="cursor-pointer"
              >
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
                {resolvedTheme === "dark" && (
                  <CommandShortcut>✓</CommandShortcut>
                )}
              </CommandItem>
              <CommandItem
                value="theme-system"
                onSelect={() => handleThemeChange("system")}
                className="cursor-pointer"
              >
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            {/* Quick Actions Section */}
            <CommandGroup heading="Quick Actions">
              <CommandItem
                value="scroll-top"
                onSelect={handleScrollToTop}
                className="cursor-pointer"
              >
                <ArrowUp className="mr-2 h-4 w-4" />
                <span>Scroll to Top</span>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            {/* Copy Section */}
            <CommandGroup heading="Copy Contact">
              <CommandItem
                value="copy-email"
                onSelect={handleCopyEmail}
                className="cursor-pointer"
              >
                <Copy className="mr-2 h-4 w-4" />
                <span>Copy Email</span>
                <CommandShortcut className="text-xs">
                  mohammedkofil8@gmail.com
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="copy-github"
                onSelect={handleCopyGithub}
                className="cursor-pointer"
              >
                <Github className="mr-2 h-4 w-4" />
                <span>Copy GitHub</span>
              </CommandItem>
              <CommandItem
                value="copy-linkedin"
                onSelect={handleCopyLinkedin}
                className="cursor-pointer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                <span>Copy LinkedIn</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="border-t bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">↵</span>
          </kbd>{" "}
          to select,{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">ESC</span>
          </kbd>{" "}
          to close
        </div>
      </DialogContent>
    </Dialog>
  );
}
