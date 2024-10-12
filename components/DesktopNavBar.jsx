"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "./helpers/links";


const DesktopNavBar = () => {
    const pathName = usePathname();
    // console.log(pathName); // current path


    return (
        <desktopnavbar className = "flex gap-8">
            {
                links.map((link, index) => {
                    return (
                        <Link
                            href = { link.path }
                            key = { index }
                            className = { 
                                "font-medium hover:text-accent transition-all"
                                + (
                                    (link.path === pathName)
                                    &&
                                    " text-accent border-b-2 border-accent"
                                )
                            }
                        >
                            { link.name[0].toUpperCase() + link.name.slice(1) }
                        </Link>
                    )
                }) 
            }
        </desktopnavbar>
    );
};


export default DesktopNavBar;
