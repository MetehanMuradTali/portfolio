export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Giresuni - Poetry and Blog Platform',
        desc: 'Giresuni is a personal website dedicated to showcasing the creative works of an author writing under the pseudonym Giresuni. The site features a dynamic collection of blogs and poems, all written and published by the author. Through insightful blog posts, Giresuni explores topics ranging from local news and cultural reflections to personal experiences.',
        subdesc:
            'Built as a unique web platform with Next.js 14, Tailwind CSS, and MongoDB, Giresuni is designed for fast performance and scalability.',
        href: 'https://www.giresuni.com',
        texture: 'textures/project/project1.mp4',
        logo: 'assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: 'assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: 'assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'MongoDB',
                path: 'assets/mongoDB.png',
            },
            {
                id: 4,
                name: 'Next.js',
                path: 'assets/nextJs.jpg',
            },
        ],
    },
    {
        title: 'TALI - Real-Time Mobile Chat Applicaton',
        desc: 'TALI is a real-time chat application designed to connect users from around the globe. Built for seamless communication, TALI offers instant messaging with speed and reliability, ensuring that conversations flow smoothly no matter where users are located. With a focus on user-friendly design and global accessibility, TALI provides a secure and efficient platform for people to stay connected, whether for personal or professional use.',
        subdesc:
            'With TALI, users can experience the future of communication, where conversations happen in real time across the globe without any delay. Builted with Flutter, Bloc and Firebase. ( In my private reposirory but can provide with codes if requested )',
        href: 'https://github.com/MetehanMuradTali',
        texture: 'textures/project/project2.mp4',
        logo: 'assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: 'assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: 'assets/flutterLogo.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/bloc.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: 'assets/firebaseLogo.png',
            },

        ],
    },
    {
        title: 'AI Coach - Smart Study-Plan and Session Scheduler',
        desc: 'AI Mentor is a Firebase-backed Flutter app that generates personalized study schedules with Google Gemini and includes an AI-powered learning area to explain topics and answer questions.',
        subdesc:
            'Features email/password auth, Cloud Firestore storage, Windows/Web/Android support, and an integrated “Learn with AI” chat where you can explore session topics and get guided explanations.',
        href: 'https://github.com/MetehanMuradTali/Ai-Coach',
        texture: 'textures/project/project3.mp4',
        logo: 'assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#bca1b8ff',
            border: '0.2px solid #ddb3d6ff',
            boxShadow: '0px 0px 60px 0px #b570acff',
        },
        spotlight: 'assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: 'assets/flutterLogo.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/bloc.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: 'assets/firebaseLogo.png',
            },

        ],
    },
    {
    title: "Ramazan Mermer Sanayi - Corporate Website",
    desc: "A corporate website for Ramazan Mermer Sanayi, built with React, Next.js, MongoDB, Tailwind CSS, and UploadThing for seamless image uploads and management.",
    subdesc: "Features a fully responsive design, product showcases, contact form, and modern UI/UX practices. Demonstrates integration of backend database and file upload handling in a professional web application.",
    href: "https://ramazanmermersanayi.vercel.app"
    ,
    texture: 'textures/project/project4.mp4',
    logo: 'assets/project-logo4.png',
    logoStyle: {
        backgroundColor: 'rgba(70, 100, 134, 0.3)', // mavi-siyahımsı, soluk ton
    border: '0.2px solid rgba(23, 41, 62, 0.55)', // daha koyu mavi-siyahımsı border
    boxShadow: '0px 0px 60px 0px #1b599bff, 0px 0px 60px 0px #0e2c4fff', // hafif glow efekti
    },
    spotlight: 'assets/spotlight2.png',
    tags: [
            {
                id: 1,
                name: 'React.js',
                path: 'assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'MongoDB',
                path: 'assets/mongoDB.png',
            },
            {
                id: 4,
                name: 'Next.js',
                path: 'assets/nextJs.jpg',
            },
            {
                id: 5,
                name: 'UploadThing',
                path: 'assets/uploadThing.png',
            },
        ],
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];