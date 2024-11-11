export interface Talk {
  title: string;
  description: string;
  youtubeUrl: string;
  presenter: string;
  date: string;
  conference?: string;

}

export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: number;
  Link: string;
}

export const talks: Talk[] = [
  {
    title: "Introduction to Shipwright",
    description: "Learn about Shipwright's architecture and core concepts",
    youtubeUrl: "https://www.youtube.com/watch?v=N5sVrygywZk",
    presenter: "Jason Hall",
    date: "2024-03-15",
    conference: "KubeCon + CloudNativeCon Europe 2024",
  },
  {
    title: 'Origin of Shipwright',
    description: 'In this episode Jason Hall from Red Hat unravel the story of Shipwright',
    youtubeUrl: 'https://www.youtube.com/watch?v=t3bSnaX4-aU&t=420s',
    presenter: 'Jason Hall',
    date: '3 Nov 2021',
    conference: 'Cloud Native Podcast',
  },
  {
    title: 'Bringing Shipwright to Beta - and Beyond!',
    description: 'A talk on Shipwright beta API that brings stronger guarantees of support and stability',
    youtubeUrl: 'https://www.youtube.com/watch?v=SC3WLx7Xn8g',
    presenter: 'Adam Kaplan, Red Hat',
    date: '5 Nov 2022',
    conference: 'Continious Delivery submit 2023',
  },

  {
    title: 'Project Shipwright in Depth',
    description: 'Learn how Shipwright compliments Tekton and how you will be able to write strategies for your own build tools.',
    youtubeUrl: 'https://www.youtube.com/watch?v=UZkinRZyqU4',
    presenter: 'Adam Kaplan and Enrique Encalada',
    date: '6 Jul 2021',
    conference: 'CD Con 2021',
  },
  {
    title: 'Secure and Reliable Container Image Creation with Shipwright in supply chain',
    description: 'Learn how Shipwright compliments Tekton and how you will be able to write strategies for your own build tools.',
    youtubeUrl: 'https://www.youtube.com/watch?v=7AdQX6p09nE',
    presenter: 'Matthias Diester & Karan Kumar, IBM',
    date: ' 26 May 2023',
    conference: 'CD Con + gitOps Con 2023',
  },
  {
    title: 'Shipwright - Building Container Images In Kubernetes',
    description: 'A Guide for getting started with shipwright and buidling your container images in kubernetes native way',
    youtubeUrl: 'https://www.youtube.com/watch?v=tqsSQTewcwM',
    presenter: 'Viktor Farcic',
    date: '30 Aug 2021',
    conference: '',
  },
];

export const blogs: BlogPost[] = [
  {
    title: "Building Secure Container images with Shipwright",
    excerpt: "Learn how to run vulnerability scanning on container images with Shipwright while building those images.",
    author: "Karan Kumar",
    date: "July 15, 2024",
    readingTime: 5,
    Link:"https://shipwright.io/blog/2024/07/15/building-secure-container-images-with-shipwright/"
  },
  {
    title: "Shipwright v0.13.0 Is Here",
    excerpt: "Know more about the new features, improvements and chanagelog in shipwright v0.13.0.",
    author: "Enrique Encalada",
    date: "March 27, 2024",
    readingTime: 4,
    Link: "https://shipwright.io/blog/2024/03/27/shipwright-v0.13.0-is-here/"
  },
  {
    title:"Introducing Shipwright Beta API",
    excerpt:"Know more about the multiple changes and improvements Beta API brings in Shipwright as a result of accumulated experience operating the alpha API and incorporating valuable user feedback.",
    author:"Enrique Encalada",
    date:"November 07, 2023",
    readingTime:3,
    Link:"https://shipwright.io/blog/2023/11/07/introducing-shipwright-beta-api/"
  },
];