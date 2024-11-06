"use client"
import { motion } from 'framer-motion';
import React from 'react';
import {Package, Cloud, Puzzle } from 'lucide-react';

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


export function FeaturesSection() {
    return (
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
                        className="relative overflow-hidden rounded-md border border-gray-300 bg-background p-4 transition-all hover:shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-700"
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
    )
}