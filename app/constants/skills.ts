import { SkillCategories } from "../types";

export const skillCategories : SkillCategories = [
    {
        label: "AWS",
        skills: [
            "EC2", "Lambda", "Elastic Beanstalk", "Step Functions", "S3", "EBS", "RDS",
            "ElastiCache", "Athena", "CloudFront", "ELB", "Route 53", "API Gateway",
            "IAM", "Secrets Manager", "Parameter Store", "CodePipeline", "CodeBuild", "CodeDeploy",
            "SNS", "SQS", "KMS"
        ]
    },
    {
        label: "Frontend",
        skills: [
            "React Native", "React JS", "Next JS", "Redux", "Zustand", "StoryBook",
            "HTML", "CSS", "SCSS", "Tailwind CSS"
        ]
    },
    {
        label: "Backend & Languages",
        skills: [
            "Python", "TypeScript", "JavaScript", "Java", "C", "C++",
            "Flask", "Django", "Node JS", "Puppeteer"
        ]
    },
    {
        label: "AI/ML",
        skills: ["PyTorch", "TensorFlow"]
    },
    {
        label: "Databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB"]
    }
];