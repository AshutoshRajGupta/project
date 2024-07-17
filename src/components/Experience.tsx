"use client";
import React from "react";
import TitleText from "./TitleText";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { experience } from "@/utils/data";

const Experience = () => {
  return (
    <div>
      <TitleText title="My Experience" />
      <motion.p
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="text-white text-center font-mono text-lg p-10 md:px-[25%]"
      >
       
      
  We turn your professional journey and achievements into compelling stories that captivate and motivate both you and your audience.



      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-40">
        {experience?.map((exp) => (
          <motion.div
            key={exp.id}
            variants={textVarient}
            initial="hidden"
            whileInView="show"
          >
            <BackgroundGradient className="rounded-[22px] p-4 bg-zinc-900">
              <p className="text-base sm:text-2xl text-black mt-4 mb-2 dark:text-neutral-200 font-mono">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-xl text-neutral-400 font-mono">{exp.title}</p>
              <p className="text-gray-400 mt-2 font-mono">{exp.description}</p>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
