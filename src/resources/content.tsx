import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";
import { galleryManifest } from "./galleryManifest";


const person: Person = {
  firstName: "Leo",
  lastName: "Megnigbeto",
  name: `Leo Megnigbeto`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "leomegnigbeto@gmail.com",
  location: "Africa/Porto-Novo", // IANA time zone for Benin (Cotonou uses 'Africa/Porto-Novo')
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Cyrleo",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/leo-megnigbeto",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/cyrleo6",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software engineer and builder</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Leo, a software engineer, I craft performant
      <br /> web and mobile solutions and build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
                A passionate and solution-oriented Full Stack & Mobile Developer with 1 year of experience designing and building modern, high-performance, and custom applications. Specialized in Python, Django, Laravel, React, Next.js, and Flutter, I deliver complete, optimized, and scalable web and mobile projects. I also manage Linux web servers, ensuring security, deployment, and performance. As a freelance developer, I am rigorous, curious, and always ready to take on new tech challenges.

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Unir International",
        timeframe: "2022, 2025",
        role: "Web Developer",
        achievements: [
          <>
            Modernized an archive management platform and integrated a markets module..
          </>,
          <>
            Integrated AI into the platform to improve document indexing and analysis.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "GestArch Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "HougnieLab",
        timeframe: "2024",
        role: "Web Developer",
        achievements: [
          <>
            Developed a management platform for schools and training centers of all types.
          </>,
          <>
            Developed a normalized invoice generation platform tailored for small businesses.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Le Faucon High School",
        description: <>Studied software engineering.</>,
      },

    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
            title: "Frontend Development",
            description: <>Proficient in React, TypeScript, and modern frontend tools. Experience with responsive design
                and UI frameworks.</>,
            images: [],
        },
        {
            title: "Backend Development",
            description: <>Expert in Python/Django and PHP/Laravel frameworks. Strong understanding of RESTful APIs and
                microservices.</>,
            images: [],
        },
        {
            title: "Mobile Development",
            description: <>Skilled in Flutter for cross-platform mobile app development. Experience with native APIs and
                responsive layouts.</>,
            images: [],
        },
        {
            title: "Databases & DevOps",
            description: <>Experienced with PostgreSQL, MySQL, and MongoDB. Proficient in Docker, CI/CD, and Linux
                server administration.</>,
            images: [],
        },
        {
            title: "Tools & Collaboration",
            description: <>Version control with Git, project management with Jira, and collaboration through
                GitHub/GitLab.</>,
            images: [],
        },
        {
            title: "Testing & Quality Assurance",
            description: <>Experience with Jest, React Testing Library, and Cypress for frontend testing.
                Implementation of unit and integration tests.</>,
            images: [],
        },
        {
            title: "UI/UX Design",
            description: <>Skilled in Adobe XD, Sketch, and design systems. Focus on creating intuitive and
                accessible user interfaces.</>,
            images: [],
        },
        {
            title: "Cloud Services",
            description: <>Proficient with AWS, Google Cloud Platform, and Azure. Experience with serverless
                architectures and cloud deployment.</>,
            images: [],
        },
        {
            title: "API Development",
            description: <>Strong expertise in RESTful API design, GraphQL, and WebSocket implementations for
                real-time applications.</>,
            images: [],
        }
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const getGalleryImages = (): Gallery["images"] => {
    // Use the manifest for images and videos
    return galleryManifest;
};

const gallery: Gallery = {
    path: "/gallery",
    label: "Gallery",
    title: `Photo gallery – ${person.name}`,
    description: `A photo collection by ${person.name}`,
    images: getGalleryImages(),
};





export { person, social, newsletter, home, about, blog, work, gallery };
