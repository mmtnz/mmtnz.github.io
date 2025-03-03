import WorkExperience from "./components/sections/WorkExperience";

export const personalInfo = {
    name: "Mario Martinez",
    description: "Software engineer, passionate about cloud architecture, distributed systems, and building scalable solutions.",
    year: "2025",
    role: "Software Engineer",
    bio: "Software engineer with 3 years of experience in software design and development in the telecommunications sector.\n\nAcquired practical experience with AWS cloud services through personal projects. Experienced in working within agile methodologies, including Scrum and Kanban, contributing to sprints, team collaboration, and iterative development processes.\n\nA gap year in Australia allowed me to refine my English proficiency, build adaptability, and enhance problem-solving skills in varied and challenging contexts.",
    skillsList: [
        {
            title: "AWS",
            badge: "/badges/aws-white.png"
        },
        {
            title: "React",
            badge: "/badges/react.png"
        },
        {
            title: "Python",
            badge: "/badges/python.png"
        },
        {
            title: "FastAPI",
            badge: "/badges/fastapi.png"
        },
        {
            title: "Docker",
            badge: "/badges/docker.png"
        },
        {
            title: "Mongo DB",
            badge: "/badges/mongo.png"
        },
        {
            title: "MySQL",
            badge: "/badges/mysql.png"
        },
        {
            title: "Gitlab CI/CD",
            badge: "/badges/gitlab.png"
        },
        {
            title: "Node.js",
            badge: "/badges/node.png"
        },
        {
            title: "RabbitMQ",
            badge: "/badges/rabbitmq.png"
        },
        {
            title: "Kafka",
            badge: "/badges/kafka.png"
        },
        {
            title: "Java",
            badge: "/badges/java.png"
        },
        {
            title: "Scrum",
            badge: "/badges/scrum-logo.png"
        },
        
    ],
    email: "mariomlafuente@gmail.com",
    location: "United Kingdom",
    linkedin: "https://linkedin.com/in/mario-martinez-lafuente",
    github: "https://github.com/mmtnz",
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
            summary: "- Built internal software for efficient sensor data management, including **data processing pipelines** for real-time alarm generation and notifications, following **Scrum** practices to ensure on-time delivery and stakeholder alignment.\n- Designed and implemented **REST APIs** to seamlessly integrate solutions into client workflows.\n- Optimized the computational cost of processing software by **50%**, enabling implementation on lower-resource systems.\n- Accelerated data processing algorithms by **10x** through GPU parallelization.\n- Improved system reliability and scalability by deploying **containerized microservices** and optimizing inter-service communication. All within a **Kanban** framework for transparent progress tracking.\n\n- Automated development pipelines using **GitLab CI/CD**, reducing deployment time and ensuring code quality.",
            skillsList: [
                "Python",
                "Rest API",
                "FastAPI",
                "React.js",
                "Node.js",
                "MongoDB",
                "MySQL",
                "Data structures",
                "Algorithms",
                "Scrum",
                "Kanban",

            ]
        },
        {
            title: "R&D Engineer",
            company: "University of Zaragoza",
            location: "Zaragoza, Spain",
            dates: ["Nov 2019", "Oct 2021"],
            summary: "- Designed and developed sensor data processing pipelines, automating analysis workflows and significantly reducing manual effort.\n\n- Trained CNN models for event detection in sensor data, improving accuracy and enabling automation.",
            skillsList: [
                "Python",
                "TensorFlow",
                "C#"
            ]
        }

    ],
    projectsList: [
        {
            title: "tidymystorage.com",
            description: "Full-stack web application to simplify storage inventory management. You can have all your items organised and localised with a simple search in the app.",
            link: "https://tidymystorage.com",
            linkRepository: "https://github.com/mmtnz/inventory-system-frontend",
            techStack: ["AWS", "API Gateway", "Lambda", "DynamoDB", "Cognito", "S3", "CloudFormation", "Node.js", "React.js"],
            skillsList: [],
            imagesList: "/projects/tidymystorage.PNG"

        },
        {
            title: "Dummy Weather API",
            description: "This is a simple **REST API** that fetches weather data from a third-party weather API and uses **Redis for in-memory caching**.\n\nThe purpose of this project is to practice integrating Redis for caching responses to reduce redundant external API calls and improve performance.\n\nIt includes an UI where you can select the location, by name, providing the coordinates or clicking directly on an **interactive OpenStreetMap**.",
            link: "https://mmtnz.github.io/weather-app-frontend/",
            linkRepository: "https://github.com/mmtnz/weather-app-api-redis",
            techStack: ["Node.js", "Express.js", "Redis", "React.js", "OpenStreetMap", "Leaflet"],
            skillsList: [],
            imagesList: "/projects/weather.PNG"
        },
        {
            title: "Object Detection Snake Game",
            description: "This repository has been created with the aim of understanding how the **object detection API** works.\n\nWith the object detecion API and a pretrained model it is possible to capture hand's position which are used to change snake's direction. The snake game is defined as a class with different methods to move the snake.",
            // link: "https://mmtnz.github.io/weather-app-frontend/",
            linkRepository: "https://github.com/mmtnz/object-detection-snake-game",
            techStack: ["Python", "TensorFlow", "Object Detection API", "MySQL", "OOP"],
            skillsList: [],
            imagesList: "/projects/snake.gif"
        }
    ],
    contactText: "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.",
    socialLogos: {
        github: { logo: "/social/github.svg", link: "https://github.com/mmtnz" },
        linkedin: {logo: "/social/linkedin.png", link: "https://www.linkedin.com/in/mario-martinez-lafuente"}
    }
  };
  