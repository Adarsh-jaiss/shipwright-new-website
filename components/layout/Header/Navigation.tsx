'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const documentationItems = [
  {
    title: 'Quick Start',
    href: '',
    description: 'Get started with Shipwright in minutes.',
  },
  {
    title: 'Installation',
    href: '#install-shipwright',
    description: 'Step-by-step guide to install Shipwright.',
  },
  {
    title: 'Build Strategies',
    href: 'https://shipwright.io/docs/build/buildstrategies/',
    description: 'Learn about different build strategies.',
  },
  {
    title: 'Examples',
    href: '/docs/examples',
    description: 'Real-world examples and use cases.',
  },
];

const resourceItems = [
  {
    title: 'Blog',
    href: 'https://shipwright.io/blog/',
    description: 'Latest news, updates, and technical articles.',
  },
  {
    title: 'Talks',
    href: '#talks',
    description: 'Conference talks, webinars, and presentations.',
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList className="gap-6 mt-4">
        <NavigationMenuItem>
          <Link href="#home" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[280px] p-3">
              {documentationItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#community" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Community
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[280px] p-3">
              {resourceItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block w-full select-none rounded-md p-3 leading-none no-underline outline-none transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            'focus:bg-accent focus:text-accent-foreground',
            'border-l-2 border-transparent hover:border-l-2 hover:border-primary',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none mb-1">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';