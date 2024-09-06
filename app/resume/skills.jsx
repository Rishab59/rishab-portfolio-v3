"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { skills } from "./content";
import { ScrollArea } from "@/components/ui/scroll-area";


const Skills = () => {
    return (
        <div className = "flex flex-col gap-[30px]">
            <div className = "flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className = "text-4xl font-bold">
                    { skills.title }
                </h3>

                <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    { skills.description }
                </p>

                <ScrollArea className = "h-[400px]">
                    <ul className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {
                            skills.skillsList.map((skill, index) => {
                                return (
                                    <li key = { index }>
                                        <TooltipProvider delayDuration = { 100 }>
                                            <Tooltip>
                                                <TooltipTrigger className = "w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className = "text-6xl group-hover:text-accent transition-all duration-300">
                                                        { skill.icon }
                                                    </div>
                                                </TooltipTrigger>

                                                <TooltipContent>
                                                    <p className = "capitalize">
                                                        { skill.name }
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </ScrollArea>
            </div>
        </div>
    );
};


export default Skills;
