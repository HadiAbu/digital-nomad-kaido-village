import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
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
              Your coliving space in the heart of Chiang Mai. Spaces made for
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
                  href="/about"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Amenities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  FAQ
                </Link>
              </li>
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
                  href="/careers"
                  className="text-muted-foreground hover:text-accent cursor-pointer"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3 mb-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-accent cursor-pointer"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-accent cursor-pointer"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-accent cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-accent cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Kaido Village. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-accent cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-accent cursor-pointer"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-settings"
              className="hover:text-accent cursor-pointer"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
