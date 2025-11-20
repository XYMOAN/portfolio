const projects = [
    {
        title: "POS Nanay Floras",
        description: "Point of Sales Desktop Application",
        tech: [
            "Electron.js",
            "Electron Forge",
            "ReactJS",
            "Vite",
            "Node.js",
            "PouchDB",
            "CouchDB",
            "Offline-First Architecture"
        ],
        image: "/assets/nanayfloras.png",
        link: "", // For live demo
        github: "",
        details: {
            overview:
                "A freelance project developed for Nanay Floras, a local pasalubong store, to replace manual inventory and sales tracking which previously caused stock loss, slow operations, and inconsistencies.",
            features: [
                "Product Management (CRUD)",
                "Offline-First Inventory Tracking",
                "Automated Stock Adjustment",
                "Sales Processing & Sales History",
                "Real-time Inventory Updates",
                "Sales Reporting Module"
            ],
            technical:
                "Developed using Electron.js with Vite and ReactJS for the frontend shell and Node.js for the backend logic. Implemented PouchDB for local offline storage with automatic synchronization to CouchDB, enabling reliable operations even without internet connectivity. Designed automated workflows to eliminate manual stock counting and reduce inventory discrepancies.",
            content: [],
        },
    },
    {
        title: "Tri-Sakay",
        description: "Tricycle Ride-Hailing Android Application",
        tech: ["FlutterFlow", "Firebase", "Google Maps API"],
        image: "/assets/flutterflow_trisakay.png",
        link: "", // For live demo
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
            technical:
                "Built using FlutterFlow, Tri-Sakay leverages Firebase services for secure user authentication, real-time database management (storing user profiles, ride requests, and driver locations), cloud storage for file handling, and cloud functions for backend automation." +
                "The app integrates the Google Maps API to display real-time tricycle locations, provide navigation and route guidance, track ongoing trips for transparency and safety, set pickup and drop-off points, and display relevant ride details seamlessly within the interface.",
            content: ["/assets/trisakay_actual.mp4",],
        },
    },
    {
        title: "Ramky Parking Web Application",
        description: "Parking Management Web Application",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
        image: "/assets/ramkyparking.png",
        link: "",
        github: "",
        details: {
            overview: "Our first Thesis Project and created a Web Application wherein this system aims to boost the productivity, accuracy, speed, and convenience of our clients' business to reduce manual report preparation and paper transactions this system will make client’srequest possible..",
            features: [
                "Time Tracking",
                "Viewing of parking rules, and parking rates",
                "Requesting Access for vehicle maintenance",
                "Report for suspicious vehicle",
                "QR Code Generation for registered vehicles",
                "Generate Reports for easier auditing process",
            ],
            technical: null,
            content: [
                "/assets/ramkyscanner.png",
                "/assets/ramkyrates.png",
                "/assets/ramkyrequest.png",
                "/assets/ramkyreport.png",
                "/assets/ramkyupdate.png",
            ],
        },
    },
    {
        title: "Seafood To Go",
        description: "Dynamic Single Page Application Website",
        tech: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
        image: "/assets/seafoodtogo.png",
        link: "", // For live demo
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
    {
        title: "Front-End",
        stack: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "TailwindCSS"],
    },
    {
        title: "Back-End",
        stack: ["NodeJS", "PHP", "MongoDB", "Firebase", "MySQL", "PouchDB", "CouchDB"],
    },
    {
        title: "Tools & Technologies",
        stack: ["Git", "Bitbucket", "Jira", "GitHub", "Vercel", "FlutterFlow"]
    },

];


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
        title: "January 2024 - November 2024",
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
        title: "2021 - 2023",
        content: {
            title: "Full-Stack Web Developer",
            description: "National University Bulacan",
            responsibilities: [
                "Developed the team's first thesis project, the Ramky Parking Web Application, using HTML, CSS, JavaScript, PHP, and MySQL. The system enabled efficient tracking and monitoring of parking activities, including time-in/time-out logging and automated report generation.",
                "Built and explored dynamic websites, including Single Page Applications (SPAs) and E-Commerce platforms."
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


export { projects, skills, experiences };