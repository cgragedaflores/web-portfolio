interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl?: string;
}

interface AboutInfo {
    name: string;
    bio: string;
    skills: string[];
}

interface SocialMediaLinks {
    github?: string;
    linkedin?: string;
    twitter?: string;
}

export type { Project, AboutInfo, SocialMediaLinks };