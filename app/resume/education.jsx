"use client";

import StaticTypingEffect from "@/components/typingEffect/StaticTypingEffect";
import { ScrollArea } from "@/components/ui/scroll-area";

import { education } from "@/data/resume-content.js";


const Education = () => {
    return (
        <div className = "flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className = "text-3xl font-bold text-accent h-8">
                <StaticTypingEffect
                    content = { education.title }
                    typingSpeed = { 100 }
                />
            </h3>

            {/* <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                { education.description }
            </p> */}

            <ScrollArea className = "h-[490px]">
                <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                        education.items.map((item, index) => {
                            return (
                                <li 
                                    key = { index }
                                    className = "bg-[#232329] h-[260px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                    <h3 className = "text-xl max-w-[260px] min-h-[46px] text-center lg:text-left">
                                        { item.degree }
                                    </h3>

                                    <span className = "text-accent">
                                        { item.duration }
                                    </span>
                                    
                                    <p className = "text-white/60">
                                        { item.institution }
                                    </p>

                                    <div className = "flex gap-3 mt-2">
                                        {/* dot */}
                                        <span className = "w-[6px] h-[6px] rounded-full bg-accent mt-2"></span>
                                        
                                        <span className = "text-white/65 text-sm">
                                            { item.score }
                                        </span>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </ScrollArea>
        </div>
    );
};


export default Education;
