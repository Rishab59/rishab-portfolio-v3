"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { BsArrowDownRight } from "react-icons/bs";

import { communities } from "@/data/resume-content.js";


const Community = () => {
    return (
        <section className = "min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className = "container mx-auto">
                <motion.div
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
                    className = "grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {
                        communities.items.map((community, index) => {
                            return (
                                <div
                                    key = { index }
                                    className = "flex-1 flex flex-col justify-center gap-6 group"
                                >
                                    {/* top */}
                                    <div className = "w-full flex justify-between items-center">
                                        <div className = "text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                            { community.num }
                                        </div>

                                        {
                                            community.link && (
                                                <Link
                                                    href = { community.link }
                                                    className = "w-[70px] h-[70px] rounded-full bg-slate-300 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 text-primary"
                                                    target = "_blank"
                                                    rel = "noopener noreferrer"
                                                >
                                                    <BsArrowDownRight className = "text-3xl" />
                                                </Link>
                                            )
                                        }
                                    </div>
                                    
                                    <div className = "flex flex-row items-center gap-6">
                                        <div className = "flex flex-col w-[75%]">
                                            {/* name */}
                                            <h2 className = "text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                                { community.name }
                                            </h2>

                                            {/* role */}
                                            <p className = "text-white/60 mt-3">
                                                { community.role }
                                            </p>
                                        </div>

                                        <div className = "flex-shrink-0 w-[25%] flex justify-end ml-11">
                                            <Image
                                                src = { community.logo }
                                                alt = "Community Logo Image"
                                                width = { 
                                                    (community.num === "03") 
                                                    ?
                                                        130 
                                                    : 
                                                        100 
                                                }
                                                height = { 
                                                    (community.num === "03") 
                                                    ?
                                                        130
                                                    : 
                                                        100 
                                                }
                                                className = { 
                                                    "object-cover"
                                                    + (
                                                        (community.name !== "AWS Cloud Club Panimalar Chennai")
                                                        &&
                                                        " rounded-full"
                                                    ) 
                                                }
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <p className = "text-white/65 text-justify">
                                            { community.description }
                                        </p>
                                    </div>

                                    {/* border */}
                                    <div className = "border-b border-white/20 w-full">
                                    </div>
                                </div>
                            );
                        })
                    }
                </motion.div>
                
                {/* give gap after the content to the end of page */}
                <div className = "mb-20">
                </div>
            </div>
        </section>
    );
};


export default Community;
