// Portfolio Data (Updated and Backend-Focused)
const portfolioData = {
    settings: {
        name: "Ibrahim Shammaz",
        title: "Java Backend Developer",
        summary:
            "Java backend developer with 2+ years of experience designing and building scalable REST APIs and microservices using Spring Boot and Java 17.\n" +
            "Focused on clean architecture, performance optimization, and effective debugging in production environments.\n" +
            "Passionate about backend development, API integration, and delivering maintainable solutions through Agile practices.",
        profileImage: "" // add your image link later if needed
    },

    navigation: {
        enabled: true,
        items: [
            { name: "Home", url: "#home" },
            { name: "Projects", url: "#projects" },
            { name: "Experience", url: "#experience" },
            { name: "Education", url: "#education" },
            { name: "Contact", url: "#contact" }
        ]
    },

    sections: {
        hero: {
            enabled: true,
            ctaButtons: [
                { text: "Download CV", url: "#" },
                { text: "View Projects", url: "#projects" }
            ]
        },

        about: {
            enabled: true,
            skills: {
                enabled: true,
                title: "Skills",
                items: [
                    "Java 17",
                    "Spring Boot",
                    "REST APIs",
                    "Microservices",
                    "PostgreSQL",
                    "MySQL",
                    "Swagger / OpenAPI",
                    "Docker (learning)",
                    "Git",
                    "Agile / Scrum",
                    "L3 Production Debugging"
                ]
            }
        },

        projects: {
            enabled: true,
            title: "Projects",
            items: [
                {
                    title: "Payment Gateway Integration Demo",
                    description:
                        "Developed a Spring Boot microservice that integrates with Stripe Sandbox API to handle payment creation and status tracking.\n" +
                        "Implemented proper error handling, logging, and response management for real-world API workflows.\n" +
                        "Documented all endpoints using Swagger (OpenAPI).",
                    tags: ["Spring Boot", "Stripe API", "REST API", "Swagger"],
                    previewUrl: "#",
                    repoUrl: "https://github.com/ibrahimshammaz/payment-gateway-demo"
                },
                {
                    title: "Notification Microservice",
                    description:
                        "Built a standalone microservice for sending email and SMS notifications via external APIs (Mailgun and Twilio).\n" +
                        "Implemented retry logic, configurable templates, and structured API responses.\n" +
                        "Designed with modular architecture for easy integration with larger systems.",
                    tags: ["Spring Boot", "Mailgun", "Twilio", "Microservice"],
                    previewUrl: "#",
                    repoUrl: "https://github.com/ibrahimshammaz/notification-service"
                },
                {
                    title: "Ticket Management System",
                    description:
                        "Collaborative team project for internal issue tracking.\n" +
                        "Implemented CRUD functionality, status filtering, and user authentication using Firebase.\n" +
                        "Enabled role-based access control and comment threads for task updates.",
                    tags: ["Spring Boot", "Firebase Auth", "PostgreSQL", "REST API"],
                    previewUrl: "#",
                    repoUrl: "https://github.com/ibrahimshammaz/ticket-system"
                }
            ]
        },

        experience: {
            enabled: true,
            title: "Experience",
            items: [
                {
                    position: "Software Developer",
                    company: "OmneNEST Technologies",
                    period: "2022 - Present",
                    description:
                        "• Designed and maintained backend systems using Java 17 and Spring Boot.\n" +
                        "• Built RESTful APIs, integrated third-party services, and optimized PostgreSQL/MySQL queries.\n" +
                        "• Implemented JWT authentication, L3 production debugging, and hot-fix releases ensuring 99% uptime.\n" +
                        "• Collaborated with cross-functional teams following Agile methodologies."
                }
            ]
        },

        education: {
            enabled: true,
            title: "Education",
            items: [
                {
                    degree: "Bachelor of Computer Science",
                    institution: "University of Technology",
                    period: "2016 - 2020"
                }
            ]
        },

        contact: {
            enabled: true,
            title: "Contact",
            email: "ibrahimshammaz39@gmail.com",
            phone: "+91 9633119765",
            location: "Kerala, India • Open to relocate to UAE"
        },

        social: {
            enabled: true,
            items: [
                { platform: "github", url: "https://github.com/ibrahimshammaz" },
                { platform: "linkedin", url: "https://www.linkedin.com/in/ibrahim-shammaz" }
            ]
        }
    },

    footer: {
        enabled: true,
        copyright: "© 2025 Ibrahim Shammaz. All rights reserved."
    }
};
