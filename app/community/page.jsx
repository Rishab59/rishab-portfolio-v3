"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowDownRight } from "react-icons/bs";
import Image from "next/image";


const communities = [
    {
        num: "01",
        title: "AWS Cloud Club Panimalar Chennai",
        description: "FullStack Lead @ AWS Cloud Club Panimalar Chennai",
        href: "/",
        logo: "/assets/community/AWS_Cloud_Club_Logo.jpg",
    },
    {
        num: "02",
        title: "Coders Forum",
        description: "Initiator & Strategist @ Coders Forum",
        href: "/",
        logo: "/assets/community/AWS_Cloud_Club_Logo.jpg",
    },
    {
        num: "03",
        title: "IEEE - Panimalar",
        description: "Student Coordinator @ IEEE - Panimalar",
        href: "/",
        logo: "/assets/community/AWS_Cloud_Club_Logo.jpg",
    },
];

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
                        communities.map((community, index) => {
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

                                        <Link
                                            href = { community.href }
                                            className = "w-[70px] h-[70px] rounded-full bg-slate-300 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                        >
                                            <BsArrowDownRight
                                                className = "text-primary text-3xl"
                                            />
                                        </Link>
                                    </div>

                                    
                                    
                                    <div className = "flex flex-row items-center gap-6">
                                        <div className = "flex flex-col">
                                            {/* title */}
                                            <h2 className = "text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                                { community.title }
                                            </h2>

                                            {/* description */}
                                            <p className = "text-white/60 mt-3">
                                                { community.description }
                                            </p>
                                        </div>

                                        <div className = "flex-shrink-0 w-[25%] flex justify-end">
                                            <Image
                                                src = { community.logo }
                                                alt = "Community Logo Image"
                                                width = { 100 }
                                                height = { 100 }
                                                className = "object-cover rounded-full ml-5"
                                                unoptimized = { true }
                                            />
                                        </div>
                                    </div>

                                    {/* border */}
                                    <div className = "border-b border-white/20 w-full">
                                    </div>
                                </div>
                            );
                        })
                    }
                </motion.div>
            </div>
        </section>
    );
};


export default Community;
