import Link from "next/link";

import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";


const socials = [
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/hrishab59/",
    },
    {
        icon: <FaGithub />,
        path: "https://www.github.com/Rishab59/",
    },
    {
        icon: <FaWhatsapp />,
        path: "https://wa.me/7200076122?text=Hey%20Rishab,%20I%27m%20interested%20to%20collaborate%20with%20you.",
    },
    {
        icon: <FaInstagram />,
        path: "https://instagram.com/hrishab_59?igshid=ZDc4ODBmNjlmNQ==",
    },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className = { containerStyles }>
            {
                socials.map((item, index) => {
                    return (
                        <Link
                            key = { index }
                            href = { item.path }
                            legacyBehavior
                        >
                            <a
                                className = { iconStyles }
                                target = "_blank" 
                                rel = "noopener noreferrer"
                            >
                                { item.icon }
                            </a>
                        </Link>
                    )
                }) 
            }
        </div>
    );
};


export default Socials;
