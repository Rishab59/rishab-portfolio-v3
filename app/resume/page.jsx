"use client";

import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Internships from "./internships";
import Education from "./education";
import Skills from "./skills";
import About from "./about";


const Resume = () => {
    return (
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
            className = "min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className = "container mx-auto">
                <Tabs
                    defaultValue = "internships"
                    className = "flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className = "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 justify-center">
                        <TabsTrigger value = "internships">Internships</TabsTrigger>
                        <TabsTrigger value = "education">Education</TabsTrigger>
                        <TabsTrigger value = "skills">Skills</TabsTrigger>
                        <TabsTrigger value = "about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className = "min-h-[70vh] w-full">
                        {/* internships */}
                        <TabsContent
                            value = "internships"
                            className = "w-full"
                        >
                            <Internships />
                        </TabsContent>

                        {/* education */}
                        <TabsContent
                            value = "education"
                            className = "w-full"
                        >
                            <Education />
                        </TabsContent>

                        {/* skills */}
                        <TabsContent
                            value = "skills"
                            className = "w-full h-full"
                        >
                            <Skills />
                        </TabsContent>

                        {/* about */}
                        <TabsContent
                            value = "about"
                            className = "w-full text-center xl:text-left"
                        >
                            <About />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};


export default Resume;
