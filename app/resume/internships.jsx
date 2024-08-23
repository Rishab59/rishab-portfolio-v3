"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

import { internships } from "./content";


const Internships = () => {
    return (
        <div className = "flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className = "text-3xl font-bold">
                { internships.title }
            </h3>

            <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                { internships.description }
            </p>

            <ScrollArea className = "h-[400px]">
                <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                        internships.items.map((item, index) => {
                            return (
                                <li 
                                    key = { index }
                                    className = "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                    <h3 className = "text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                        { item.position }
                                    </h3>

                                    <span className = "text-accent">
                                        { item.duration }
                                    </span>

                                    <div className = "flex items-center gap-3">
                                        {/* dot */}
                                        <span className = "w-[6px] h-[6px] rounded-full bg-accent"></span>
                                        
                                        <p className = "text-white/60">
                                            { item.company }
                                        </p>
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


export default Internships;
