export type Events = {
  title: string;
  description: string;
  start_year: number | null;
  end_year: number | null;
  tags: string;
  org: string;
};

export const events: Events[] = [
  {
    title: "WordPress Developer",
    description: "I have hands-on experience converting Figma and Adobe XD designs into fully responsive WordPress websites using Elementor and custom themes. Beyond translating designs, I’ve built WordPress sites from scratch with a strong focus on performance, SEO, and mobile responsiveness. I’ve also customized themes, extended functionality with third-party plugins and Elementor widgets, and ensured each project met client needs. Additionally, I’ve successfully managed site launches, provided ongoing maintenance, and implemented revisions efficiently to deliver high-quality results on time.",
    start_year: 2025,
    end_year: null,
    tags: "Work Experience",
    org: "FabLab Sarajevo"
  },
  {
    title: "Barbershop App",
    description: "I've built a mobile application with React Native for frontend and Supabase for backend. Testing was doen with Expo. This was my Bachelor's degree thesis.",
    start_year: 2024,
    end_year: 2024,
    tags: "Work Experience",
    org: "Freelance"
  },
  {
    title: "Laboratory Demonstrator",
    description: "Assisting the professor in Object-Oriented Programming and providing guidance to students on their coding assignments.",
    start_year: 2023,
    end_year: 2024,
    tags: "Work Experience",
    org: "International Burch University"
  },
  {
    title: "Web Development",
    description: "Designed, developed and maintained a functional website for Vectrum company using HTML, CSS and JavaScript.",
    start_year: 2022,
    end_year: 2023,
    tags: "Work Experience",
    org: "Vectrum d.o.o."
  },
  {
    title: "Erasmus+ Mobility",
    description: "During my Erasmus mobility program in Riga, Latvia, I had the opportunity to study in a dynamic international environment that broadened both my academic knowledge and cultural perspective. Living and learning in Riga allowed me to collaborate with students from diverse backgrounds, exchange ideas and adapt to new educational approaches. Beyond academics, the experience enriched my personal growth improving my communication, adaptability, and problem-solving skills while immersing myself in Latvian culture and building lasting international connections.",
    start_year: 2023,
    end_year: 2023,
    tags: "Erasmus Mobility",
    org: "Riga Technical University"
  },
  {
    title: "Bachelor's Degree",
    description: "I successfully completed my Bachelor’s degree in Information Technology at International Burch University, where I gained a strong foundation in software development, databases, and modern web technologies.",
    start_year: 2021,
    end_year: 2024,
    tags: "Education",
    org: "International Burch University",
  },
];