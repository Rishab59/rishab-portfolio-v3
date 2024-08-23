"use client";

import { about } from "./content";


const About = () => {
    return (
        <div className = "flex flex-col gap-[30px]">
            <h3 className = "text-3xl font-bold">
                { about.title }
            </h3>

            <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0">
                { about.description }
            </p>

            <ul className = "grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
                {
                    about.info.map((item, index) => {
                        return (
                            <li
                                key = { index }
                                className = "flex justify-center items-center xl:justify-start gap-4"
                            >
                                <span className = "text-white/75">
                                    { item.fieldName }
                                </span>
                                
                                <span>
                                    :
                                </span>
                                
                                <span className = "text-xl">
                                    { item.fieldValue }
                                </span>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};


export default About;
