import Link from "next/link";

import { socials } from "@/data/social-icon-links";


const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className = { containerStyles }>
            {
                socials.map((item, index) => {
                    const IconComponent = item.icon;

                    return (
                        <Link
                            key = { index }
                            href = { item.path }
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className = { iconStyles }
                        >
                            <IconComponent className = "w-1/2 h-1/2" />
                        </Link>
                    );
                })
            }
        </div>
    );
};


export default Socials;