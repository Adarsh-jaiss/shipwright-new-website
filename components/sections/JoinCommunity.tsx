'use client';

import { Button } from '@/components/ui/button';
import { Calendar, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
  </svg>
);

const communityLinks = [
  {
    title: 'Community Meetings',
    description: 'Join our weekly community meetings',
    icon: <Calendar className="w-10 h-10" />,
    href: 'https://calendar.google.com/calendar/u/0/embed?src=shipwright-admin@lists.shipwright.io&ctz=America/New_York',
    buttonText: 'Add to Calendar'
  },
  {
    title: 'Slack Channel',
    description: 'Chat with the community on CNCF Slack',
    icon: <SlackIcon />,
    href: 'https://kubernetes.slack.com/archives/C019ZRGUEJC',
    buttonText: 'Join Slack'
  },
  {
    title: 'Developers Mailing List',
    description: 'Discuss development and implementation',
    icon: <Mail className="w-10 h-10" />,
    href: 'https://lists.shipwright.io/archives/list/shipwright-dev@lists.shipwright.io/',
    buttonText: 'Subscribe'
  },
  {
    title: 'Users Mailing List',
    description: 'Get help and share experiences',
    icon: <Mail className="w-10 h-10" />,
    href: 'https://lists.shipwright.io/archives/list/shipwright-dev@lists.shipwright.io/',
    buttonText: 'Subscribe'
  }
];

export function JoinCommunity() {
  return (
    <section id='community' className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with the Shipwright community to learn, contribute, and stay updated
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
          {communityLinks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col items-start text-center border border-gray-300 hover:shadow-gray-400 dark:hover:shadow-gray-700"
            >
              <div className="text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <Button asChild>
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.buttonText}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}