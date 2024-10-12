"use client";

import Link from "next/link";
import Image from "next/image";

import { PiCaretRightBold } from "react-icons/pi";

import { ScrollArea } from "@/components/ui/scroll-area";
import StaticTypingEffect from "@/components/typingEffect/StaticTypingEffect";

import { communities } from "@/data/resume-content.js";


const Communities = () => {
    return (
        <div className = "flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className = "text-accent text-3xl font-bold h-8">
                <StaticTypingEffect
                    content = { communities.title }
                    typingSpeed = { 100 }
                />
            </h3>

            <ScrollArea className = "h-[490px]">
                <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                        communities.items.map((item, index) => {
                            return (
                                <li 
                                    key = { index }
                                    className = "bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                    <div className = "flex flex-row items-center justify-between">
                                        <h3 className = "text-xl max-w-[260px] min-h-[60px] text-center lg:text-left flex-shrink-0 w-[75%]">
                                            { item.name }
                                        </h3>

                                        <div className = "flex-shrink-0 w-[35%]">
                                            <Image
                                                src = { item.logo }
                                                alt = "Community Logo Image"
                                                width = { 100 }
                                                height = { 100 }
                                                className = "object-cover"
                                            />
                                        </div>
                                    </div>

                                    <span className = "text-accent mt-2">
                                        { item.role }
                                    </span>

                                    <div className = "flex items-center gap-3">
                                        {/* dot */}
                                        <span className = "w-[6px] h-[6px] rounded-full bg-accent"></span>
                                        
                                        <p className = "text-white/60">
                                            { item.duration }
                                        </p>
                                    </div>

                                    {
                                        item.link && (
                                            <div className = "mt-3">
                                                <Link
                                                    key = { index }
                                                    href = { item.link }
                                                    target = "_blank" 
                                                    rel = "noopener noreferrer"
                                                    className = "text-white no-underline hover:text-accent hover:underline"
                                                >
                                                    <span className = "flex items-center">
                                                        Vist Site
                                                        <PiCaretRightBold className = "ml-2" />
                                                    </span>
                                                </Link>
                                            </div>
                                        )
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            </ScrollArea>
        </div>
    );
};


export default Communities;
