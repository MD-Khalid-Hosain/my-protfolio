import type { ExperienceRole } from "@/types";

export const experience: ExperienceRole[] = [
  {
    company: "Ready How",
    companyUrl: "https://readyhow.com/",
    role: "Software Engineer",
    start: "Feb 2026",
    end: "Present",
    current: true,
    summary:
      "Developing and optimizing a responsive e-commerce platform with marketplace functionality.",
    responsibilities: [
      "Develop and optimize a responsive e-commerce platform.",
      "Implement user-friendly features and marketplace functionality.",
    ],
    technologies: ["Laravel", "Laravel Livewire", "Tailwind CSS"],
  },
  {
    company: "Silicon Orchard Ltd.",
    role: "Software Engineer",
    start: "Nov 2021",
    end: "Feb 2026",
    summary:
      "Full stack engineering across AI media, travel and real-time messaging products.",
    responsibilities: [
      "Developed and integrated APIs for VideoXRM, an AI-driven business media platform, and improved its frontend UI and UX.",
      "Built the user interface for Journey to Nippon and supported backend API development to integrate key functionality.",
      "Developed the X Messaging App in React Native, integrating WebRTC through LiveKit for real-time video and audio.",
    ],
    technologies: [
      "Laravel",
      "MySQL",
      "Vue.js",
      "Bootstrap",
      "Node.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "WebRTC",
      "Supabase",
    ],
    projects: ["VideoXRM", "Journey to Nippon", "X Messaging App"],
  },
  {
    company: "Original Store Ltd.",
    companyUrl: "http://originalstorebd.com/",
    role: "Software Engineer",
    start: "Oct 2020",
    end: "Oct 2021",
    summary:
      "Built and launched a complete eCommerce platform, covering frontend and backend development.",
    responsibilities: [
      "Led all phases from analysis to implementation.",
      "Delivered a secure, scalable and user-friendly online store with integrated payment and order management.",
    ],
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
];
