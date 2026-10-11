import type { JourneyStep } from "@/types";

export const journey: JourneyStep[] = [
  {
    phase: "Learning",
    title: "Computer science foundations",
    period: "— 2021",
    description: "Built the fundamentals and started shipping for the web.",
    points: [
      "BSc in Computer Science & Engineering, IUBAT",
      "Web Development certification, Creative IT",
    ],
  },
  {
    phase: "Experience",
    title: "Three product companies",
    period: "2020 — now",
    description: "Six years of professional, production engineering.",
    points: ["Original Store Ltd.", "Silicon Orchard Ltd.", "Ready How"],
  },
  {
    phase: "Projects",
    title: "Products in the real world",
    period: "Shipped",
    description: "Media, travel, messaging and commerce platforms.",
    points: ["VideoXRM", "Journey to Nippon", "X Messaging App", "eCommerce platform"],
  },
  {
    phase: "Current goals",
    title: "Scale with a great team",
    period: "Next",
    description: "Where I want to grow from here.",
    points: [
      "Join an international product team",
      "Own complex, high-impact problems",
      "Build scalable, well-engineered systems",
    ],
  },
];
