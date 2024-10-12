"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import Socials from "@/components/Socials";
import CodingPlatformsLink from "@/components/codingPlatformsLogo/codingPlatformsLink";

import { info } from "@/data/contact-info.js";
import { contact } from "@/data/contactPage";


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
                                { contact.title }
                            </h3>

                            <p className = "text-white/60">
                                { contact.description }
                            </p>

                            {/* input */}
                            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type = "firstname"
                                    placeholder = "FirstName"
                                    required = { true }
                                />
                                <Input
                                    type = "lastname"
                                    placeholder = "LastName"
                                    required = { true }
                                />
                                <Input
                                    type = "email"
                                    placeholder = "Email Address"
                                    required = { true }
                                />
                                <Input
                                    type = "text"
                                    inputMode = "numeric"
                                    pattern = "[0-9]*"
                                    placeholder = "Phone Number"
                                    required = { true }
                                />
                            </div>

                            {/* select */}
                            <Select
                                required = { true }
                            >
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
                                            General Conversation
                                        </SelectItem>
                                        <SelectItem value = "connect">
                                            Want to connect
                                        </SelectItem>
                                        <SelectItem value = "other">
                                            Other
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* textarea */}
                            <Textarea
                                className = "h-[200px]"
                                placeholder = "Type your message here..."
                                required = { true }
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

                            <div>
                                <Socials
                                    containerStyles = "flex gap-6 mt-4 md:mt-10 items-center justify-center"
                                    iconStyles = "w-14 h-14 md:w-20 md:h-20 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />

                                <CodingPlatformsLink
                                    containerStyles = "flex gap-6 mt-4 md:mt-10 items-center justify-center"
                                    iconStyles = "w-14 h-14 md:w-20 md:h-20 flex justify-center items-center border border-accent rounded-full text-accent hover:bg-accent hover:text-primary transition-all duration-500"
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
