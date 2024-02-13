"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After working in Import/Export as a{" "}
        <span className="font-medium">Customs Broker</span> for over 6 years, I
        decided to pursue my passion for programming. I started off learning the
        fundamentals of{" "}
        <span className="font-medium">JavaScript, HTML, and CSS</span>, and once
        I had a solid understanding, I decided to take it to the{" "}
        <span className="italic">next level</span> by enrolling in a coding
        bootcamp and learning{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite parts of programming</span> are the
        problem-solving aspect and magic of creating something new. I've{" "}
        <span className="underline font-medium">loved</span> puzzles ever since
        I was a kid, and the feeling of figuring out a solution to a problem,
        including creating something from nothing brings me so much excitement.
        My core stack is{" "}
        <span className="font-medium">
          JavaScript, React, Express, and MongoDB
        </span>
        . I am also familiar with TypeScript, but I am always looking to learn
        new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Software
        Engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy spending
        time with friends, watching basketball games
        <span className="font-medium">(die-hard Lakers fan)</span>, playing
        video games, reading, golfing
        <span className="font-medium">(best average golfer)</span>, hiking, and
        watching movies. Also,{" "}
        <span className="font-medium">I LOVE DOGGOS</span>
      </p>
    </motion.section>
  );
}
