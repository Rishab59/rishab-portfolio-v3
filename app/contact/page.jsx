"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { motion } from "framer-motion";

import { info } from "./info";
import Socials from "@/components/Socials";


const Contact = () => {
    return (
        <motion.section
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
            className = "py-6"
        >
            <div className = "container mx-auto">
                <div className = "flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className = "xl:w-[60%] order-2 xl:order-none">
                        <form className = "flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className = "text-4xl text-accent">
                                Let's Work together
                            </h3>

                            <p className = "text-white/60">
                                ToDO Fill Content
                            </p>

                            {/* input */}
                            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type = "firstname"
                                    placeholder = "FirstName"
                                />
                                <Input
                                    type = "lastname"
                                    placeholder = "LastName"
                                />
                                <Input
                                    type = "email"
                                    placeholder = "Email Address"
                                />
                                <Input
                                    type = "number"
                                    placeholder = "Phone Number"
                                />
                            </div>

                            {/* select */}
                            <Select>
                                <SelectTrigger className = "w-full">
                                    <SelectValue
                                        placeholder = "What do want to say about"
                                    />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Chooses a content
                                        </SelectLabel>

                                        <SelectItem value = "feedback">
                                            Feedback
                                        </SelectItem>
                                        <SelectItem value = "hiring">
                                            Hiring
                                        </SelectItem>
                                        <SelectItem value = "general">
                                            General Connversation
                                        </SelectItem>
                                        <SelectItem value = "connect">
                                            Want to connect
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* textarea */}
                            <Textarea
                                className = "h-[200px]"
                                placeholder = "Type your message here..."
                            />

                            {/* button */}
                            <div className = "w-full flex justify-center">
                                <Button
                                    className = "max-w-40"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* info */}
                    <div className = "flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <div className = "flex flex-col gap-10">
                            <div>
                                <ul className = "flex flex-col gap-10">
                                    {
                                        info.map((item, index) => {
                                            return (
                                                <li
                                                    key = { index }
                                                    className = "flex items-center gap-6"
                                                >
                                                    <div className = "w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                                                        <div className = "text-[28px]">
                                                            { item.icon }
                                                        </div>
                                                    </div>

                                                    <div className = "flex-1">
                                                        <p className = "text-white/60">
                                                            { item.title }
                                                        </p>

                                                        <h3 className = "text-xl">
                                                            { item.description }
                                                        </h3>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="md:w-">
                                <Socials
                                    containerStyles = "flex gap-6 mt-4 md:mt-10 items-center justify-center"
                                    iconStyles = "w-14 h-14 md:w-20 md:h-20 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};


export default Contact;
