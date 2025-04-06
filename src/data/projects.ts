export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode, and responsive design.",
    image: "/images/portfolio.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/yourusername/portfolio",
    demoLink: "https://yourusername.vercel.app",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for an e-commerce platform with inventory management, sales analytics, and customer insights.",
    image: "/images/ecommerce.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    githubLink: "https://github.com/yourusername/ecommerce-dashboard",
    demoLink: "https://ecommerce-dashboard-demo.vercel.app",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather information for any city worldwide.",
    image: "/images/weather.jpg",
    technologies: ["React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/weather-app",
    demoLink: "https://weather-app-demo.vercel.app",
  },
];

export default projects; 