export type Events = {
  title: string;
  description: string;
  year: number;
  tags: string;
};

export const events: Events[] = [
  {
    title: "FabLab Website",
    description: "FabLab BiH is innovation-driven Research and Technology (RTO) organization that develops innovative and research platforms with aim to improve research infrastructure, develop cutting-edge technologies, and accelerate innovation in Bosnia and Herzegovina (BiH).",
    year: 2025,
    tags: "Education",
  },
  {
    title: "TECA Platform",
    description: "The TECA platform empowers artists and makers by providing digital tools for creative collaboration. It supports hybrid workshops, skill development, and co-creation of digital art, culminating in national and international exhibitions that promote inclusivity, innovation, and cultural exchange.",
    year: 2025,
    tags: "Work Experience",
  },
  {
    title: "Barbershop App",
    description: "Mobile booking app built with React Native + Supabase.",
    year: 2024,
    tags: "Volunteering",
  },
];