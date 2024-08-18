"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

// components
import { links } from "./helpers/links";
import Logo from "./helpers/logo";


const MobileNavBar = () => {
    const pathName = usePathname();


    return (
        <Sheet>
            <SheetTrigger className = "flex justify-center items-center">
                <CiMenuFries className = "text-[30px] text-accent" />
            </SheetTrigger>

            <SheetContent className = "flex flex-col">
                {/* logo */}
                <div className = "mt-32 mb-18 text-center text-2xl">
                    <Logo />
                </div>

                <mobilenavbar className = "flex flex-col justify-center items-center gap-6">
                    {
                        links.map((link, index) => {
                            return (
                                <Link
                                    href = { link.path }
                                    key = { index }
                                    className = { `${ link.path === pathName && "text-accent border-b-2 border-accent" } font-medium hover:text-accent transition-all` }
                                >
                                    { link.name[0].toUpperCase() + link.name.slice(1) }
                                </Link>
                            )
                        }) 
                    }
                </mobilenavbar>
            </SheetContent>
        </Sheet>
    );
};


export default MobileNavBar;
