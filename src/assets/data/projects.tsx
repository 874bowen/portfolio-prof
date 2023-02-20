type Project = {
   id: Number
   title: String
   subtitle: String
   image: String
   category: String
   link: String
   github: String
   description: String
}

export const PROJECTS: Project [] = [
   {
      id: 0,
      title: 'Rick & Morty Character Wiki',
      subtitle: 'React.js',
      image: 'https://res.cloudinary.com/bowenivan/image/upload/q_auto:best/v1674296978/Articles/bowenivan.dev/rick_ftyghw.png',
      category: 'frontend',
      link: "http://rick-and-morty-two-nu.vercel.app/",
      github: "https://github.com/874bowen/Rick-and-Morty-Wiki",
      description: 'This is a project I made after learning React.js, It aims at enabling Rick & Morty fans to search their favorite characters and get more infomation about them. It wraps many of the React functionality from components to routes to hooks e.g., useEffect.',
   },
   {
      id: 1,
      title: 'Online Laptop Shop',
      subtitle: 'React.js',
      image: 'https://res.cloudinary.com/bowenivan/image/upload/q_auto:best/v1674297615/Articles/bowenivan.dev/laptop_eqjxcd.png',
      category: 'backend',
      link: "http://laptop-shop.vercel.app/",
      github: "https://github.com/874bowen/laptop-shop",
      description: 'OLS is an e-commerce application built in React.js. This is a project that uses firebase and Redux store. It doesn\'t have a good UI for now. This project was meant to improve my understanding of Redux and Firebase.',
   },
   {
      id: 2,
      title: 'Herbeauty',
      subtitle: 'Next.js',
      image: 'https://res.cloudinary.com/bowenivan/image/upload/q_auto:best/v1674297725/Articles/bowenivan.dev/herbeauty_hfzoqg.png',
      category: 'fullstack',
      link: "https://herbeauty.netlify.app/",
      github: "https://github.com/874bowen/herbeauty",
      description: 'Next.js e-commerce application using Xata as a serverless data storage and Cloudinary for media management. Here I was able to use NextAuth and XataAdapter to login users using their Google accounts and store their credentials to a Xata database.',
   },
   {
      id: 3,
      title: 'TextInImage Hider',
      subtitle: 'Bootstrap-UI',
      image: 'https://res.cloudinary.com/bowenivan/image/upload/q_auto:best/v1674296979/Articles/bowenivan.dev/stegan_z6sehj.png',
      category: "fullstack",
      link: "https://steganography-with-js.vercel.app/",
      github: "https://github.com/874bowen/steganography-with-js",
      description: 'With this project You can hide and retrieve messages in a picture within seconds. It uses Steganography.js, a library that allows you to implement text hiding in Images.',
   }
]
