export interface Talk {
    title: string;
    description: string;
    youtubeUrl: string;
    presenter: string;
    date: string;
    conference?: string;
    thumbnail?: string;
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
      thumbnail: "https://img.youtube.com/watch?v=N5sVrygywZk.jpg"
    },
    {
      title: "Building Container Images with Shipwright",
      description: "A deep dive into Shipwright's build strategies",
      youtubeUrl: "https://www.youtube.com/watch?v=example2",
      presenter: "John Smith",
      date: "2024-02-20",
      conference: "Cloud Native Rejekts EU 2024",
      thumbnail: "https://img.youtube.com/vi/example2/maxresdefault.jpg"
    }
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