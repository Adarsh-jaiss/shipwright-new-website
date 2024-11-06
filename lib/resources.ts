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
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: number;
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
    title: "Getting Started with Shipwright",
    slug: "getting-started",
    excerpt: "Learn how to set up Shipwright in your Kubernetes cluster and build your first container image.",
    author: "Alice Johnson",
    date: "2024-03-10",
    readingTime: 5
  },
  {
    title: "Advanced Build Strategies in Shipwright",
    slug: "advanced-build-strategies",
    excerpt: "Explore different build strategies and learn when to use each one for optimal results.",
    author: "Bob Wilson",
    date: "2024-03-01",
    readingTime: 8
  }
];