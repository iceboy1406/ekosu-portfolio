interface SectionData {
    label: string
    title: string
    description?: string
}
interface BannerSectionData extends SectionData {
    downloadButtonCaption: string
    exploreMoreButtonCaption: string
}
interface AboutSectionData extends SectionData {}
interface SkillSectionData extends SectionData {}
interface ProjectSectionData extends SectionData {
    projects: Project[]
}
type ProjectCategory =
    | 'UI Design Implementation'
    | 'Dicoding Submission'
    | 'Competition Project'
    | 'Freelance Project'
interface ProjectPreview {
    url: string
    lowresUrl: string
    originalWidth: number
    originalHeight: number
}
interface Project {
    title: string
    description: string
    preview: ProjectPreview
    techs: string[]
    category?: ProjectCategory[]
    demoUrl: string
    repoUrl?: string
}
interface ContactSectionData extends SectionData {
    email: string
    facebook: string
    github: string
    linkedin: string
    discord: string
}
interface ContentData {
    bannerSection: BannerSectionData
    aboutSection: AboutSectionData
    skillSection: SkillSectionData
    projectSection: ProjectSectionData
    contactSection: ContactSectionData
}
const contentData: ContentData = {
    bannerSection: {
        label: 'Hi Everyone, I am',
        title: 'Eko Susilo',
        description:
            'A passionate Frontend Developer. I love programming and build clean and modern website.',
        downloadButtonCaption: 'Download CV',
        exploreMoreButtonCaption: 'Explore More',
    },
    aboutSection: {
        label: 'About Me',
        title: 'Who am I?',
        description:
            'My name is Eko Susilo. I am 18 years old. I am a fresh graduate from SMK N 1 Purwokerto majoring in Software Engineering. I love programming since I first learn it, especially in Frontend Dev. I like to create a clean, modern and of course fast performance website. Honestly, I am lacking of experience but I will learn and work harder to improve my skill and try to gain more experience over time.',
    },
    skillSection: {
        label: 'Skills',
        title: 'What I am capable of?',
    },
    projectSection: {
        label: 'Projects',
        title: 'What I have made?',
        projects: [
            {
                title: 'Collosal',
                description:
                    'A company profile website for a Software House company.',
                preview: {
                    url: '/images/projects/collosal-preview.webp',
                    lowresUrl: '/images/projects/collosal-preview-lowres.webp',
                    originalWidth: 1903,
                    originalHeight: 1080,
                },
                techs: ['Next JS', 'Tailwind CSS'],
                category: ['UI Design Implementation'],
                demoUrl: 'https://collosal.vercel.app/',
                repoUrl: 'https://github.com/iceboy1406/collosal',
            },
            {
                title: 'Image Finder',
                description: 'Website for search image source by Pixabay API.',
                preview: {
                    url: '/images/projects/image-finder-preview.webp',
                    lowresUrl:
                        '/images/projects/image-finder-preview-lowres.webp',
                    originalWidth: 1873,
                    originalHeight: 872,
                },
                techs: ['Next JS', 'Tailwind CSS'],
                demoUrl: 'https://image-finder-mocha.netlify.app/',
                repoUrl: 'https://github.com/iceboy1406/image-finder',
            },
            {
                title: 'Segari Clone',
                description:
                    'A clone of segari id website. Its a online shop for vegetable product. And its a freelance project.',
                preview: {
                    url: '/images/projects/segari-clone-preview.webp',
                    lowresUrl:
                        '/images/projects/segari-clone-preview-lowres.webp',
                    originalWidth: 970,
                    originalHeight: 970,
                },
                techs: ['HTML', 'SCSS', 'Vanilla JS'],
                category: ['Freelance Project'],
                demoUrl: 'https://segari-clone.vercel.app/',
            },
            {
                title: 'Dicoding Notes App',
                description:
                    'Simple Notes App. Its also a Dicoding Submission Project for "Learn How To Create Web Application with React" class.',
                preview: {
                    url: '/images/projects/dicoding-notes-app-preview.webp',
                    lowresUrl:
                        '/images/projects/dicoding-notes-app-preview-lowres.webp',
                    originalWidth: 1175,
                    originalHeight: 660,
                },
                techs: ['React JS', 'Tailwind CSS'],
                category: ['Dicoding Submission'],
                demoUrl: 'https://dicoding-react-note-app.vercel.app/',
                repoUrl:
                    'https://github.com/iceboy1406/dicoding-react-note-app',
            },
            {
                title: 'Zeitplan',
                description:
                    'A landing page of a Schedule App. Its also a Dicoding Submission Project for "Learn Basic of Web Programming" class.',
                preview: {
                    url: '/images/projects/zeitplan-preview.webp',
                    lowresUrl: '/images/projects/zeitplan-preview-lowres.webp',
                    originalWidth: 1224,
                    originalHeight: 764,
                },
                techs: ['HTML', 'SCSS', 'Typescript'],
                category: ['Dicoding Submission', 'UI Design Implementation'],
                demoUrl: 'https://zeitplans.vercel.app/',
                repoUrl: 'https://github.com/iceboy1406/zeitplan',
            },

            {
                title: 'CV CSM',
                description:
                    'A company profile for a company engaged in the manufacture of gloves. And its a freelance project.',
                preview: {
                    url: '/images/projects/cvcsm-preview.webp',
                    lowresUrl: '/images/projects/cvcsm-preview-lowres.webp',
                    originalWidth: 1905,
                    originalHeight: 1080,
                },
                techs: ['HTML', 'SCSS', 'Vanilla JS'],
                category: ['Freelance Project'],
                demoUrl: 'https://cvcsm.vercel.app/',
            },
            {
                title: 'Bookshelf',
                description:
                    'A bookshelf app that can show, search, add, delete, update book and move book to other shelf. Its also a Dicoding Submission for "Learn to Make Frontend-Web for Beginner" class.',
                preview: {
                    url: '/images/projects/bookshelf-preview.webp',
                    lowresUrl: '/images/projects/bookshelf-preview-lowres.webp',
                    originalWidth: 1276,
                    originalHeight: 849,
                },
                techs: ['HTML', 'SCSS', 'Typescript', 'Local Storage'],
                category: ['Dicoding Submission'],
                demoUrl: 'https://bookshelfs.vercel.app/',
                repoUrl: 'https://github.com/iceboy1406/bookshelf',
            },
            {
                title: 'GoHosting',
                description:
                    'A landing page of hosting service company. Its a project for IITC (Intermedia Information Technology Competition) 2020.',
                preview: {
                    url: '/images/projects/gohosting-preview.webp',
                    lowresUrl: '/images/projects/gohosting-preview-lowres.webp',
                    originalWidth: 1364,
                    originalHeight: 758,
                },
                techs: ['HTML', 'CSS', 'Vanilla JS'],
                category: ['Competition Project'],
                demoUrl: 'https://gohosting.vercel.app/',
                repoUrl: 'https://github.com/iceboy1406/gohosting',
            },
            {
                title: 'Codemy',
                description:
                    'A landing page of a Programming Online Course. Its a project for IITC (Intermedia Information Technology Competition) 2021.',
                preview: {
                    url: '/images/projects/codemy-preview.webp',
                    lowresUrl: '/images/projects/codemy-preview-lowres.webp',
                    originalWidth: 1920,
                    originalHeight: 1080,
                },
                techs: ['HTML', 'CSS', 'Vanilla JS'],
                category: ['Competition Project'],
                demoUrl: 'https://codemy.vercel.app/',
                repoUrl: 'https://github.com/iceboy1406/codemy',
            },
        ],
    },
    contactSection: {
        label: 'Contacts',
        title: 'Feel free to reach out',
        email: 'ekosusilo140604@gmail.com',
        discord: 'https://discordapp.com/users/785292607063982151',
        facebook: 'https://www.facebook.com/profile.php?id=100030701887505',
        github: 'https://github.com/iceboy1406',
        linkedin: 'https://www.linkedin.com/in/eko-susilo-2262b723b/',
    },
}
export default contentData
export type {
    AboutSectionData,
    BannerSectionData,
    ContentData,
    Project,
    ProjectCategory,
    ProjectPreview,
    ProjectSectionData,
    SectionData,
    SkillSectionData,
}
