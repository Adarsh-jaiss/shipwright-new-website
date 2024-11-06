'use client';

import * as React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-16 ">
        <Navigation />

      </div>
    </header>
  );
}

// export function Header() {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container  h-16 items-center justify-between">
//         <div className="flex items-center gap-6 md:gap-8">
//           <Link href="/" className="flex items-center space-x-2">
//             <span className="font-bold text-xl">Shipwright</span>
//           </Link>
//           <Navigation />
//         </div>
//         <div className="flex items-center gap-2">
//           <Button
//             variant="ghost"
//             size="icon"
//             asChild
//             className="text-foreground"
//           >
//             <Link
//               href="https://github.com/shipwright-io/build"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Github className="h-5 w-5" />
//               <span className="sr-only">GitHub</span>
//             </Link>
//           </Button>
//           <ModeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }