"use client"
import { Button } from '@/components/ui/button';
import { Github, Package, Cloud, Puzzle } from 'lucide-react';
import Link from 'next/link';
import { JoinCommunity } from '@/components/sections/JoinCommunity';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { talks, blogs } from '@/lib/resources';
import { installMethods, InstallSection } from '@/components/sections/InstallSection';
import { motion } from 'framer-motion';


const features = [
  {
    title: 'Multiple Build Strategies',
    description: 'Support for various build strategies including Buildpacks, Buildah, Kaniko, and more.',
    icon: Package,
  },
  {
    title: 'Kubernetes Native',
    description: 'Built from the ground up to work seamlessly with Kubernetes and follow cloud-native principles.',
    icon: Cloud,
  },
  {
    title: 'Extensible',
    description: 'Easy to extend and customize with your own build strategies and workflows.',
    icon: Puzzle,
  },
];

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center py-16 px-4">
        <div className="container  flex max-w-[64rem] flex-col items-center gap-4 text-center ">
        {/* <h1>Shipwright</h1> */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            A framework for building container images on{' '}
            <span className=" text-blue-700">Kubernetes</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          >
            Build container images using popular build strategies like
            Buildpacks, Buildah, Kaniko, ko and more.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-x-4"
          >
            <Button asChild size="lg" className="animate-bounce">
              <Link href="#install-shipwright">Quick Start</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://shipwright.io/docs/">Documentation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link
                href="https://github.com/shipwright-io/build"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section
        id="features"
        // className="container space-y-6 py-8 md:py-12 lg:py-24 flex flex-col items-center"
        className="space-y-6 py- md:py-12 lg:py-24 flex flex-col "
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Shipwright provides a powerful and flexible framework for building
        container images on Kubernetes.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative overflow-hidden rounded-lg border border-gray-300 bg-background p-4 transition-all hover:shadow-lg"
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="space-y-2 text-center">
          <feature.icon className="h-10 w-10 text-primary mb-4 mx-auto" />
          <h3 className="font-bold">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">
            {feature.description}
          </p>
            </div>
          </div>
        </motion.div>
          ))}
        </div>
      </section>
      <InstallSection/>
      <JoinCommunity />
      <ResourcesSection talks={talks} blogs={blogs} />
    </>
  );
}