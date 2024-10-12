import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import SkillsLogo from "@/components/SkillsLogo";


// about data
export const about = {
    title: "About me",
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
            fieldName: "Internships Completed",
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
    description: {
        firstPara: "I'm Rishab, and I'm currently pursuing my Bachelor's degree in Computer Science and Engineering at Panimalar Engineering College. I have a strong interest in technologies like Java and React.js, and I'm always eager to learn and expand my skill set.",

        skills: {
            topics: [
                "Technical Languages:",
                "Interpersonal Skills:",
                "Tools & Technologies:",
            ],
            lang: [
                "Java",
                "JavaScript",
                "Python",
                "HTML & CSS",
            ],
            toolsAndTech : [
                "React.js",
                "Node.js",
                "Express.js",
                "Tailwind CSS",
                "Mongo DB",
                "Material UI",
                "Django",
                "AWS Cloud",
                "Git & GitHub",
                "MySQL",
            ],
            interpersonal : [
                "Leadership",
                "Public Speaking",
                "Communication",
                "Collaboration",
                "Community Building",
            ],
        },
        hobbies: [
            "Engaged in hobby projects focused on full-stack development.",
            "Actively engage in coding challenges on platforms like LeetCode and HackerRank, utilizing Java and SQL.",
            "Continuously learning new technologies to stay updated with industry trends.",
            "Utilize LinkedIn to stay updated on new technologies, connect with technical professionals, and build a robust professional network.",
            "Regularly attend online courses to expand technical knowledge.",
            "Stay informed on technical advancements via YouTube tutorials, online courses, LinkedIn posts and specialized technical content",
        ],
    },
};

// internships data
export const internships = {
    title: "My Internships",
    description: "ToDO content hi",
    items: [
        {
            company: "DRDO (CVRDE)",
            position: "Project Student",
            duration: "Nov 2023 - Jan 2024",
            skillsGained: [
                {
                    skillName: "Gazebo",
                },
                {
                    skillName: "ROS2",
                },
                {
                    skillName: "Blender",
                },
            ],
            verify: "https://www.linkedin.com/posts/hrishab59_internshipcompletion-intership-ros2-activity-7159818621748207616-tAyA?utm_source=share&utm_medium=member_desktop",
        },
        {
            company: "Center for Development of Advanced Computing (CDAC)",
            position: "Project Student",
            duration: "Jun 2023 - Jul 2023",
            skillsGained: [
                {
                    skillName: "Django",
                },
                {
                    skillName: "JavaScript",
                },
                {
                    skillName: "Bootstrap (Framework)",
                },
            ],
            verify: "https://www.linkedin.com/posts/hrishab59_cdacintership-cloudcomputing-openstack-activity-7087093138237898752-l1xL?utm_source=share&utm_medium=member_desktop",
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
            institution: "Panimalar Engineering College",
            degree: "BE - CSE",
            duration: "2021 - 2025",
            score: "CGPA : 8.70 / 10",
        },
        {
            institution: "Velammal Matriculation School Mogappair (Main)",
            degree: "HSC",
            duration: "2020 - 2021",
            score: "Percentage: 91% (541 / 600)",
        },
        {
            institution: "Velammal Matriculation School Mogappair (Main)",
            degree: "SSLC",
            duration: "2018 - 2019",
            score: "Percentage: 88.6% (443 / 500)",
        },
    ],
};

// skills data
export const skills = {
    title: "My Tech Skills",
    description: "ToDO - Fill content",
    skillsList: [
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SkillsLogo logo = "express.js" />,
            name: "Express.js",
        },
        {
            icon: <SkillsLogo logo = "mongodb" size = { 100 } />,
            name: "Mongo DB",
        },
        {
            icon: <SkillsLogo logo = "java" />,
            name: "Java",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SkillsLogo logo = "mui" />,
            name: "Material UI",
        },
        {
            icon: <SkillsLogo logo = "django" />,
            name: "Django",
        },
        {
            icon: <SkillsLogo logo = "aws" size = { 100 } />,
            name: "AWS Cloud",
        },
        {
            icon: <FaGithub />,
            name: "GitHub",
        },
        {
            icon: <SkillsLogo logo = "mysql" size = { 90 } />,
            name: "MySQL",
        },
        {
            icon: <SkillsLogo logo = "git" size = { 90 } />,
            name: "Git",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
    ],
};

