"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowDownRight } from "react-icons/bs";


const communities = [
    {
        num: "01",
        title: "AWS Cloud Club Panimalar Chennai",
        description: "FullStack Lead @ AWS Cloud Club Panimalar Chennai",
        href: "/",
    },
    {
        num: "02",
        title: "Coders Forum",
        description: "Initiator & Strategist @ Coders Forum",
        href: "/",
    },
    {
        num: "03",
        title: "IEEE - Panimalar",
        description: "Student Coordinator @ IEEE - Panimalar",
        href: "/",
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
                                            className = "w-[70px] h-[70px] rounded-full bg-slate-200 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                        >
                                            <BsArrowDownRight
                                                className = "text-primary text-3xl"
                                            />
                                        </Link>
                                    </div>

                                    {/* title */}
                                    <h2 className = "text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                        { community.title }
                                    </h2>

                                    {/* description */}
                                    <p className = "text-white/60">
                                        { community.description }
                                    </p>

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
