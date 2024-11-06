'use client';

import { Card } from '@/components/ui/card';
import { Talk, BlogPost } from '@/lib/resources';
import { Calendar, User, Video, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ResourcesSectionProps {
  talks: Talk[];
  blogs: BlogPost[];
}

export function ResourcesSection({ talks, blogs }: ResourcesSectionProps) {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of talks, presentations, and blog posts
          </p>
        </motion.div>

        <Tabs defaultValue="talks" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="talks" id='talks'>Featured Talks</TabsTrigger>
            <TabsTrigger value="blogs" id='blogs'>Learn about Shipwright</TabsTrigger>
          </TabsList>

          <TabsContent value="talks">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
              {talks.map((talk, index) => (
                <motion.div
                  key={talk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-sm transition-shadow h-full hover:shadow-gray-400 dark:hover:shadow-gray-700">
                    <Link
                      href={talk.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="aspect-video relative">
                        {talk.youtubeUrl && (
                          <img
                            src={`https://img.youtube.com/vi/${new URL(talk.youtubeUrl).searchParams.get('v')}/hqdefault.jpg`}
                            alt={talk.title}
                            className="object-cover w-full h-full"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Video className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{talk.title}</h3>
                        <p className="text-muted-foreground mb-4">
                          {talk.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {talk.presenter}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(talk.date).toLocaleDateString('en-GB')}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blogs">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <Link href={`/blog/${blog.slug}`} className="block h-full">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                        <p className="text-muted-foreground mb-4">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {blog.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(blog.date).toLocaleDateString('en-GB')}
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {blog.readingTime} min read
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}