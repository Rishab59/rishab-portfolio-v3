import Link from "next/link";

import { Button } from "./ui/button";

// components
import Logo from "./helpers/logo";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";


const Header = () => {
    return (
        <header className = "py-4 xl:py-6 text-white">
            <div className = "container mx-auto flex justify-between items-center">
                {/* logo */}
                <Logo />

                {/* Desktop NavBar & Hire me button*/}
                <div className = "hidden xl:flex items-center gap-8">
                    <DesktopNavBar />

                    <Link href = "/contact">
                        <Button>
                            Hire me
                        </Button>
                    </Link>
                </div>

                {/* Mobile NavBar */}
                <div className = "xl:hidden">
                    <MobileNavBar />
                </div>
            </div>
        </header>
    );
};


export default Header;
