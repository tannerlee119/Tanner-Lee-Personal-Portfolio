export interface Project {
    slug: string
    title: string
    description: string
    longDescription: string
    image: string
    technologies: string[]
    githubUrl: string | null
    liveUrl: string | null
    featured: boolean
}

export const projects: Project[] = [
    {
        slug: 'personal-travel-diary',
        title: 'Personal Travel Diary',
        description: 'A collaborative travel planning and journaling web application for couples and groups to plan, document, and relive trips together.',
        longDescription: 'Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4 using Supabase for auth and database. Features an interactive world map with Mapbox for trip visualization, kanban-style itinerary planning with drag-and-drop scheduling, comprehensive trip documentation including restaurant reviews, activity logs, and photo galleries with HEIC conversion, multi-user collaboration with per-user color coding, and AWS S3 integration for photo storage.',
        image: '/projects/dubu-diaries.png',
        technologies: ['Next.js', 'TypeScript', 'Supabase', 'Mapbox', 'AWS S3'],
        githubUrl: null,
        liveUrl: 'https://dubu-diaries.vercel.app',
        featured: true
    },
    {
        slug: 'eat-with-lee',
        title: 'Eat with Lee',
        description: 'A modern food blogging website for restaurant reviews, ratings, and location-based culinary discovery.',
        longDescription: 'Built with Next.js 15, TypeScript, and Tailwind CSS featuring a clean, news-inspired design. Includes detailed restaurant reviews with ratings and photos, interactive location-based restaurant discovery, tagging system for cuisines, admin dashboard for review management, and social media integration.',
        image: '/projects/eatwithlee.png',
        technologies: ['Next.js', 'TypeScript', 'Tailwind'],
        githubUrl: 'https://github.com/tannerlee119/eatwithlee',
        liveUrl: 'https://eatwithlee.com',
        featured: true
    },
    {
        slug: 'ranked-log',
        title: 'Ranked Log',
        description: 'A full-stack web application for tracking and analyzing League of Legends performance with comprehensive statistics.',
        longDescription: 'Built with Next.js 15, TypeScript, and SQLite for League of Legends performance tracking. Features game logging with champion picks and performance stats, advanced filtering by role and game type, calculated average metrics, and complete game history visualization.',
        image: '/projects/ranked-log.png',
        technologies: ['Next.js', 'TypeScript', 'SQLite'],
        githubUrl: 'https://github.com/tannerlee119/Ranked-Log',
        liveUrl: 'https://ranked-log.vercel.app/stats',
        featured: true
    },
    {
        slug: 'gabooja-creator-discovery',
        title: 'Gabooja Creator Discovery',
        description: 'A Next.js application for discovering and analyzing social media creators across Instagram and TikTok with AI-powered insights.',
        longDescription: 'Built with Next.js 15, TypeScript, and Supabase for comprehensive creator analysis. Features AI-powered insights using OpenAI GPT, web scraping with Playwright, advanced filtering system, and real-time analytics.',
        image: '/projects/gabooja.png',
        technologies: ['Next.js', 'Supabase', 'OpenAI'],
        githubUrl: 'https://github.com/tannerlee119/gaboojacreatordiscovery',
        liveUrl: 'https://gaboojacreatordiscovery.vercel.app',
        featured: true
    },
    {
        slug: 'biterank',
        title: 'BiteRank',
        description: 'A full-stack restaurant review web app with interactive map features and Google Places integration.',
        longDescription: 'Built with React, TypeScript, Node.js, and PostgreSQL using Drizzle ORM. Features Google Places API integration for restaurant discovery, interactive map visualization, and comprehensive bookmarking system.',
        image: '/projects/biterank.png',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        githubUrl: 'https://github.com/tannerlee119/BiteRank',
        liveUrl: null,
        featured: true
    },
    {
        slug: 'the-move',
        title: 'The Move',
        description: 'A React Native app designed to help groups create, track, and manage group activities with real-time sync.',
        longDescription: 'Engineered with React Native and Firebase integration for secure authentication. Enables users to create, update, and access events with real-time data synchronization.',
        image: '/projects/the-move.png',
        technologies: ['React Native', 'Firebase'],
        githubUrl: 'https://github.com/tannerlee119/The_Move',
        liveUrl: null,
        featured: true
    },
    {
        slug: 'sorting-visualizer',
        title: 'Sorting Visualizer',
        description: 'An interactive web application that visualizes 15 different sorting algorithms in real-time.',
        longDescription: 'Developed with React and JavaScript. Features asynchronous functions to animate sorting processes, helping users understand algorithmic steps and time complexity.',
        image: '/projects/sorting-visualizer.png',
        technologies: ['React', 'JavaScript'],
        githubUrl: 'https://github.com/tannerlee119/sorting-visualizer',
        liveUrl: 'https://sorting-visualizer-seven-kappa.vercel.app/',
        featured: false
    }
]

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug)
}
