"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import About from "./about";
import Education from "./education";
import Skills from "./skills";
import Internships from "./internships";
import Communities from "./community";
import Certifications from "./certifications";
import DigitalBadgesAndCertificates from "./digitalBadgesAndCertificates";


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
                    defaultValue = "about"
                    className = "flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className = "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 justify-center">
                        <TabsTrigger value = "about">About me</TabsTrigger>
                        <TabsTrigger value = "education">Education</TabsTrigger>
                        <TabsTrigger value = "skills">Skills</TabsTrigger>
                        <TabsTrigger value = "internships">Internships</TabsTrigger>
                        <TabsTrigger value = "community">Community</TabsTrigger>
                        <Link
                            href = "/projects"
                        >
                            <TabsTrigger value = "projects">
                                Projects
                            </TabsTrigger>
                        </Link>
                        <TabsTrigger value = "certifications">Certifications</TabsTrigger>
                        <TabsTrigger value = "digitalBagdesAndCertificates">Digital Bagdes And Certificates</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className = "min-h-[70vh] w-full">
                        {/* about */}
                        <TabsContent
                            value = "about"
                            className = "w-full text-center xl:text-left"
                        >
                            <About />
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

                        {/* internships */}
                        <TabsContent
                            value = "internships"
                            className = "w-full"
                        >
                            <Internships />
                        </TabsContent>

                        {/* community */}
                        <TabsContent
                            value = "community"
                            className = "w-full"
                        >
                            <Communities />
                        </TabsContent>

                        {/* certifications */}
                        <TabsContent
                            value = "certifications"
                            className = "w-full"
                        >
                            <Certifications />
                        </TabsContent>
                        
                        {/* digitalBagdesAndCertificates */}
                        <TabsContent
                            value = "digitalBagdesAndCertificates"
                            className = "w-full"
                        >
                            <DigitalBadgesAndCertificates />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};


export default Resume;
