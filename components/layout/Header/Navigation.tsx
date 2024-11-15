import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const documentationItems = [
  // {
  //   title: 'Quick Start',
  //   href: 'https://github.com/shipwright-io/build',
  //   description: 'Get started with Shipwright in minutes.',
  // },
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
    href: 'https://github.com/shipwright-io/build/tree/main/samples/v1beta1',
    description: 'Real-world examples and use cases.',
  },
  {
    title: 'Releases',
    href: 'https://github.com/shipwright-io/build/releases',
    description: 'Checkout latest release notes and changelogs.',
  },
];

// const resourceItems = [
//   {
//     title: 'Blog',
//     href: 'https://shipwright.io/blog/',
//     description: 'Latest news, updates, and technical articles.',
//   },
//   {
//     title: 'Talks',
//     href: '#talks',
//     description: 'Conference talks, webinars, and presentations.',
//   },
// ];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Mobile Navigation Component
  const MobileNav = () => (
    <div className="flex flex-col space-y-4">
      <Link href="#home" className="text-lg font-medium">
        Home
      </Link>
      <div className="flex flex-col space-y-2">
        <div className="text-lg font-medium">Documentation</div>
        {documentationItems.map((item) => (
          <Link 
            key={item.title} 
            href={item.href}
            className="pl-4 text-sm text-muted-foreground hover:text-primary"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Link href="#community" className="text-lg font-medium">
        Community
      </Link>
      <div className="flex flex-col space-y-2">
        <div className="text-lg font-medium">Resources</div>
        {/* {resourceItems.map((item) => (
          <Link 
            key={item.title} 
            href={item.href}
            className="pl-4 text-sm text-muted-foreground hover:text-primary"
          >
            {item.title}
          </Link>
        ))} */}
      </div>
      <div className="pt-4">
        <ModeToggle />
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="gap-6 mt-4">
            {/* Logo */}
            <NavigationMenuItem className="flex items-center">
              <Link href="#home" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'flex items-center')}>
                  <span className="font-medium">Shipwright</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Navigation Items */}
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
              <Link href="#resources" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
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
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center px-4 py-2">
        <Link href="#home" className="font-medium text-xl">
          Shipwright
        </Link>
        <div className="flex items-center">
          <ModeToggle  />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
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