// communities data
export const communities = {
    title: "Communities I'm contributing to",
    // description: "ToDO content later",
    items: [
        {
            num: "01",
            name: "AWS Cloud Club Panimalar Chennai",
            duration: "Apr 2024 - Present",
            role: "FullStack Lead",
            link: "https://awsccpchennai.vercel.app/",
            logo: "/assets/community/AWS_Cloud_Club_Logo.jpg",
            description: "As a FullStack Lead at AWS Cloud Club, Panimalar - Chennai, I am deeply immersed in exploring the integration of cloud technologies into FullStack projects. Our club is dedicated to delving into the myriad possibilities that cloud computing offers in enhancing FullStack development. Through bi-weekly meet-ups, we delve into cutting-edge practices and share insights on leveraging cloud solutions effectively. Additionally, we organize hackathons every two months, focusing specifically on cloud-based innovations, fostering creativity and collaborative problem-solving among members. Furthermore, our annual flagship event serves as a platform to showcase the culmination of our endeavors and engage with industry experts to further enrich our understanding of cloud technologies.",
        },
        {
            num: "02",
            name: "Coders Forum",
            duration: "Jul 2023 - Present",
            role: "Initiator & Strategist",
            link: "https://codersforum.netlify.app/",
            logo: "/assets/community/coders-forum-club-logo.png",
            description: "As an Initiator & Strategist at Coders Forum, a prominent technical community at Panimalar Engineering College (PEC), I play a pivotal role in orchestrating weekly meet-ups and monthly coding contests. In this dynamic environment, we extend our focus beyond mere competition; we foster a collaborative atmosphere where members actively share insights on diverse programming languages and topics. Our platform not only serves as a nexus for showcasing personal projects but also as a valuable resource for seeking assistance and mentorship, nurturing a culture of mutual support and continuous learning. Through strategic planning and community engagement, I aim to empower fellow coders to enhance their skills and embrace innovation, ultimately contributing to a thriving technical community.",
        },
        {
            num: "03",
            name: "IEEE - Panimalar",
            duration: "Jul 2022 - Jul 2023",
            role: "Student Coordinator",
            link: "",
            logo: "/assets/community/PEC-IEEE_Student_Coordinator.png",
            description: "During my second year pursuing a Bachelor of Engineering in Computer Science and Engineering at Panimalar Engineering College, I had the honor of serving as the Student Coordinator and Overall Boys IEEE Coordinator. In this role, I organized and managed a diverse range of events and contests, including technical workshops, guest lectures, and coding competitions. This experience provided me with invaluable opportunities to hone my event management and leadership skills while effectively overseeing teams and fostering collaboration among students. Through strategic planning and execution, I aimed to create engaging and informative experiences for participants, encouraging knowledge sharing and networking within the technical community. My leadership journey not only enhanced my organizational capabilities but also deepened my understanding of teamwork and communication. Overall, this role was enriching, allowing me to grow both professionally and personally, while making a lasting impact on the student body.",
        },
    ],
};

