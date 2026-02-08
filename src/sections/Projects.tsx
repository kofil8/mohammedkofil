import { ProjectCard } from "@/components/custom/ProjectCard";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/custom/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation("projects");

  const projects = [
    {
      title: t("items.cloudStorage.title"),
      description: t("items.cloudStorage.description"),
      image: "/project-drive.jpg",
      techStack: ["Node.js", "Express", "PostgreSQL", "AWS S3", "Docker"],
      githubUrl: "https://github.com/kofil/cloud-storage",
      liveUrl: "https://cloud-storage-demo.vercel.app",
    },
    {
      title: t("items.taskManager.title"),
      description: t("items.taskManager.description"),
      image: "/project-task.jpg",
      techStack: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Celery"],
      githubUrl: "https://github.com/kofil/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
    },
    {
      title: t("items.uptime.title"),
      description: t("items.uptime.description"),
      image: "/project-uptime.jpg",
      techStack: ["Node.js", "MongoDB", "Redis", "AWS ECS", "Docker"],
      githubUrl: "https://github.com/kofil/uptime-monitor",
      liveUrl: "https://uptime-monitor-demo.vercel.app",
    },
    {
      title: t("items.restaurant.title"),
      description: t("items.restaurant.description"),
      image: "/project-restaurant.jpg",
      techStack: ["Django", "DRF", "PostgreSQL", "Stripe", "OpenAI"],
      githubUrl: "https://github.com/kofil/restaurant-app",
      liveUrl: "https://restaurant-app-demo.vercel.app",
    },
  ];

  return (
    <SectionWrapper id="projects" className="relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} delay={index * 0.1} />
        ))}
      </div>

      {/* View More CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/kofil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("aria.viewGithub")}
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-2 hover:bg-primary/5 transition-all duration-300"
          >
            <ExternalLink className="h-5 w-5" />
            {t("buttons.viewMoreGithub")}
          </Button>
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
