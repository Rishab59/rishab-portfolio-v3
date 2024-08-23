import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


// about data
export const about = {
    title: "About me",
    description: "This is Rishab",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Rishab .H",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 72000 76122",
        },
        {
            fieldName: "Internships Done",
            fieldValue: "2",
        },
        {
            fieldName: "Email",
            fieldValue: "hrishab59@gmail.com",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "Alternate Email",
            fieldValue: "rishab.h@outlook.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Tamil, Malayalam",
        },
    ],
};

// internships data
export const internships = {
    icon: "/assets/resume/badge.svg",
    title: "My Internships",
    description: "ToDO content later",
    items: [
        {
            company: "DRDO",
            position: "Project Student",
            duration: "2024 - Fill",
        },
        {
            company: "CDAC",
            position: "Project Student",
            duration: "2024 - Fill",
        },
    ],
};

// education data
export const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "ToDO content later",
    items: [
        {
            institution: "PEC",
            degree: "BE - CSE",
            duration: "2024 - Fill",
        },
        {
            institution: "Velammal",
            degree: "HSC",
            duration: "2024 - Fill",
        },
    ],
};

// skills data
export const skills = {
    title: "My Skills",
    description: "ToDO - Fill content",
    skillsList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
    ],
};
