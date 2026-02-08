import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  image,
  techStack,
  githubUrl,
  liveUrl,
  className,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "bg-card border border-border",
        "hover:border-primary/30 hover:shadow-glow",
        "transition-all duration-500",
        className,
      )}
      aria-label={`Project: ${title}`}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={image}
          alt={`Screenshot of ${title} project showing ${description.substring(0, 50)}`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View ${title} source code on GitHub`}
            >
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Github className="h-4 w-4" />
              </Button>
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View ${title} live demo`}
            >
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              aria-label={`View ${title} source code`}
            >
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Github className="h-4 w-4" />
                Code
              </Button>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              aria-label={`Open ${title} live demo`}
            >
              <Button size="sm" className="w-full gap-2 bg-gradient-primary">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
