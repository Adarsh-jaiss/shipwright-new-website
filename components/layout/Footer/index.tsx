import Link from 'next/link';
import { FooterColumn } from './FooterColumn';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-8 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Project">
            <Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link>
            <Link href="/community" className="hover:text-primary transition-colors">Community</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link href="https://github.com/shipwright-io/build" className="hover:text-primary transition-colors">GitHub</Link>
          </FooterColumn>
          <FooterColumn title="Community">
            <Link href="https://slack.cncf.io" className="hover:text-primary transition-colors">Slack</Link>
            <Link href="https://lists.cncf.io/g/cncf-shipwright-dev" className="hover:text-primary transition-colors">
              Mailing List
            </Link>
            <Link href="/community/maintainers" className="hover:text-primary transition-colors">Maintainers</Link>
            <Link href="/community/contributing" className="hover:text-primary transition-colors">Contributing</Link>
          </FooterColumn>
          <FooterColumn title="Resources">
            <Link href="/docs/quick-start" className="hover:text-primary transition-colors">Quick Start</Link>
            <Link href="/docs/examples" className="hover:text-primary transition-colors">Examples</Link>
            <Link href="/docs/faq" className="hover:text-primary transition-colors">FAQ</Link>
            <Link href="/docs/roadmap" className="hover:text-primary transition-colors">Roadmap</Link>
          </FooterColumn>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <SocialLinks />
            <div className="mt-8 space-y-4">
              <Link
                href="https://www.cncf.io"
                className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src="https://raw.githubusercontent.com/cncf/artwork/master/other/cncf/horizontal/color/cncf-color.svg"
                  alt="CNCF Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

          </div>
        </div>
        <p className="text-2xl mt-2 text-blue-800">
          Shipwright is a Cloud Native Computing Foundation sandbox project
        </p>

        <hr className="border-t-2 border-black-800 my-2" />

        <p className="text-sm text-foreground">
          © Shipwright Authors 2024 | Documentation distributed under CC-BY-4.0
        </p>
        <p className="text-sm text-foreground">
          © 2024 The Linux Foundation. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our Trademark Usage page.
        </p>
      </div>

    </footer>
  );
}