"use client";

import StaticTypingEffect from "@/components/typingEffect/StaticTypingEffect";
import { ScrollArea } from "@/components/ui/scroll-area";

import { about } from "@/data/resume-content.js";


const About = () => {
    return (
        <div className = "flex flex-col">
            <h3 className = "text-3xl font-bold text-accent h-8">
                <StaticTypingEffect
                    content = { about.title }
                    typingSpeed = { 150 }
                />
            </h3>

            <div>
                <ScrollArea className = "h-[500px] mt-6">
                    <ul className = "grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[800px] mx-auto xl:mx-0">
                        {
                            about.info.map((item, index) => {
                                return (
                                    <li
                                        key = { index }
                                        className = "flex items-center justify-start gap-3"
                                    >
                                        <div className = "flex gap-2 mt-2 max-w-[95%]">
                                            {/* dot */}
                                            <span className = "w-[6px] h-[6px] rounded-full bg-accent mt-3"></span>
                                            
                                            <span className = "text-white/75">
                                                { item.fieldName }
                                            </span>
                                            
                                            <span>
                                                :
                                            </span>
                                            
                                            <span className = "text-lg mt-[3px]">
                                                { item.fieldValue }
                                            </span>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>

                    {/* line */}
                    <div className = "border-b border-white/20 w-full mt-6 mb-5">
                    </div>

                    <div className = "flex flex-col">
                        <p className = "text-white/80 mx-auto xl:mx-0 text-justify max-w-[97%]">
                            { about.description.firstPara }
                        </p>

                        <h3 className = "mt-4 text-xl text-accent">
                            Skills:
                        </h3>

                        <div className = "grid grid-cols-1 md:grid-cols-2">
                            {
                                about.description.skills.topics.map((topic, idx) => {
                                    return (
                                        <div
                                            key = { idx }
                                            className = "mt-2 flex flex-col gap-1"
                                        >
                                            <p className = "mt-2 text-accent text-lg">
                                                { topic }
                                            </p>

                                            {
                                                ((idx == 0)
                                                    ? about.description.skills.lang
                                                    : ((idx == 1)
                                                        ? about.description.skills.interpersonal
                                                        : about.description.skills.toolsAndTech))
                                                .map((ele, index) => {
                                                    return (
                                                        <div
                                                            key = { index }
                                                            className = "flex flex-row gap-3"
                                                        >
                                                            {/* dot */}
                                                            <span className = "w-[6px] h-[6px] rounded-full bg-accent mt-3"></span>
            
                                                            <p>
                                                                { ele }
                                                            </p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <h3 className = "mt-4 text-xl text-accent">
                            Hobbies:
                        </h3>

                        <div className = "mt-2 flex flex-col gap-1">
                            {
                                about.description.hobbies.map((ele, index) => {
                                    return (
                                        <div
                                            key = { index }
                                            className = "flex flex-row gap-3 max-w-[97%]"
                                        >
                                            {/* dot */}
                                            <span className = "w-[6px] h-[6px] rounded-full bg-accent mt-3"></span>

                                            <p className = "text-justify">
                                                { ele }
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};


export default About;
