import { Experience } from "../types";

export const experience: Experience[] = [
    {
        company: "Fuentes Tech",
        role: "Software Developer",
        duration: "May 2025 - October 2025",
        description: [
            "Contributed to the development of an EdTech application using React Native (Expo), Flask, and MongoDB, building modular, reusable UI components.", 
            "Developed serverless APIs using cloud services (e.g., AWS Lambda and AWS API Gateway) to support scalable application functionality.",
            "Automated deployment and testing through CI/CD pipelines."
        ]
    },
    {
        company: "Banksey",
        role: "Senior Software Engineer",
        duration: "Jun 2023 - May 2024",
        description: [
            "Architected core features of an AI-driven finance platform, unifying financial management into a single app.",
            "Independently built an LLM-powered financial assistant, adding agentic capabilities to the platform.",
            "Integrated Plaid to connect and aggregate real-time financial data across users' bank accounts and transactions.",
            "Designed and scaled backend APIs powering budgeting, goal-tracking, and forecasting functionality."
        ]
    },
    {
        company: "Taqwa Invest",
        role: "Full Stack Engineer",
        duration: "Apr 2022 - Apr 2023",
        description: [
            "Shipped core features for a robo-advisory app across iOS/Android using React Native, Node.js, and MongoDB.",
            "Integrated Alpaca's APIs to enable live brokerage trading and in-app account management.",
            "Built an AML screener independently, replacing manual watchlist checks in employee onboarding."
        ]
    },
];
