import { Project } from "../types";

export const projects: Project[] = [
    {
        name: "Spiriit of Math - Drills App",
        description: "A cross-platform math learning app with role-based access, timed drills, assignments, contests, and Stripe-powered subscriptions.",
        appType : "Cross Platform (iOS/Android/Web)",
        technologies: ["React Native (Expo)", "Flask API", "Stripe"],
        link: "https://geniusdrills.com"
    },
    {
        name: "Banksey - AI-driven Finance Manager",
        description: "An AI-powered financial management app for personalized budgeting and investment insights.",
        appType : "Web App",
        technologies: ["React JS", "Flask API", "Plaid", "LLM Integration"],
        link: "https://app.banksey.com/"
    },
    {
        name: "Serverless Payment Processing System",
        description: "A serverless payment processing system built with AWS Lambda, Amazon SQS, Amazon DynamoDB, and AWS SAM.",
        appType : "Serverless App",
        technologies: ["Python", "AWS", "SAM"],
        link: "https://github.com/MariamBatool-git/aws-serverless-payment-processing"
    },
    {
        name: "Taqwa - Sharia'ah compliant Investment",
        description: "A Sharia'ah compliant investment platform for personalized financial planning.",
        appType : "iOS/Android App",
        technologies: ["React Native", "Node.js", "Alpaca's Broker API"],
        link: ""
    },
    {
        name: "AML Watchlist Aggregator",
        description: "A platform for aggregating and monitoring AML watchlists.",
        appType : "ETL tool",
        technologies: ["Node.js", "Puppeteer", "SQL Database"],
        link: ""
    },
    {
        name: "Quran & Hadith App",
        description: "A comprehensive app for accessing Quranic verses and Hadith collections.",
        appType : "Web App",
        technologies: ["React JS", "PHP", "SQL Database"],
        link: "https://quran.beginsols.com/"
    },


]