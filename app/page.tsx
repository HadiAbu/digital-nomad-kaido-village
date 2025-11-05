import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { SplashScreen } from "@/components/splash-screen";
import { NewsletterModal } from "@/components/newsletter-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Hero from "@/components/Hero";
import Discount from "@/components/Discount";
import HowToBook from "@/components/HowToBook";
import CTA from "@/components/CTA";
import Amenities from "@/components/Amenities";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <NewsletterModal />

      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-bold text-foreground">
              Kaido Village
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href="/"
                  className="text-sm text-foreground hover:text-accent cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-foreground hover:text-accent cursor-pointer"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-foreground hover:text-accent cursor-pointer"
                >
                  Contact
                </Link>
              </nav>

              <DropdownMenu>
                <DropdownMenuTrigger asChild className="md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/" className="cursor-pointer w-full">
                      Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/blog" className="cursor-pointer w-full">
                      Blog
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/contact" className="cursor-pointer w-full">
                      Contact
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <Hero />
        {/* Discount Section */}
        <Discount />

        {/* How to Book Section */}
        <HowToBook />
        {/* Amenities Section */}
        <Amenities />

        {/* Testimonial Section */}
        <Testimonial />

        {/* CTA Section */}
        <CTA />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
