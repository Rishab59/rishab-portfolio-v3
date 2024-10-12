"use client";

import React from "react";
import { PiCaretRightBold } from "react-icons/pi";

import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";

import { internships } from "@/data/resume-content.js";
import StaticTypingEffect from "@/components/typingEffect/StaticTypingEffect";


const Internships = () => {
    return (
        <div className = "flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className = "text-accent text-3xl font-bold h-8">
                <StaticTypingEffect
                    content = { `${internships.title} - (${internships.items.length})` }
                    typingSpeed = { 100 }
                />
            </h3>

            {/* <p className = "max-w-[500px] text-white/60 mx-auto xl:mx-0">
                { internships.description }
            </p> */}

            <ScrollArea className = "h-[490px]">
                <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                        internships.items.map((item, index) => {
                            return (
                                <li 
                                    key = { index }
                                    className = "bg-[#232329] h-[420px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                    <h3 className = "text-xl max-w-[260px] text-center lg:text-left">
                                        { item.position }
                                    </h3>

                                    <p className = "text-white/60 mt-2">
                                        { item.company }
                                    </p>

                                    <span className = "text-accent">
                                        { item.duration }
                                    </span>

                                    <h3 className = "mt-4">
                                        Skills Gained
                                    </h3>
                                    
                                    <div className = "flex flex-col gap-2 items-start mb-5">
                                        {
                                            item.skillsGained.map((ele, i) => (
                                                <React.Fragment key = { i }>
                                                    <div className = "flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className = "w-[6px] h-[6px] rounded-full bg-accent"></span>

                                                        <p className = "text-white/60">
                                                            { ele.skillName }
                                                        </p>
                                                    </div>
                                                </React.Fragment>
                                            ))
                                        }
                                    </div>

                                    <Link
                                        key = { index }
                                        href = { item.verify }
                                        target = "_blank" 
                                        rel = "noopener noreferrer"
                                        className = "text-white no-underline hover:text-accent hover:underline"
                                    >
                                        <span className = "flex items-center">
                                            Verify
                                            <PiCaretRightBold className = "ml-2" />
                                        </span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </ScrollArea>
        </div>
    );
};


export default Internships;
