import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rohan",
  lastName: "Kumar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "San Jose, CA", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about the projects I am working on, breaking it down step-by-step with the goal of making Software and AI more accessible to beginners.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rohkumar-dev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kumar-roh",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rohkumar.dev@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Computer Science and Physics Student at UCSB</>,
  subline: (
    <>
      I'm Rohan, a CS and Physics Student at <InlineCode>UC Santa Barbara</InlineCode>. <br/> Outside of school, I enjoy diving into app development, web development, and machine learning.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Rohan is a Computer Science and Physics student at UCSB driven by a passion for crafting innovative and 
        impactful solutions to real-world challenges. With a keen interest in the future of Quantum Computing, 
        he aspires to contribute to cutting-edge advancements and lead in the ever-evolving software industry.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "LiveRamp",
        timeframe: "Summer 2024",
        role: "Full Stack Software Engineering Intern",
        achievements: [
          <>
            Accelerated frontend code reviews by 15% by implementing Visual Regression UI Testing into the Jenkins CI/CD pipeline.
          </>,
          <>
            Reduced data corruption risks during backend On-call tickets by creating a Dry Run feature using Rails and PostgreSQL,
            enabling admins to preview task outputs without modifying the database.
          </>,
          <>
            Lowered On-call issues by 10% by designing an automated end-to-end smoke testing service with Playwright, proactively
            identifying production failures and notifying teams via Slack.
          </>
        ],
        images: [],
      },
      {
        company: "Association of Computing Machinery (ACM) UCSB Chapter",
        timeframe: "April 2024 - Present",
        role: "Founding Officer / Head of Web Development",
        achievements: [
          <>
            Designed and launched ACM website (ucsbacm.com), used by hundreds of students, providing a hub for events and resources.
          </>,
          <>
            Boosted student engagement / enrollment by 30% through revamped curriculum focused on project-based, hands-on workshops.
          </>,
          <>
            Trained and mentored 100+ underclassmen, teaching modern full stack fundamentals in 12+ practical, interactive sessions.
          </>,
          <>
            Increased team output by 25% as Scrum Master, optimizing task delegation in an Agile development environment.
          </>
        ],
        images: [],
      },
      {
        company: "Grafiniti",
        timeframe: "Summer 2023",
        role: "Artificial Intelligence Software Intern",
        achievements: [
          <>
            Cut finance brief generation time by 60x (minutes to seconds) by chaining LLM calls to deliver actionable insights to users.
          </>,
          <>
            Improved AI responses by leveraging Langchain to engineer dynamic prompts as evaluated by experienced finance advisors.
          </>,
          <>
            Streamlined review process by developing a bulk review pipeline, allowing the product team to validate outputs efficiently.
          </>
        ],
        images: [],
      },
      {
        company: "AIClub",
        timeframe: "Summer 2022",
        role: "iOS Software Engineering Intern",
        achievements: [
          <>
            Authored 70% of AIClub's Computer Vision curriculum, adopted by hundreds of high school students, by documenting the
            creation of an object detection iOS app with TensorFlow and AIClub's neural network tools.
          </>,
          <>
            Engineered a high-accuracy object detection model to identify and classify rapid COVID-19 tests using RoboFlow and CVAT.
          </>,
          <>
            Developed 4 real-time image classification models to detect and categorize faces by age, integrating outputs into iOS app.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of California at Santa Barbara",
        description: <>Studied Computer Science and Quantum Physics with a 3.9 GPA.</>,
      },
      {
        name: "Archbishop Mitty High School",
        description: <>Maintained a Cumulative GPA of 4.6.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [

    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about my recent projects...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


export { person, social, newsletter, home, about, blog, work };
