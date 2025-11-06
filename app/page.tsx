import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { SplashScreen } from "@/components/splash-screen";
//import { NewsletterModal } from "@/components/newsletter-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Hero from "@/components/Hero";
import Discount from "@/components/Discount";
import Properties from "@/components/Properties";
import CTA from "@/components/CTA";
import Amenities from "@/components/Amenities";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <SplashScreen />
      {/*  <NewsletterModal />  */}

      <div className="min-h-screen">
        {/* Header */}
        <Navbar />

        {/* Hero Section */}
        <Hero />
        {/* Discount Section */}
        <Discount />

        {/* How to Book Section */}
        <Properties />
        {/* Amenities Section */}
        <Amenities />

        {/* Testimonial Section */}
        {/* <Testimonial /> */}

        {/* CTA Section */}
        <CTA />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
