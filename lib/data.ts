import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import gymImg from "@/public/gym-react-image.png";
import ecommerceStore from "@/public/ecommerce-store.jpg";
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
    title: "Graduated from University of Debrecen",
    location: "Debrecen, Hungary",
    description:
      "I graduated after 3 years of studying at the University of Debrecen. I got a bachelor's degree in software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
  {
    title: "Master's degree in progress",
    location: "Debrecen, Hungary",
    description:
      "I am currently studying PTI-MSc at the University of Debrecen",
    icon: React.createElement(LuGraduationCap),
    date: "2023-",
  },
] as const;

export const projectsData = [
  {
    title: "EvoGym",
    description:
      "EvoGym is a fictional gym that I built in order to train myself. It's a single page application with a responsive design.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    imageUrl: gymImg,
    href: "https://sza-gym-react.vercel.app/",
  },
  {
    title: "Store - Admin",
    description:
      "My first serious full-stack project. I created an ecommerce store with an admin dashboard in order to learn the process of full-stack development.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "Stripe",
      "MySQL",
    ],
    imageUrl: ecommerceStore,
    href: "https://sza-ecommerce-admin-react.vercel.app/",
  },
  {
    title: "Store",
    description:
      "My first serious full-stack project. I created an ecommerce store with an admin dashboard in order to learn the process of full-stack development.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "Stripe",
      "MySQL",
    ],
    imageUrl: ecommerceStore,
    href: "https://sza-ecommerce-store-react.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "MySQL",
] as const;
