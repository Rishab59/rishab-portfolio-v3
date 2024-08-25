"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import { projects } from "./projects";

import ProjectsSliderBtns from "@/components/ProjectsSliderBtns";


const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;

        // update current slide
        setProject(projects[currentIndex]);
    }; 
    
    
    return (
        <motion.section
            initial = {{
                opacity: 0,
            }}
            animate = {{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn",
                },
            }}
            className = "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className = "flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className = "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className = "flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className = "text-6xl leading-none font-extrabold text-transparent text-outline flex gap-4">
                                { project.num }
                                <span>/</span>
                                { (projects.length < 10) ? "0" + projects.length : projects.length }
                            </div>

                            {/* project category */}
                            <h2 className = "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                { project.category }
                                &nbsp;
                                project
                            </h2>

                            {/* project description */}
                            <p className = "text-white/60">
                                { project.description }
                            </p>

                            {/* tech stack */}
                            <ul className = "flex gap-4">
                                {
                                    project.stack.map((item, index) => {
                                        return (
                                            <li
                                                key = { index }
                                                className = "text-xl text-accent"
                                            >
                                                { item.name }
                                                
                                                {/* remove last comma */}
                                                { (index !== project.stack.length - 1)
                                                    ? 
                                                        <span>,</span>
                                                    : 
                                                        ""
                                                }
                                            </li>
                                        );
                                    })
                                }
                            </ul>

                            {/* border */}
                            <div className = "border border-white/20">
                            </div>

                            {/* buttons */}
                            <div className = "flex items-center gap-4">
                                {/* live project */}
                                { (project.liveOutput !== "")
                                    ?
                                        <Link
                                            href = { project.liveOutput }
                                            legacyBehavior
                                        >
                                            <a
                                                target = "_blank" 
                                                rel = "noopener noreferrer"
                                            >
                                                <TooltipProvider delayDuration = { 100 }>
                                                    <Tooltip>
                                                        <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                            <BsArrowUpRight
                                                                className = "text-white text-3xl group-hover:text-accent group-hover:rotate-45 transition-all duration-500"
                                                            />
                                                        </TooltipTrigger>

                                                        <TooltipContent>
                                                            <p>
                                                                Live Project
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </a>
                                        </Link>
                                    :
                                        null
                                }

                                {/* GitHub Link */}
                                <Link
                                    href = { project.sourceCode }
                                    legacyBehavior
                                >
                                    <a
                                        target = "_blank" 
                                        rel = "noopener noreferrer"
                                    >
                                        <TooltipProvider delayDuration = { 100 }>
                                            <Tooltip>
                                                <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub
                                                        className = "text-white text-3xl group-hover:text-accent"
                                                    />
                                                </TooltipTrigger>

                                                <TooltipContent>
                                                    <p>
                                                        Source Code
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className = "w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween = { 30 }
                            slidesPerView = { 1 }
                            onSlideChange = { handleSlideChange }
                            className = "xl:h-[520px] mb-12"
                        >
                            {
                                projects.map((proj, index) => {
                                    return (
                                        <SwiperSlide
                                            key = { index }
                                            className = "w-full"
                                        >
                                            <div className = "h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                                {/* overlay */}
                                                <div className = "absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                                                </div>

                                                {/* image */}
                                                <div className = "relative w-full h-full">
                                                    <Image
                                                        src = { proj.image }
                                                        alt = "Project Image"
                                                        fill
                                                        className = "object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }

                            {/* slider buttons */}
                            <ProjectsSliderBtns
                                containerStyles = "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                                btnStyles = "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-full flex justify-center items-center transition-all duration-500"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};


export default Projects;
