"use client";

import { useRef } from "react";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import Socials from "@/components/Socials";
import CodingPlatformsLink from "@/components/codingPlatformsLogo/codingPlatformsLink";

import { info } from "@/data/contact-info.js";
import { contact } from "@/data/contactPage";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            //"YOUR_SERVICE_ID",
            process.env.NEXT_PUBLIC_EmailJS_SERVICE_ID,
            //"YOUR_TEMPLATE_ID",
            process.env.NEXT_PUBLIC_EmailJS_TEMPLATE_ID,
            form.current,
            //"YOUR_PUBLIC_KEY"
            process.env.NEXT_PUBLIC_EmailJS_PUBLIC_KEY
        )
        .then((result) => {
            toast.success("Message Delivered Successfully!", {
                autoClose: 5000,
            }); // Success notification

            setTimeout(() => {
                window.location.reload();
            }, 6000);

            console.log("SUCCESS ! ", result.text);
        }, (error) => {
            toast.error("There was an issue sending your message. Please try again later.", {
                autoClose: 5000,
            }); // Error notification
            
            console.log("FAILED... ", error.text);
        });
    };
    
    /*const sendEmailDummy = (e) => {
        e.preventDefault();

        toast.success("Message Delivered Successfully!", {
            autoClose: 5000,
        }); // Success notification

        // setTimeout(() => {
        //     window.location.reload(); // Reload the page after a delay
        // }, 6000);

        // alert("Email will be sent");
    };*/

    const phonePattern = /^(?:\+?\d{1,3}[- ]?)?\d{10}$/;


    return (
        <motion.section
            initial = {{ opacity: 0 }}
            animate = {{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn" 
                }
            }}
            className = "py-6"
        >
            <div className = "container mx-auto">
                <div className = "flex flex-col xl:flex-row gap-[30px]">
                    <div className = "xl:w-[60%] order-2 xl:order-none">
                        <form
                            ref = { form }
                            onSubmit = { sendEmail }
                            className = "flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className = "text-4xl text-accent">
                                { contact.title }
                            </h3>
                            
                            <p className = "text-white/60">
                                { contact.description }
                            </p>

                            {/* input fields */}
                            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type = "text"
                                    name = "firstname"
                                    placeholder = "FirstName"
                                    required
                                />
                                
                                <Input
                                    type = "text"
                                    name = "lastname"
                                    placeholder = "LastName"
                                    required
                                />
                                
                                <Input
                                    type = "email"
                                    name = "email"
                                    placeholder = "Email Address"
                                    required
                                />
                                
                                <Input
                                    type = "text"
                                    name = "phone"
                                    placeholder = "Phone Number"
                                    // pattern = "[0-9]*"
                                    pattern = { phonePattern }
                                    required
                                />
                            </div>

                            {/* select field */}
                            <Select
                                name = "topic"
                                required
                            >
                                <SelectTrigger className = "w-full">
                                    <SelectValue placeholder = "What Would You Like to Discuss" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Choose a content
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
                                name = "message"
                                placeholder = "Type your message here..."
                                className = "h-[200px]"
                                required
                            />

                            {/* submit button */}
                            <div className = "w-full flex justify-center">
                                <Button
                                    type = "submit"
                                    className = "max-w-40"
                                >
                                    Send Email
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* info section */}
                    <div className = "flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <div className = "flex flex-col gap-10">
                            <ul className = "flex flex-col gap-10">
                                {
                                    info.map((item, index) => (
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
                                    ))
                                }
                            </ul>

                            <Socials
                                containerStyles = "flex gap-6 mt-4 md:mt-10 items-center justify-center"
                                iconStyles = "w-14 h-14 md:w-20 md:h-20 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                            />

                            <CodingPlatformsLink
                                containerStyles = "flex gap-6 md:mt-2 items-center justify-center"
                                iconStyles = "w-14 h-14 md:w-20 md:h-20 flex justify-center items-center border border-accent rounded-full text-accent hover:bg-accent hover:text-primary transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </motion.section>
    );
};


export default Contact;
