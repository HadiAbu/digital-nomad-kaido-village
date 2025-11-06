import { Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-4 text-foreground">
              Kaido Village
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your coliving space in the heart of Kaido Village. Spaces made for
              digital nomads.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.nomad-lab.jp/en/about"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/rooms"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Rooms
                </Link>
              </li> */}
              <li>
                <Link
                  href="https://www.nomad-lab.jp/en"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Properties
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              {/* <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Blog
                </Link>
              </li>*/}
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.nomad-lab.jp/en/privacy"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.nomad-lab.jp/en/terms"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3 mb-4">
              <Link
                href="https://www.instagram.com/kaido_village/"
                className="text-muted-foreground hover:text-accent cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 NOMAD LAB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
