import {
  SectionHeader,
  SectionWrapper,
} from "@/components/custom/SectionWrapper";
import { motion } from "framer-motion";
import {
  Box,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  FileCode,
  Gauge,
  GitBranch,
  Globe,
  Key,
  Layers,
  Network,
  Server,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation("skills");

  const skillCategories = [
    {
      title: t("categories.backend"),
      icon: Server,
      skills: [
        {
          name: "Node.js",
          icon: <Code2 className="h-4 w-4" />,
          level: "expert" as const,
        },
        {
          name: "Express.js",
          icon: <Server className="h-4 w-4" />,
          level: "expert" as const,
        },
        {
          name: "FastAPI",
          icon: <Zap className="h-4 w-4" />,
          level: "expert" as const,
        },
        {
          name: "NestJS",
          icon: <Layers className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Django",
          icon: <Terminal className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Fastify",
          icon: <Zap className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "GraphQL",
          icon: <Code2 className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "gRPC",
          icon: <Network className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Serverless",
          icon: <Cloud className="h-4 w-4" />,
          level: "advanced" as const,
        },
      ],
    },
    {
      title: t("categories.cloud"),
      icon: Cloud,
      skills: [
        {
          name: "AWS",
          icon: <Cloud className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Google Cloud",
          icon: <Cloud className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Docker",
          icon: <Container className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Kubernetes",
          icon: <Container className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Terraform",
          icon: <Code2 className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "CI/CD",
          icon: <GitBranch className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "REST APIs",
          icon: <Globe className="h-4 w-4" />,
          level: "expert" as const,
        },
      ],
    },
    {
      title: t("categories.database"),
      icon: Database,
      skills: [
        {
          name: "PostgreSQL",
          icon: <Database className="h-4 w-4" />,
          level: "expert" as const,
        },
        {
          name: "MongoDB",
          icon: <Database className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Prisma",
          icon: <FileCode className="h-4 w-4" />,
          level: "expert" as const,
        },
        {
          name: "TypeORM",
          icon: <Code2 className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Redis",
          icon: <Zap className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Elasticsearch",
          icon: <Database className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Query Optimization",
          icon: <Gauge className="h-4 w-4" />,
          level: "advanced" as const,
        },
      ],
    },
    {
      title: t("categories.system"),
      icon: Layers,
      skills: [
        {
          name: "Microservices",
          icon: <Network className="h-4 w-4" />,
          level: "expert" as const,
        },
        {
          name: "Event-Driven Design",
          icon: <Zap className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Load Balancing",
          icon: <Cpu className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Caching Strategies",
          icon: <Zap className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "API Gateway",
          icon: <Globe className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Database Sharding",
          icon: <Database className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "SaaS Architecture",
          icon: <Box className="h-4 w-4" />,
          level: "expert" as const,
        },
      ],
    },
    {
      title: t("categories.devops"),
      icon: Shield,
      skills: [
        {
          name: "Prometheus",
          icon: <Gauge className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "DataDog",
          icon: <Gauge className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "ELK Stack",
          icon: <Database className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Logging & Tracing",
          icon: <Network className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Security & Auth",
          icon: <Key className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Performance Tuning",
          icon: <Gauge className="h-4 w-4" />,
          level: "advanced" as const,
        },
      ],
    },
    {
      title: t("categories.fullstack"),
      icon: Box,
      skills: [
        {
          name: "Next.js",
          icon: <Globe className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "TypeScript",
          icon: <FileCode className="h-4 w-4" />,
          level: "expert" as const,
        },
        {
          name: "BaaS",
          icon: <Server className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "Git & GitHub",
          icon: <GitBranch className="h-4 w-4" />,
          level: "expert" as const,
        },
        {
          name: "JWT & OAuth",
          icon: <Key className="h-4 w-4" />,
          level: "advanced" as const,
        },
        {
          name: "WebSockets",
          icon: <Network className="h-4 w-4" />,
          level: "advanced" as const,
        },
      ],
    },
  ];

  return (
    <SectionWrapper id="skills" className="relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <div className="relative p-6 lg:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + skillIndex * 0.05,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, -3, 3, 0],
                      y: -8,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                    }}
                    whileTap={{
                      rotate: 360,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                    className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300 cursor-pointer overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Shadow bloom effect */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{
                        opacity: 1,
                        scale: 1.2,
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }}
                      className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary/20 to-secondary/30 rounded-full blur-xl pointer-events-none"
                      style={{ zIndex: -1 }}
                    />

                    {/* Animated gradient background sweep */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{
                        x: "100%",
                        transition: { duration: 0.6, ease: "easeInOut" },
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    />

                    {/* Particle burst effect */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          x: [0, (i - 1) * 20],
                          y: [0, -20 - i * 5],
                          transition: {
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: "easeOut",
                          },
                        }}
                        className="absolute inset-0 w-2 h-2 rounded-full bg-primary/50"
                        style={{
                          left: "50%",
                          top: "50%",
                          marginLeft: "-4px",
                          marginTop: "-4px",
                        }}
                      />
                    ))}

                    {/* Icon with independent rotation */}
                    <motion.span
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.6, ease: "easeInOut" },
                      }}
                      className="relative z-10"
                    >
                      {skill.icon}
                    </motion.span>

                    {/* Text with subtle scale */}
                    <motion.span
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                      className="font-medium text-sm relative z-10"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Level Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm"
      >
        <span className="text-muted-foreground">Skill Levels:</span>
        {[
          {
            level: t("levels.expert"),
            color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
          },
          {
            level: t("levels.advanced"),
            color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
          },
          {
            level: t("levels.intermediate"),
            color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
          },
        ].map((item) => (
          <span
            key={item.level}
            className={`px-3 py-1 rounded-full border text-xs ${item.color}`}
          >
            {item.level}
          </span>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
