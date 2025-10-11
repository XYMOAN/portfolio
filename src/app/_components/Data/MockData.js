const projects = [
    {
        title: "Tri-Sakay",
        description: "Tricycle Ride-Hailing Android Application",
        tech: ["FlutterFlow", "Firebase", "Google Maps API"],
        image: "/assets/flutterflow_trisakay.png",
        link: "",
        github: "",
        details: {
            overview: "TriSakay: A Tricycle Ride-Hailing Android Application for Safe and Transparent Urban Transportation in Baliwag City, Bulacan",
            features: [
                "Ride Booking Module",
                "Fare Transparency Module",
                "Rates and Feedback Module",
                "Trip History Module",
                "Reporting Module",
                "User Management Module",
            ],
            technical: "This project is built in FlutterFlow and it uses firebase services for secure user authentication, real-time databases for storing and synchronizing data (user profiles, ride requests, driver locations), cloud storage for files, crash reporting and performance monitoring tools, remote configuration capabilities and cloud functions for backend logic." + " "
                + "Google Maps widget is used for tricycle ride-hailing mobile application by enabling key features such as displaying real-time tricycle locations for easy booking, providing navigation and routing assistance for efficient rides, tracking ongoing trips for transparency and safety, marking pickup/drop-off points clearly, displaying relevant ride information",
            content: ["/assets/trisakay_actual.mp4",],
        },
    },
    {
        title: "Seafood To Go",
        description: "Dynamic Single Page Application Website",
        tech: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
        image: "/assets/seafoodtogo.png",
        link: "",
        github: "https://github.com/XYMOAN/seafoodtogo",
        details: {
            overview: "Seafood To Go is my project for developing a dynamic web application.",
            features: [
                "Admin Login for CRUD operations of products of Seafood To Go",
                "Contact details for order inquiries",
            ],
            technical: null,
            content: [
                "/assets/seafoodtogo.png",
                "/assets/seafoodtogo_products.png",
            ],
        },
    },
];

const skills = [
    "HTML", "CSS", "JavaScript", "ReactJS", "NextJS",
    "NodeJS", "TailwindCSS", "MongoDB", "Firebase", "MySQL",
];

const technologies = [
    "Git", "Bitbucket", "Jira", "GitHub", "Vercel"
]


const experiences = [
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


export { projects, skills, technologies, experiences };