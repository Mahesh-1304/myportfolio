"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

type Entry = {
  company: string;
  role: string;
  period: string;
  slug?: string;
  brand?: string;

  location?: string;
  description?: string;
  skills?: string[];
  achievements?: string[];
  href?: string;
};
const ENTRIES: Entry[] = [
  {
    company: "Shadow Mind Solutions",
    role: "Data Analyst Intern",
    period: "Mar 2025 – Present",
    brand: "#6366F1",
  },
  {
    company: "Deloitte Australia",
    role: "Data Analytics Virtual Intern",
    period: "Oct 2024",
    slug: "deloitte",
    brand: "#86BC25",
  },
];

const COLLAPSED_COUNT = 1.2;
const ROW_HEIGHT = 64;
const ROW_GAP = 8;

export function Experience() {
  const [open, setOpen] = useState(false);

  const collapsedHeight = useMemo(() => {
    const visibleRows = Math.floor(COLLAPSED_COUNT);

    return (
      visibleRows * ROW_HEIGHT +
      (visibleRows - 1) * ROW_GAP +
      (COLLAPSED_COUNT % 1) * ROW_HEIGHT
    );
  }, []);

  const hiddenCount = Math.max(
    0,
    ENTRIES.length - Math.floor(COLLAPSED_COUNT)
  );

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Experience
      </h3>

      <div
        className={`border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative overflow-hidden rounded-4xl border px-2 pt-2 sm:px-4 sm:pt-4 ${
          open ? "pb-2 sm:pb-4" : "pb-0"
        }`}
      >
        <motion.div
          className="relative"
          initial={false}
          animate={{
            height: open ? "auto" : collapsedHeight,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            overflow: "hidden",
            willChange: "height",
          }}
        >
          <ul role="list" className="flex flex-col gap-2">
            {ENTRIES.map((entry) => (
              <li
                key={entry.slug ?? entry.company}
                className="bg-background border-foreground/5 hover:bg-foreground/[0.03] flex items-center gap-4 rounded-3xl border p-2 transition-colors"
                style={{ minHeight: ROW_HEIGHT }}
              >
                <CompanyLogo entry={entry} />

                <div className="flex min-w-0 flex-col">
                  <span className="text-foreground truncate text-[17px] font-semibold tracking-tight sm:text-[18px]">
                    {entry.company}
                  </span>

                  <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                    {entry.role}

                    <span className="text-foreground/30 mx-2">•</span>

                    <span className="text-foreground/55">
                      {entry.period}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <AnimatePresence>
          {!open && hiddenCount > 0 && (
            <motion.div
              key="fade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0"
              style={{
                height: ROW_HEIGHT,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
              }}
            />
          )}
        </AnimatePresence>

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`focus-ring text-foreground flex w-full cursor-pointer items-center justify-center gap-1.5 bg-transparent text-[15px] font-medium tracking-tight ${
              open
                ? "relative mt-4"
                : "absolute inset-x-0 bottom-0 z-10 py-3 sm:py-4"
            }`}
          >
            {open ? "Show less" : `Show ${hiddenCount} more`}

            <motion.span
              animate={{
                rotate: open ? 180 : 0,
              }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <ChevronDown
                className="h-4 w-4"
                aria-hidden="true"
              />
            </motion.span>
          </button>
        )}
      </div>
    </div>
  );
}

function CompanyLogo({ entry }: { entry: Entry }) {
  const [imageError, setImageError] = useState(false);

  const initials = entry.company.charAt(0);

  const showLogo = entry.slug && !imageError;

  return (
    <span
      className="ring-foreground/8 inline-flex h-12 w-12 shrink-0 items-center justify-center ring-1 dark:ring-white/10"
      aria-hidden="true"
      style={{
        borderRadius: 14,
        backgroundColor: showLogo ? "#fff" : entry.brand,
      }}
    >
      {showLogo ? (
        <Image
          src={`https://cdn.simpleicons.org/${entry.slug}`}
          alt={`${entry.company} logo`}
          width={24}
          height={24}
          className="h-6 w-6"
          unoptimized
          draggable={false}
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-[18px] font-semibold tracking-tight text-white">
          {initials}
        </span>
      )}
    </span>
  );
}