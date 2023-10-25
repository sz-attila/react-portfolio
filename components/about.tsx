"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-32
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I graduated from the University of Debrecen in 2023. I'm passionate
        about frontend development, and I'm a big fan of React and Next.js. I'm
        also interested in backend and mobile application development. I have
        intrest in becoming full-stack developer in the future.
      </p>
      <p>
        I like to be open to new things and I'm always looking for new
        challenges. I think it's important to keep educating myself to improve
        my knowledge and always keep myself up to date. My current goal is to
        find a job where I can develop and be a valuable member of a team.
      </p>
    </motion.section>
  );
}
