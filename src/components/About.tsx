"use client";
import React from "react";
import TitleText from "./TitleText";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import Link from "next/link";


const About = () => {
  return (
    <div>
      
      <SpotlightPreview />
    
    </div>
  );
};

export default About;



export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden mb-6">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 mb-0">
      <TitleText title="About Us" />
        

        <p className="text-2xl md:text-5xl font-bold font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400 bg-opacity-50">
           I Am a Software Engineer.
        </p>
        <p className="mt-10  font-mono text-base text-neutral-300 max-w-lg text-center mx-auto ">
        I&apos;m a passionate software engineer from India with a keen interest in cutting-edge technology fields such as MERN stack and Flutter development. My journey into the tech world began with a fascination for building robust web applications using HTML, CSS, and JavaScript.


        </p>
        
        
        

        <div className="mt-10 flex justify-center">
          <Link href="https://docs.google.com/document/d/1yIpGWrY1gg5eSpo2yj5Pi5FegSLKURJljVPR_dcJrU4/edit?usp=sharing" target="_blank">
            <button className="px-4 py-2 text-white font-bold font-mono bg-gradient-to-r from-purple-500 to-blue-400 rounded-full border-4 border-transparent animate-borderScroll mb-6">
              Resume
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

