import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import overvue from "@/public/overvue.png";
import pockets from "@/public/pockets.png";
import subr from "@/public/SUBr1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Engineer @ CS Engineering",
    location: "Los Angeles, CA",
    description: "Rejoined the team under contract",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Current",
  },
  {
    title: "Front-End Engineer @ Sketch & Etch",
    location: "Los Angeles, CA",
    description:
      "Joined the Sketch & Etch team as a Founding Engineer. My stack included React, JavaScript, Shopify Plus, and LiquidJS",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Mar 2023",
  },
  {
    title: "Front-End Engineer @ CS Engineering",
    location: "Los Angeles, CA",
    description:
      "Worked as a Front-End Engineer for 1 year. My stack included React, JavaScript, PostgreSQL, and Jest/React Testing Library",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Graduated Codesmith bootcamp",
    location: "Los Angeles, CA",
    description: "Graduated after 6 months of studying",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "OverVue",
    description:
      "A prototyping tool for Vue dev teams to quickly scaffold Vue apps and component architecture",
    tags: ["Vue", "JavaScript", "MongoDB", "Quasar", "Electron"],
    imageUrl: overvue,
  },
  {
    title: "Pockets",
    description:
      "A budget tracking system that records your daily/monthly spending",
    tags: ["React", "JavaScript", "ChartJS", "PostgreSQL"],
    imageUrl: pockets,
  },
  {
    title: "SUBr",
    description:
      "A subscription management system that allows users to manage all of their subscriptions in one place",
    tags: ["React", "JavaScript", "Express", "MongoDB"],
    imageUrl: subr,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Git",
  "Node.js",
  "Express",
  "TypeScript",
  "Next.js",
  "Vue",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Framer Motion",
  "Object Oriented Programming",
  "REST API",
  "LiquidJS",
  "Unit Testing(Jest/React Testing Library)",
] as const;
