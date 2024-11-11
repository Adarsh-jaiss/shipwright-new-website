import Link from 'next/link';
import { FooterColumn } from './FooterColumn';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-8 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <FooterColumn title="Project">
            <Link href="https://shipwright.io/docs" className="hover:text-primary transition-colors">Documentation</Link>
            <Link href="https://github.com/shipwright-io/.github/blob/main/CODE_OF_CONDUCT.md" className="hover:text-primary transition-colors">Code of Conduct</Link>
            <Link href="https://shipwright.io/blog/" className="hover:text-primary transition-colors">Blog</Link>
            <Link href="https://github.com/shipwright-io/" className="hover:text-primary transition-colors">GitHub</Link>
          </FooterColumn>

          <FooterColumn title="Community">
            <Link href="https://kubernetes.slack.com/archives/C019ZRGUEJC" className="hover:text-primary transition-colors">Slack</Link>
            <Link href="#community" className="hover:text-primary transition-colors">
              Mailing List
            </Link>
            <Link href="https://github.com/shipwright-io/build/blob/main/OWNERS" className="hover:text-primary transition-colors">Maintainers</Link>
            <Link href="https://github.com/shipwright-io/.github/blob/main/CONTRIBUTING.md" className="hover:text-primary transition-colors">Contributing</Link>
          </FooterColumn>

          <FooterColumn title="Resources">
            <Link href="https://github.com/shipwright-io/build" className="hover:text-primary transition-colors">Quick Start</Link>
            <Link href="https://github.com/shipwright-io/build/tree/main/samples/v1beta1" className="hover:text-primary transition-colors">Examples</Link>
            <Link href="" className="hover:text-primary transition-colors">FAQ</Link>
            <Link href="" className="hover:text-primary transition-colors">Roadmap</Link>
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
        {/* <p className="text-xl mt-2 text-gray-800 ">
          Shipwright is a Cloud Native Computing Foundation sandbox project
        </p> */}

        <hr className="border-t-2 border-black-800 my-2" />

        <p className="text-sm text-foreground">
          © Shipwright Contributors 2024
        </p>
        <p className="text-sm text-foreground">
          © 2024 The Linux Foundation. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a className='text-blue-800' href='https://www.linuxfoundation.org/legal/trademark-usage'>Trademark Usage page</a>.
        </p>
      </div>

    </footer>
  );
}