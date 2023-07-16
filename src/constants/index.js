import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  shopify,
  carrent,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Instructional Specialist",
    company_name: "2U/edX",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [],
  },
  {
    title: "Freelancer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "May 2018 - Present",
    points: [],
  },
  {
    title: "Web Developer",
    company_name: "Little BOE LLC",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2018 - May 2021",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I never thought it was possible to have such a great owner!",
    name: "My Cat",
    designation: "CEO",
    company: "The Apartment",
    image: "../assets/animals/MyCat.jpg",
  },
];

const projects = [
  {
    name: "Admin Dashboard",
    description:
      "Web-based platform that allows users to run through a mocked-up admin dashboard with only front-end capabilities",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react router",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };