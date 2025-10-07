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
                responsibilities:
                    [
                        "Improved the front-end and back-end of the job application module of Creciendo Philippines website.",
                        "Integrated OpenAI API for job application process for better applicant experience.",
                        "Development of Contract Signing of the applicant and Applicant Submission for Job Requirements.",
                        "Implemented the new module UI in the company's internal Business Information Management System (BIMS) for the Performance Management for Goal Setting and Task Management modules.",
                        "Collaborating with the Team to ensure that the system is aligned with the expected outcome.",
                        "Testing of the system for both front-end designs and back-end functionalities meet the needs."
                    ],
                techstack: ["React.js", "Next.js", "Tailwind CSS", "DaisyUI", "Node.js", "MongoDB", "Bitbucket", "JIRA", "Git"]
            },
        },
        {
            title: "2023 - 2024",
            content: {
                title: "FlutterFlow Developer",
                description: "National University Bulacan | Tri-Sakay (Capstone Project)",
                responsibilities:
                    [
                        "Development of the Ride Booking, Fare Transparency, Rates and Feedback, Trip History, Reporting, and User Management Modules.",
                        "Integrated Goole Maps API for displaying real-time tricycle locations for easy booking, providing navigation and routing assistance for efficient rides, tracking ongoing trips.",
                        "Utillized the Firebase services for authentication, database storage, and cloud function for back-end logic.",
                    ],
                techstack: ["FlutterFlow", "Firebase", "Google Maps API"]
            },
        },

    ];
    return (
        <div className="relative w-full overflow-clip mt-14">
            <Timeline data={data} />
        </div>
    );
}

export default Experience