import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Final-year AI & Data Science student building intelligent systems with ML, NLP, and LLMs.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Mahesh Ubarhande</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                A <strong className="font-semibold text-foreground">final-year B.Tech student in Artificial Intelligence &amp; Data Science</strong> at CSMSS College, Aurangabad — passionate about building real-world AI systems that are practical, accurate, and impactful. I work across <strong className="font-semibold text-foreground">machine learning, NLP, and computer vision</strong>, turning data into intelligent solutions.
              </p>
              <p>
                I&rsquo;ve built projects like a <strong className="font-semibold text-foreground">deepfake detection system</strong>, a <strong className="font-semibold text-foreground">facial emotion recognition model</strong>, and I&rsquo;m currently developing a <strong className="font-semibold text-foreground">document chatbot using RAG and LLMs</strong> — focused on minimizing hallucinations and grounding answers in real document context.
              </p>
              <p>
                Currently interning as a <strong className="font-semibold text-foreground">Data Analyst at Shadow Mind Solutions</strong>, I&rsquo;m actively looking for opportunities where I can apply my skills in <strong className="font-semibold text-foreground">AI, data analytics, and applied ML</strong> to solve meaningful problems at scale.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}