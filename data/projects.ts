export type ProjectVisual = "voice" | "nexus" | "chart" | "carbon";

export type Project = {
  slug: string;
  name: string;
  category: "AI" | "Data" | "Web";
  categoryLabel: string;
  label: string;
  tagline: string;
  summary: string;
  status: string;
  year: string;
  focus: string;
  highlights: string[];
  tags: string[];
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    slug: "jarvis",
    name: "Jarvis",
    category: "AI",
    categoryLabel: "AI & Agents",
    label: "Personal assistant",
    tagline: "A little less clicking. A little more conversation.",
    summary:
      "My personal assistant project brings together voice commands, gesture interactions and desktop automation. I'm exploring how agent tools and the Agent Development Kit can extend it beyond individual commands.",
    status: "Ongoing exploration",
    year: "2025 — now",
    focus: "Voice interaction, desktop automation and agent tools.",
    highlights: [
      "Voice and gesture control wired into real desktop actions.",
      "Exploring the Agent Development Kit for multi-step tasks.",
      "Built as a daily-use tool, not a demo.",
    ],
    tags: ["Python", "Voice & gestures", "ADK", "Desktop automation"],
    visual: "voice",
  },
  {
    slug: "nexus-ai",
    name: "Nexus AI",
    category: "AI",
    categoryLabel: "AI & Agents",
    label: "The long-term ambition",
    tagline: "An idea for a more personal AI workspace.",
    summary:
      "Nexus AI is my long-term product direction. My current experiments explore chat interfaces, animated interactions and 3D presentation. The ambition is to turn those experiments into useful AI products and, eventually, an AI company.",
    status: "Concept & experiments",
    year: "2026",
    focus: "Conversational interfaces and product exploration.",
    highlights: [
      "Interface studies for conversation-first AI products.",
      "Motion and 3D as tools for clarity, not decoration.",
      "The direction I want to build a company around.",
    ],
    tags: ["AI interfaces", "JavaScript", "3D UI", "Product"],
    visual: "nexus",
  },
  {
    slug: "stock-predictor",
    name: "Stock Predictor",
    category: "Data",
    categoryLabel: "Data Science",
    label: "Machine learning study",
    tagline: "Reading patterns. Questioning predictions.",
    summary:
      "An experimental project exploring RNN and LSTM concepts for market time-series data. I'm using it to learn how sequence models behave, how to evaluate them and where predictions can go wrong.",
    status: "Learning project",
    year: "2025",
    focus: "Time-series modeling, evaluation and model limitations.",
    highlights: [
      "Sequence models on non-stationary market data.",
      "Evaluation first: what accuracy actually means here.",
      "Learning where predictions quietly fall apart.",
    ],
    tags: ["Python", "RNN / LSTM", "Time series", "Evaluation"],
    visual: "chart",
  },
  {
    slug: "carbon-footprint",
    name: "Carbon Footprint",
    category: "Web",
    categoryLabel: "Web Development",
    label: "Software for awareness",
    tagline: "Connecting everyday choices to a bigger picture.",
    summary:
      "A carbon footprint awareness platform project, with deployment experiments on Google Cloud Run. It brings together my interest in practical software and tools that help people understand environmental impact.",
    status: "In development",
    year: "2025 — now",
    focus: "Web development, environmental awareness and cloud deployment.",
    highlights: [
      "Turning abstract emissions data into everyday choices.",
      "Containerised deployment on Google Cloud Run.",
      "Product thinking: simple, honest, useful.",
    ],
    tags: ["Web development", "Cloud Run", "Docker", "Sustainability"],
    visual: "carbon",
  },
];
