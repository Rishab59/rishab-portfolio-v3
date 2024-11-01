"use client";

import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import ProjectsSliderBtns from "@/components/ProjectsSliderBtns";

import { projects } from "@/data/projects.js";


const getUniqueCategories = (projects) => {
    const categories = projects.map(project => project.category);
    return [...new Set(categories)].sort((a, b) => b.localeCompare(a)); // sort in decending order
};


const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const categories = ["All", ...getUniqueCategories(projects)];

    const [project, setProject] = useState(filteredProjects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(filteredProjects[currentIndex]);
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        const newFilteredProjects = category === "All" ? projects : projects.filter(proj => proj.category === category);
        
        setFilteredProjects(newFilteredProjects);
        setProject(newFilteredProjects[0]);
        setSelectedCategory(category);
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
            <div className = "container mx-auto mt-[-45px]">
                {/* Filter Dropdown */}
                <div className = "mb-2 xl:mb-4 flex flex-col xl:flex-row justify-center gap-5">
                    <div>
                        <h3 className = "text-xl mt-1">
                            Select Category
                        </h3>
                    </div>

                    <select
                        value = { selectedCategory }
                        onChange = { handleCategoryChange }
                        className = "p-2 border rounded border-white text-white/60 bg-primary focus:border-accent outline-none min-w-[35%]"
                    >
                        {
                            categories.map((cat, index) => (
                                <option
                                    key = { index }
                                    value = { cat }
                                >
                                    { cat }
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className = "flex flex-col xl:flex-row xl:gap-[50px]">
                    <div className = "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className = "flex flex-col gap-[25px] h-[50%]">
                            {/* outline num */}
                            <div className = "text-6xl leading-none font-extrabold text-transparent text-outline flex gap-4">
                                {
                                    project 
                                        ?
                                            (filteredProjects.indexOf(project) + 1).toString().padStart(2, '0')
                                        : 
                                            '00'
                                }

                                <span>
                                    /
                                </span>
                                
                                {
                                    filteredProjects.length.toString().padStart(2, '0')
                                }
                            </div>

                            {/* project title */}
                            <h2 className = "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                { project.title }
                            </h2>

                            {/* project category */}
                            <p className = "text-white/60">
                                Category:
                                &nbsp;
                                { project.category }
                            </p>

                            {/* project description */}
                            <p className = "text-white/60">
                                { project.description }
                            </p>

                            <p className = "text-xl">
                                Tech Stack:
                            </p>

                            {/* tech stack */}
                            <ul className = "flex gap-4 -mt-4">
                                {
                                    project.stack.map((item, index) => (
                                        <li
                                            key = { index }
                                            className = "text-xl text-accent"
                                        >
                                            { item.name }
                                            
                                            {
                                                (index !== project.stack.length - 1)
                                                    ? 
                                                        <span>,</span> 
                                                    : 
                                                        ""
                                            }
                                        </li>
                                    ))
                                }
                            </ul>

                            {/* border */}
                            <div className = "border border-white/20">
                            </div>

                            {/* buttons */}
                            <div className = "flex items-center gap-4">
                                {/* live project */}
                                {
                                    project.liveOutput !== "" && (
                                        <Link
                                            href = { project.liveOutput }
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
                                        </Link>
                                    )
                                }

                                {/* GitHub Link */}
                                <Link
                                    href = { project.sourceCode }
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
                                filteredProjects.map((proj, index) => (
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
                                                    className = "object-scale-down bg-primary"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                            {/* slider buttons */}
                            <ProjectsSliderBtns
                                containerStyles = "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles = "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[50px] h-[50px] rounded-full flex justify-center items-center transition-all duration-500"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};


export default Projects;
