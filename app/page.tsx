"use client"
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { JoinCommunity } from '@/components/sections/JoinCommunity';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { talks, blogs } from '@/lib/resources';
import { motion } from 'framer-motion';
import { InstallSection } from '@/components/sections/InstallSection';
import { FeaturesSection } from '@/components/sections/Features';

export default function Home() {
  return (
    <>

      <div className='h-svh' >

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

      </div>

      <FeaturesSection />
      <InstallSection />
      <ResourcesSection talks={talks} blogs={blogs} />
      <JoinCommunity />
    </>
  );
}