"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  href,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" group mb-3 sm:mb-8 last:mb:0 "
    >
      <section
        ref={ref}
        className=" bg-gray-100 max-w-[42rem] border
     border-black/5 overflow-hidden rounded-lg shadow-xl 
     sm:pr-8 relative sm:h-[20rem] group-even:pl-12 hover:bg-gray-200 transition"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm: pr-2 sm:pt-10 
        sm:max-w-[60%] flex flex-col h-full group-even:ml-[16rem] transition"
        >
          <Link href={href} />
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] 
          uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Projects Made By Me"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] 
        rounded-t-lg shadow-2xl transition 
        group-hover:scale-[1.04] 
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2

        group-even:right-[initial] 
        group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
