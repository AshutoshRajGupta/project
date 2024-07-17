export const products = [
  {
    title: "Portfolio NextJs",
    thumbnail: "/laptop-1.jpg",
    link :"https://github.com/AshutoshRajGupta/main-portfolio",

  },
  {
    title: "Flutter Clean Architecture",
    thumbnail: "/laptop-3.jpg",
    link :"https://github.com/AshutoshRajGupta/flutter-clean-architecture",

  },

  {
    title: "Ecommerce Website",
    thumbnail: "/watch_ecommerce.png",
    link :"https://github.com/AshutoshRajGupta/Ecommerce-Shopping",
  },
  {
    title: "FLutter Blog App",
    thumbnail: "/blog.png",
    link :"https://github.com/AshutoshRajGupta/flutter-clean-architecture-blogApp",

  },
  {
    title: "Aceternity With React",
    thumbnail: "/aceternity.png",
    link :"https://github.com/AshutoshRajGupta/Aceternity-UI-React",

  },
  {
    title: "Cryptdrive",
    thumbnail: "/cryptdrive.png",
    link :"https://github.com/AshutoshRajGupta/cryptdrive_version_2",

  },
  {
    title: "Mern Blog Website",
    thumbnail: "/mern_blog.png",
    link :"https://github.com/AshutoshRajGupta/mern_blog",

  },
  {
    title: "Point Of Sale Application",
    thumbnail: "/laptop-1.jpg",
    link :"https://github.com/AshutoshRajGupta/pos_application",

  },
  {
    title: "Portfolio NextJs",
    thumbnail: "/laptop-1.jpg",
    link :"https://github.com/AshutoshRajGupta/main-portfolio",

  },
  {
    title: "Flutter Clean Architecture",
    thumbnail: "/laptop-3.jpg",
    link :"https://github.com/AshutoshRajGupta/flutter-clean-architecture",

  },
  {
    title: "React Todo App",
    thumbnail: "/todo.png",
    link :"https://github.com/AshutoshRajGupta/todo_firebase",

  }

];

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  categoryId: number;
  link: string;
}
export const categories: Category[] = [
  { id: 1, name: "MERN" },
  { id: 2, name: "Nextjs" },
  { id: 3, name: "React" },
  { id: 4, name: "Flutter" },
  // Add more categories here
];

export const work: Product[] = [
  {
    id: 3,
    name: "Ecommerce Website",
    desc: "Experience seamless shopping on our MERN stack watch e-commerce website! Sign up, log in, and explore a vast collection of watches. ",
    image: "/watch_ecommerce.png",
    categoryId: 1,
    link :"https://github.com/AshutoshRajGupta/Ecommerce-Shopping",
  },
  {
    id: 1,
    name: "FLutter Blog App",
    desc: "This Flutter project demonstrates a clean architecture approach to implementing a blog app with authentication using Supabase as the database backend and Hive for local storage ",
    image: "/blog.png",
    categoryId: 4,
    link :"https://github.com/AshutoshRajGupta/flutter-clean-architecture-blogApp",

  },
  {
    id: 2,
    name: "Aceternity With React",
    desc: "Creating a animation website in react where we have several ui with acertenity which can we use in our project. ",
    image: "/aceternity.png",
    categoryId: 3,
    link :"https://github.com/AshutoshRajGupta/Aceternity-UI-React",

  },
  {
    id: 4,
    name: "Cryptdrive",
    desc: "The project aims to create a decentralized document storage system using the MERN (MongoDB, Express.js, React.js, Node.js) stack along with blockchain technology. ",
    image: "/cryptdrive.png",
    categoryId: 1,
    link :"https://github.com/AshutoshRajGupta/cryptdrive_version_2",

  },
  {
    id: 6,
    name: "Mern Blog Website",
    desc: "Welcome to our MERN stack blog platform! Register, log in, and unleash your creativity by creating, editing, and deleting blogs. ",
    image: "/mern_blog.png",
    categoryId: 1,
    link :"https://github.com/AshutoshRajGupta/mern_blog",

  },
  {
    id: 5,
    name: "Point Of Sale Application",
    desc: "The application provides functionalities for managing sales transactions, including user authentication, order processing, generating bills, and accessing customer details. ",
    image: "/laptop-1.jpg",
    categoryId: 1,
    link :"https://github.com/AshutoshRajGupta/pos_application",

  },
  {
    id: 7,
    name: "Portfolio NextJs",
    desc: "Portfolio website made using aceternity and nextjs showcasing my projects , skills and experience. ",
    image: "/laptop-1.jpg",
    categoryId: 2,
    link :"https://github.com/AshutoshRajGupta/main-portfolio",

  },
  {
    id: 8,
    name: "Flutter Clean Architecture",
    desc: "Flutter Authentication made in flutter using clean architecture with supabase for database and hive as local storage. ",
    image: "/laptop-3.jpg",
    categoryId: 4,
    link :"https://github.com/AshutoshRajGupta/flutter-clean-architecture",

  },
  {
    id: 9,
    name: "React Todo App",
    desc: "A todo App made using React with localStorage for storing data localy and used firebase for authentication. ",
    image: "/todo.png",
    categoryId: 3,
    link :"https://github.com/AshutoshRajGupta/todo_firebase",

  }
];


export const skills = [
  
  {
    name: "HTML",
    percentage: "100%",
    image: "/html-5.svg",
  },
  {
    name: "CSS",
    percentage: "100%",
    image: "/css-3.svg",
  },
  {
    name: "Javascript",
    percentage: "85%",
    image: "/js.svg",
  },
  {
    name: "Figma",
    percentage: "97%",
    image: "/figma.svg",
  },
  {
    name: "Python",
    percentage: "90%",
    image: "/python.svg",
  },
  {
    name: "React js",
    percentage: "95%",
    image: "/react.svg",
  },
  {
    name: "Node js",
    percentage: "75%",
    image: "/nodejs.svg",
  },
  {
    name: "MYSQl",
    percentage: "100%",
    image: "/mysql.svg",
  },
  {
    name: "Tailwind CSS",
    percentage: "70%",
    image: "/tailwind.svg",
  },
];

export const experience = [
  {
    id: 1,
    startDate: " AUG 2024",
    endDate: "PRESENT",
    title: "TRAINEE ENGINEER",
    description: "SOFTWARE ENGINEER, Working as a software trainee engineer and works on various projects. ",
  },
  {
    id: 2,
    startDate: "FEB 2023",
    endDate: "APR 2023",
    title: "FULL STACK WEB DEVELOPER",
    description: "FULL STACK DEVELOPER, Working as a full stck developer intern and works on various projects.",
  },
  
  
];
