export type Project = {
  slug: string;
  title: string;
  description: string;
  year: number;
  tags: string[];
  image: string;
  links?: {
    demo?: string;
    repo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "fablab-site",
    title: "FabLab Website",
    description: "FabLab BiH is innovation-driven Research and Technology (RTO) organization that develops innovative and research platforms with aim to improve research infrastructure, develop cutting-edge technologies, and accelerate innovation in Bosnia and Herzegovina (BiH).",
    year: 2025,
    tags: ["WordPress", "Elementor"],
    image: "/images/projects/fablab.png",
    links: { demo: "https://fablab.ba" }
  },
  {
    slug: "teca-platform",
    title: "TECA Platform",
    description: "The TECA platform empowers artists and makers by providing digital tools for creative collaboration. It supports hybrid workshops, skill development, and co-creation of digital art, culminating in national and international exhibitions that promote inclusivity, innovation, and cultural exchange.",
    year: 2025,
    tags: ["WordPress", "Elementor"],
    image: "/images/projects/tecalab.jpg",
    links: { demo: "https://tecalab.eu" }
  },
  {
    slug: "vectrum-site",
    title: "Vectrum Website",
    description: "Website for transport company based in Sarajevo. The site is made with HTML, CSS & JS.",
    year: 2024,
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/vectrum.png",
    links: { demo: "www.vectrum.ba" }
  },
];