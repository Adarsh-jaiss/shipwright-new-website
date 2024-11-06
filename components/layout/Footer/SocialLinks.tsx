import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors">
        <Link
          href="https://github.com/shipwright-io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors">
        <Link
          href="https://twitter.com/shipwrightio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors">
        <Link
          href="https://linkedin.com/company/shipwright"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
    </div>
  );
}