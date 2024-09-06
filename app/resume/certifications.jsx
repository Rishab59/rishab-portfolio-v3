"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import FileViewer from "@/components/FileViewer";

import { certifications } from "./content";
import Link from "next/link";
import { PiCaretRightBold } from "react-icons/pi";


const Certifications = () => {

    return (
        <div className = "flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className = "text-3xl font-bold">
                { certifications.title }
            </h3>

            <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                { certifications.description }
            </p>

            <ScrollArea className = "h-[430px]">
                <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                        certifications.items.map((item, index) => {
                            return (
                                <li 
                                    key = { index }
                                    className = "bg-[#232329] h-[390px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                    <h3 className = "text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
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

                                    <span className = "text-accent">
                                        ExpiryDate:
                                        &nbsp;
                                        { item.expiryDate }
                                    </span>

                                    <FileViewer file = { item.certificate } />

                                    <div className = "mt-2">
                                        <Link
                                            key = { index }
                                            href = { item.verify }
                                            legacyBehavior
                                        >
                                            <a
                                                className = "text-white no-underline hover:text-accent hover:underline"
                                                target = "_blank" 
                                                rel = "noopener noreferrer"
                                            >
                                                <span className = "flex items-center">
                                                    Verify
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


export default Certifications;
