import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import Image from 'next/image';
const Experience = () => {
    const data = [
        {
            title: "December 2024 - June 2025",
            content: {
                title: "Full-Stack Web Developer Intern",
                description: "Creciendo Philippines | Engineering Department",
                responsibilities: [
                    "Enhanced both the front-end and back-end of the job application module on the Creciendo Philippines website.",
                    "Integrated the OpenAI API into the job application process to improve the applicant experience.",
                    "Developed the Contract Signing and Job Requirements Submission modules for applicants.",
                    "Implemented a new user interface for the Performance Management, Goal Setting, and Task Management modules within the company’s internal Business Information Management System (BIMS).",
                    "Collaborated with the team to ensure the system aligned with the expected outcomes.",
                    "Conducted system testing to verify that both front-end design and back-end functionality met user needs."
                ],
                techstack: [
                    "React.js",
                    "Next.js",
                    "Tailwind CSS",
                    "DaisyUI",
                    "Node.js",
                    "MongoDB",
                    "Bitbucket",
                    "Jira",
                    "Git"
                ]
            }
        },
        {
            title: "2023 - 2024",
            content: {
                title: "FlutterFlow Developer",
                description: "National University Bulacan | Tri-Sakay (Capstone Project)",
                responsibilities: [
                    "Developed the Ride Booking, Fare Transparency, Rates and Feedback, Trip History, Reporting, and User Management modules.",
                    "Integrated the Google Maps API to display real-time tricycle locations for easier booking, navigation, route assistance, and trip tracking.",
                    "Utilized Firebase services for authentication, database storage, and cloud functions for back-end logic."
                ],
                techstack: ["FlutterFlow", "Firebase", "Google Maps API"]
            }
        },
        {
            title: "2022 - 2023",
            content: {
                title: "School Projects",
                description: "National University Bulacan",
                responsibilities: [
                    "Developed our first thesis project, the Ramky Parking Web Application, using HTML, CSS, JavaScript, PHP, and MySQL. The system enabled efficient tracking and monitoring of parking activities, including time in/out logging and report generation.",
                    "Created dynamic websites such as Seafood To Go and an E-Commerce platform."
                ],
                techstack: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "ReactJS",
                    "PHP",
                    "Firebase",
                    "MySQL"
                ]
            }
        }
    ];

    return (
        <div className="relative w-full overflow-clip mt-14">
            <Timeline data={data} />
        </div>
    );
}

export default Experience