"use client";

import Link from "next/link";

import { PiCaretRightBold } from "react-icons/pi";

import { ScrollArea } from "@/components/ui/scroll-area";

import FileViewer from "@/components/FileViewer";

import { digitalBadgesAndCertificates as DBC } from "@/data/resume-content.js";
import StaticTypingEffect from "@/components/typingEffect/StaticTypingEffect";


const DigitalBadgesAndCertificates = () => {
    return (
        <div className = "flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className = "text-accent text-3xl font-bold h-8">
                <StaticTypingEffect
                    content = { `${DBC.title} - (${DBC.items.length})` }
                    typingSpeed = { 100 }
                />
            </h3>

            {/* <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                { digitalBadgesAndCertificates.description }
            </p> */}

            <ScrollArea className = "h-[425px]">
                <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                        DBC.items.sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate)).map((item, index) => { // sorts in decending order of issueDate and then map
                            return (
                                <li 
                                    key = { index }
                                    className = "bg-[#232329] h-[365px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                    <div className = "w-full h-[70%] min-h-[40%]">
                                        <FileViewer file = { item.src } />
                                    </div>

                                    <h3 className = "text-lg max-w-[260px] text-center lg:text-left mt-2">
                                        { item.name }
                                    </h3>

                                    <div className = "flex items-center gap-3">
                                        {/* dot */}
                                        <span className = "w-[6px] h-[6px] rounded-full bg-accent"></span>
                                        
                                        <p className = "text-white/60">
                                            { item.issuedBy }
                                        </p>
                                    </div>

                                    <span className = "text-accent">
                                        IssuedOn:
                                        &nbsp;
                                        { item.issueDate }
                                    </span>

                                    {
                                        item.credentialID && (
                                            <span className = "text-accent text-xs">
                                                Credential ID:
                                                &nbsp;
                                                { item.credentialID }
                                            </span>
                                        )
                                    }

                                    <div className = "mt-3">
                                        <Link
                                            key = { index }
                                            href = { item.verify }
                                            target = "_blank" 
                                            rel = "noopener noreferrer"
                                            className = "text-white no-underline hover:text-accent hover:underline"
                                        >
                                            <span className = "flex items-center">
                                                Verify
                                                <PiCaretRightBold className = "ml-2" />
                                            </span>
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


export default DigitalBadgesAndCertificates;
