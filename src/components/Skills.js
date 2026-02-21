import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    items:
      "Python, C++, C, Java, JavaScript, NextJS, Perl, SQL, Arduino, ESP-32, Linux, LaTeX",
  },
  {
    title: "Software Tools & Frameworks",
    items: "Git, Matlab, AutoDesk Fusion",
  },
  {
    title: "Bioinformatics Tools",
    items: "Sequence alignment, database management, BLAST, FASTA",
  },
  {
    title: "Spoken Languages",
    items: "English, Hindi",
  },
];

const Skills = ({ compact = false }) => {
  if (compact) {
    return (
      <section className="w-full">
        <h3 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
          Skills
        </h3>
        <div className="mt-4 flex flex-col gap-3 text-sm text-dark/80 dark:text-light/80">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="font-semibold text-dark dark:text-light">
                {group.title}:
              </div>
              <div className="mt-1">{group.items}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mt-64 md:mt-32">
      <div className="w-full text-center">
        <h2 className="font-bold text-8xl md:text-6xl">Skills</h2>
        <p className="mt-3 text-sm text-dark/70 dark:text-light/70">
          A focused toolkit across biotech, data, and modern web.
        </p>
      </div>
      <div className="mt-10 w-full">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-left text-base text-dark/80 dark:text-light/80">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className="flex flex-col"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.15 }}
            >
              <span className="font-semibold text-dark dark:text-light">
                {group.title}:
              </span>
              <span className="mt-1">{group.items}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
