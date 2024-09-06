"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

import { community } from "./content";
import { PiCaretRightBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";


const Communities = () => {
    return (
        <div className = "flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className = "text-3xl font-bold">
                { community.title }
            </h3>

            <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                { community.description }
            </p>

            <ScrollArea className = "h-[400px]">
                <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                        community.items.map((item, index) => {
                            return (
                                <li 
                                    key = { index }
                                    className = "bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                    <div className = "flex flex-row items-center">
                                        <h3 className = "text-xl max-w-[260px] min-h-[60px] text-center lg:text-left flex-shrink-0 w-[75%]">
                                            { item.name }
                                        </h3>

                                        <div className = "flex-shrink-0 w-[25%] flex justify-end">
                                            <Image
                                                src = { item.logo }
                                                alt = "Community Logo Image"
                                                width = { 100 }
                                                height = { 100 }
                                                className = "object-cover rounded-full ml-5"
                                                unoptimized = { true }
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

                                    <div className = { item.name === "IEEE - Panimalar" ? "hidden" : "mt-3" }>
                                        <Link
                                            key = { index }
                                            href = { item.link }
                                            legacyBehavior
                                        >
                                            <a
                                                className = "text-white no-underline hover:text-accent hover:underline"
                                                target = "_blank" 
                                                rel = "noopener noreferrer"
                                            >
                                                <span className = "flex items-center">
                                                    Vist Site
                                                    <PiCaretRightBold className = "ml-2" />
                                                </span>
                                            </a>
                                        </Link>
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


export default Communities;
