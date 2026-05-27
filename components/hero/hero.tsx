import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import {
  FadeIn,
  ScaleUnblur,
} from "@/components/ui/motion-primitives";

import { PortraitMorph } from "./portrait-morph";

const PORTRAIT_SRC = "/mahesh11.png";
const PORTRAIT_HOVER_SRC = "/mahesh2.png";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-32 pb-20 sm:px-10 sm:pt-40 sm:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10">
          <FadeIn className="flex flex-col gap-5">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Hey
              <span
                aria-hidden="true"
                className="mx-0.5"
              >
                👋
              </span>
              , I&rsquo;m Mahesh
            </p>

            <h1 className="text-[2.9rem] font-medium leading-[1.02] tracking-tight text-foreground sm:text-[3.2rem] lg:text-[4rem]">
              <span className="block whitespace-nowrap">
                Data Analyst &
              </span>

              <span className="block whitespace-nowrap">
                AI Enthusiast
              </span>
            </h1>

            <p className="max-w-[34ch] text-[20px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[22px]">
              Focused on data-driven decision making,
              machine learning systems, and intelligent
              applications using Python, SQL, and modern
              AI tools.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-center md:justify-end">
            <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm sm:max-w-[360px] lg:max-w-[420px]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt="Mahesh portrait"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}