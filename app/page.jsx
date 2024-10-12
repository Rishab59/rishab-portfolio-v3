"use client";


import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

import StaticTypingEffect from "@/components/typingEffect/StaticTypingEffect";
import DynamicTypingEffect from "@/components/typingEffect/DynamicTypingEffect";
import CodingPlatformsLink from "@/components/codingPlatformsLogo/codingPlatformsLink";

import { description, phrases, resumeFilePath } from "@/data/homePageContent";


const Home = () => {
  const phrasesToDisplay = useMemo(() => phrases , []);


  return (
    <section className = "h-full">
      <div className = "container mx-auto h-full">
        <div className = "flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-16">
          {/* text */}
          <div className = "text-center xl:text-left order-2 xl:order-none">
            <h1 className = "h1 mb-6">
              Hello I'm
              <br />
              <span className = "text-accent">
                Rishab.H
              </span>
            </h1>

            <div className = "text-xl h-[10px]">
              <DynamicTypingEffect
                phrases = { phrasesToDisplay }
                typingSpeed = { 125 }
                delayAfterTyping = { 900 }
              />
            </div>

            <p className = "max-w-[625px] mt-6 mb-16 text-white/80 h-20 md:h-10">
              <StaticTypingEffect
                content = { description }
                typingSpeed = { 65 }
              />
            </p>

            {/* btn and socials */}
            <div className = "flex flex-col xl:flex-row items-center gap-8">
              <a
                href = { resumeFilePath }
                download
                className = "flex items-center gap-2"
              >
                <Button
                  variant = "outline"
                  size = "lg"
                  className = "flex items-center gap-2"
                >
                  Download Resume
                  
                  <FiDownload className = "text-xl" />
                </Button>
              </a>
              
              <div className = "mb-8 xl:mb-0 flex flex-col gap-5 justify-center items-center">
                <Socials
                  containerStyles = "flex gap-5"
                  iconStyles = "w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />

                <CodingPlatformsLink
                  containerStyles = "flex gap-5"
                  iconStyles = "w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className = "order-1 xl:order-none mb-6 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};


export default Home;
