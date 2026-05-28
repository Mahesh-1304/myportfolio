import {
  ArrowRight,
  Bot,
  BarChart2,
  Database,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Shield,
  Smile,
  TrendingUp,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    id: "rag-chatbot",
    icon: Bot,
    iconLabel: "RAG Chatbot",
    title:
      "A document-based AI assistant that retrieves context from uploaded files before generating responses.",
    description:
      "Built a Retrieval-Augmented Generation pipeline using embeddings, chunking, and FAISS vector search — focused on reducing hallucinations and improving grounded answers.",
    meta: "Python · LangChain · FAISS · In Development",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1024&q=80",
    imageAlt: "RAG AI chatbot interface",
    href: "https://github.com/Mahesh-1304/rag-based-chat-bot.git"
  },
  {
    id: "deepfake-detection",
    icon: Shield,
    iconLabel: "Deepfake Detection",
    title:
      "A deep learning system trained to classify AI-generated and authentic media with high accuracy.",
    description:
      "Applied CNN-based preprocessing and feature extraction workflows to detect manipulated visuals using OpenCV and TensorFlow evaluation pipelines.",
    meta: "Python · CNN · OpenCV · Completed",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1024&q=80",
    imageAlt: "Deepfake detection neural network",
  },
  {
    id: "facial-emotion",
    icon: Smile,
    iconLabel: "Emotion Recognition",
    title:
      "Real-time facial emotion detection capable of identifying multiple emotional states from live webcam input.",
    description:
      "Trained a CNN on the FER dataset with OpenCV face detection and TensorFlow inference — supporting live prediction across seven emotion classes.",
    meta: "Python · TensorFlow · OpenCV · Completed",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1024&q=80",
    imageAlt: "Facial emotion recognition system",
    href: "https://github.com/Mahesh-1304/facial-expression-detection",
  },
  {
    id: "supply-chain",
    icon: Package,
    iconLabel: "Supply Chain Analytics",
    title:
      "Data analysis uncovering inefficiencies, delays, and operational bottlenecks across supply chain workflows.",
    description:
      "Explored supplier performance, inventory movement, and logistics data using Python and Pandas — surfacing actionable insights through dashboards and reporting.",
    meta: "Python · Pandas · Data Analysis · Completed",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1024&q=80",
    imageAlt: "Supply chain analytics dashboard",
    href: "https://github.com/Mahesh-1304/supply-chain-analysis",
  },
  {
    id: "trader-sentiment",
    icon: TrendingUp,
    iconLabel: "Trader Sentiment",
    title:
      "An NLP-powered sentiment engine analyzing trader discussions to uncover market mood and momentum.",
    description:
      "Processed financial text datasets to classify bullish and bearish sentiment, mapping trader psychology to emerging market behavior patterns.",
    meta: "Python · NLP · Sentiment Analysis · Completed",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1024&q=80",
    imageAlt: "Stock market sentiment analysis",
    href: "https://github.com/Mahesh-1304/trader-sentiment-analysis",
  },
  {
    id: "sales-analysis",
    icon: BarChart2,
    iconLabel: "Sales Intelligence",
    title:
      "Comprehensive sales analysis revealing revenue trends, product performance, and regional growth opportunities.",
    description:
      "Cleaned and explored multi-dimensional sales datasets to surface KPIs, seasonal patterns, and underperforming segments through visual storytelling.",
    meta: "Python · Pandas · Matplotlib · Completed",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1024&q=80",
    imageAlt: "Sales analytics dashboard",
    href: "https://github.com/Mahesh-1304/SalesAnalysisProject",
  },
  {
    id: "customer-shopping",
    icon: ShoppingCart,
    iconLabel: "Shopping Analytics",
    title:
      "Behavioral analytics project identifying customer segments, purchase patterns, and product affinity trends.",
    description:
      "Analyzed transactional datasets to uncover buying frequency, customer retention patterns, and actionable insights for marketing optimization.",
    meta: "Python · EDA · Customer Analytics · Completed",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1024&q=80",
    imageAlt: "Customer shopping behavior analytics",
    href: "https://github.com/Mahesh-1304/CustomerShoppingBehaviorAnalytics",
  },
  {
    id: "powerbi-dashboard",
    icon: LayoutDashboard,
    iconLabel: "Power BI Dashboard",
    title:
      "Interactive dashboard visualizing data job market trends, salary insights, and skill demand across industries.",
    description:
      "Designed a fully interactive Power BI experience tracking analyst, engineer, and scientist roles with dynamic filtering and DAX-driven insights.",
    meta: "Power BI · DAX · Data Visualization · Completed",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1024&q=80",
    imageAlt: "Power BI data jobs dashboard",
    href: "https://github.com/Mahesh-1304/powerbi-data-jobs-dashboard",
  },
  {
    id: "sql-project",
    icon: Database,
    iconLabel: "SQL Analytics",
    title:
      "A business-focused SQL project solving real-world analytical queries using advanced relational techniques.",
    description:
      "Wrote complex SQL queries involving CTEs, joins, aggregations, and window functions to transform raw datasets into meaningful business insights.",
    meta: "SQL · PostgreSQL · Data Analysis · Completed",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1024&q=80",
    imageAlt: "SQL database analytics",
    href: "https://github.com/Mahesh-1304/int_sql_project",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              Selected work
            </h2>

            <p className="max-w-[34ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              A collection of machine learning systems, analytics dashboards,
              and data-driven products built around real-world problem solving.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium tracking-tight text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card group flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/12 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>

          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>

          {project.href ? (
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 text-[12px] tracking-tight text-foreground/40 transition-colors hover:text-foreground/70"
            >
              GitHub
              <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
            </Link>
          ) : null}
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>

          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}