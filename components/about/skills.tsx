import type { ReactNode } from "react";

const SKILLS = [
  // Programming
  "Python",
  "SQL",
  "Excel",
  "Data Structures",

  // AI & ML
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  // LLMs
  "RAG Architecture",
  "Prompt Engineering",
  "Vector Databases",
  "Embeddings",
  // Libraries
  "Pandas & NumPy",
  "Scikit-learn",
  "TensorFlow / PyTorch",
  "OpenCV",
  // Visualization
  "Power BI",
  // Tools
  "LangChain",
  "FAISS",
];

export function Skills(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        What I do
      </h3>
      <div className="rounded-4xl border border-foreground/5 bg-foreground/2 p-2 sm:p-4 dark:bg-foreground/5">
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/8 bg-background px-4 py-2 text-[14px] tracking-tight text-foreground/85 sm:text-[15px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}