// certifications data
export const certifications = {
    title: "My Certifications",
    description: "ToDO content later",
    items: [
        {
            name: "GitHub Foundations",
            issueDate: "Sept 18, 2024",
            expiryDate: "Sept 18, 2027",
            issuedBy: "GitHub",
            certificate: "/assets/certifications/GitHubFoundations-hrishab59.pdf",
            verify: "https://www.credly.com/badges/3e644b53-4fc2-490f-b7ec-b91f5f9cf8a7/public_url",
        },
        {
            name: "Microsoft Certified: Azure AI Fundamentals (AI - 900)",
            issueDate: "Jun 21, 2024",
            expiryDate: "-",
            issuedBy: "Microsoft",
            credentialID: "A669F84C16017865",
            certificate: "/assets/certifications/AI-900.pdf",
            verify: "https://learn.microsoft.com/en-us/users/hrishab59/credentials/a669f84c16017865?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        },
        {
            name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
            issueDate: "Jul 25, 2024",
            expiryDate: "Jul 25, 2026",
            issuedBy: "Oracle",
            certificate: "/assets/certifications/Rishab-GenAi-Professional-eCertificate.pdf",
            verify: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FBEF58130FB126D1F4F8CFCD517BCB8CA938780A2DDD30E631F5352895BB11D1",
        },
    ],
};

// digital badges data
export const digitalBadgesAndCertificates = {
    title: "My Digital Badges & Certificates",
    description: "ToDO content later",
    items: [
        {
            src: "/assets/badgesAndCertificates/PostmanAPIFundamentalsStudentExpert.png",
            name: "Postman API Fundamentals Student Expert",
            issuedBy: "Postman",
            issueDate: "Sept 3, 2024",
            verify: "https://badgr.com/public/assertions/csCbWUpuSpyehLhqJWiyoQ",
        },
        {
            src: "/assets/badgesAndCertificates/Forage-Solutions-Architecture-Job-Stimulation.pdf",
            name: "Solutions Architecture Job Simulation",
            issuedBy: "Forage",
            issueDate: "Jun 24, 2024",
            credentialID: "6QRB4v4EY7voRM3BL",
            verify: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_wA3SNPHaYqD6zQxAv_1719195568676_completion_certificate.pdf",
        },
        {
            src: "/assets/badgesAndCertificates/AWS-Educate-Getting-Started-with-Cloud-Ops.png",
            name: "AWS Educate Getting Started with Cloud Ops",
            issuedBy: "AWS",
            issueDate: "May 23, 2024",
            verify: "https://www.credly.com/badges/58bbfc95-90ad-4da2-a25e-69a3630e1951/public_url",
        },
        {
            src: "/assets/badgesAndCertificates/AWS-Educate-Getting-Started-with-Compute.png",
            name: "AWS Educate Getting Started with Compute",
            issuedBy: "AWS",
            issueDate: "May 03, 2024",
            verify: "https://www.credly.com/badges/6050a0e1-9ab6-48c9-98c2-47fa509591ed/public_url",
        },
        {
            src: "/assets/badgesAndCertificates/AWS-Educate-Getting-Started-with-Databases.png",
            name: "AWS Educate Getting Started with Databases",
            issuedBy: "AWS",
            issueDate: "May 12, 2024",
            verify: "https://www.credly.com/badges/938a7faa-e886-4e18-940b-caf4287a2f2a/public_url",
        },
        {
            src: "/assets/badgesAndCertificates/AWS-Educate-Getting-Started-with-Networking.png",
            name: "AWS Educate Getting Started with Networking",
            issuedBy: "AWS",
            issueDate: "May 10, 2024",
            verify: "https://www.credly.com/badges/26c3c8d5-2380-42ff-8058-c75b7e793063/public_url",
        },
        {
            src: "/assets/badgesAndCertificates/AWS-Educate-Getting-Started-with-Security.png",
            name: "AWS Educate Getting Started with Security",
            issuedBy: "AWS",
            issueDate: "May 23, 2024",
            verify: "https://www.credly.com/badges/a64cd8d9-7d4c-4cc7-8f04-e05ea4ad88c5/public_url",
        },
        {
            src: "/assets/badgesAndCertificates/AWS-Educate-Getting-Started-with-Serverless.png",
            name: "AWS Educate Getting Started with Serverless",
            issuedBy: "AWS",
            issueDate: "May 24, 2024",
            verify: "https://www.credly.com/badges/34f45a40-ad9d-494d-92c2-b2573d68977e/public_url",
        },
        {
            src: "/assets/badgesAndCertificates/AWS-Cloud-Quest-Cloud-Practitioner.png",
            name: "AWS Cloud Quest: Cloud Practitioner",
            issuedBy: "AWS",
            issueDate: "Apr 12, 2024",
            verify: "https://www.credly.com/badges/26dff6df-3fbc-4a7b-8879-22fe317d8a62/public_url",
        },
        {
            src: "/assets/badgesAndCertificates/AWS-Educate-Introduction-to-Cloud-101.png",
            name: "AWS Educate Introduction to Cloud 101",
            issuedBy: "AWS",
            issueDate: "Apr 13, 2024",
            verify: "https://www.credly.com/badges/1f639488-1b7a-4640-803c-c5cf98d989f5/public_url",
        },
        {
            src: "/assets/badgesAndCertificates/AWS-Educate-Getting-Started-with-Storage.png",
            name: "AWS Educate Getting Started with Storage",
            issuedBy: "AWS",
            issueDate: "Apr 25, 2024",
            verify: "https://www.credly.com/badges/9d30e07c-dd2e-4415-bf5e-d723bcf3abbb/public_url",
        },
        {
            src: "/assets/badgesAndCertificates/AWS-Knowledge-Cloud-Essentials.png",
            name: "AWS Knowledge: Cloud Essentials",
            issuedBy: "AWS",
            issueDate: "Apr 21, 2024",
            verify: "https://www.credly.com/badges/0bbd7a33-af42-4a84-bde3-fd75641befbb/public_url",
        },
    ],
};
