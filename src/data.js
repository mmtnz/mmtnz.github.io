import WorkExperience from "./components/sections/WorkExperience";

export const personalInfo = {
    name: "Mario Martinez",
    role: "Software Engineer",
    bio: "Software engineer with 3 years of experience in software design and development in the telecommunications sector. Acquired practical experience with AWS cloud services through personal projects. Experienced in working within agile methodologies, including Scrum and Kanban, contributing to sprints, team collaboration, and iterative development processes. A gap year in Australia allowed me to refine my English proficiency, build adaptability, and enhance problem-solving skills in varied and challenging contexts.",
    email: "mariomlafuente@gmail.com",
    location: "United Kingdom",
    linkedin: "https://linkedin.com/in/mario-martinez-lafuente",
    github: "https://github.com/shivani",
    certifications: [
        {
            title: "AWS Certified Solutions Architect - Associate",
            issuer: "AWS",
            expeditionDate: "Dec 2024",
            link: "https://www.credly.com/badges/f336a86e-b38b-4d4f-816f-4a76c0457359/linked_in?t=so4ex3",
            badge: "/badges/aws-solutions-architect.png"
        },
        {
            title: "Scrum Foundation Professional Certification (SFPC)",
            issuer: "Certiprof",
            expeditionDate: "Jan 2025",
            link: "https://my-certificates.com/certificates/6798ad4c169b8a271504a9fa",
            badge: "/badges/scrum.png"
        },
        {
            title: "Fundamentals of Accelerated Computing with CUDA Python",
            issuer: "NVIDIA DLI",
            expeditionDate: "Dec 2021",
            link: "https://learn.nvidia.com/certificates?id=6340fa601eb146b9820c6992b1c84016",
            badge: "/badges/nvidia.png"
        },
        {
            title: "Master in frameworks: learning React, Angular and Vue",
            issuer: "Udemy",
            expeditionDate: "Mar 2023",
            link: "https://www.udemy.com/certificate/UC-5ae085de-24b9-4447-aad0-27aeb52f6952/",
            badge: "/badges/udemy.png"
        },
    ],
    workExperience: [
        {
            title: "Software Engineer",
            company: "Aragon Photonics Labs",
            location: "Zaragoza, Spain",
            dates: ["Oct 2021", "May 2023"],
            summary: "- Built internal software for efficient sensor data management, including **data processing pipelines** for real-time alarm generation and notifications, following **Scrum** practices to ensure on-time delivery and stakeholder alignment.\n- Designed and implemented **REST APIs** to seamlessly integrate solutions into client workflows.\n- Optimized the computational cost of processing software by 50%, enabling implementation on lower-resource systems.\n- Accelerated data processing algorithms by 10x through GPU parallelization.\n- Improved system reliability and scalability by deploying **containerized microservices** and optimizing inter-service communication. All within a **Kanban** framework for transparent progress tracking.\n\n- Automated development pipelines using **GitLab CI/CD**, reducing deployment time and ensuring code quality.",
            skillsList: [
                "Python",
                "Rest API",
                "FastAPI",
                "React.js",
                "Node.js",
                "MongoDB",
                "MySQL",
                "Scrum",
                "Kanban"
            ]
        },
        {
            title: "R&D Engineer",
            company: "University of Zaragoza",
            location: "Zaragoza, Spain",
            dates: ["Oct 2021", "May 2023"],
            summary: "Designed and developed sensor data processing pipelines, automating analysis workflows and significantly reducing manual effort.\n- Trained CNN models for event detection in sensor data, improving accuracy and enabling automation.",
            skillsList: [
                "Python",
                "TensorFlow"
            ]
        }

    ]
  };
  