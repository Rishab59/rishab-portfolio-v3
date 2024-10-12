import Link from "next/link";

import { CodingPlatformLinks as CPL } from "@/data/coding-platform-links";


const IconComponent = ({ iconPath, index }) => {
    return (
        <svg
            xmlns = "http://www.w3.org/2000/svg"
            viewBox = {
                (index == 1) ? "-8 -8 48 48" : "-12 -12 48 48"
            }
            className = "w-full h-full"
            fill = "currentColor"
        >
            <path d = { iconPath } />
        </svg>
    );
};  

const CodingPlatformsLink = ({ containerStyles, iconStyles }) => {
    return (
        <div className = { containerStyles }>
            {
                CPL.map((item, index) => {
                    return (
                        <Link
                            key = { index }
                            href = { item.linkPath }
                            target = "_blank"
                            rel = "noopener noreferrer"
                        >
                            <div
                                className = { iconStyles }
                            >
                                <IconComponent
                                    iconPath = { item.iconPath }
                                    index = { index }
                                />
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    );
};


export default CodingPlatformsLink;
