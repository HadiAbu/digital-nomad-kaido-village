import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Kaido | Digital Nomad Hostels in Niigata",
  description:
    "Discover Kaido - a network of nomad-friendly stays in Niigata, Japan, designed for long stays that balance productivity and play.",
};

export default function AboutPage() {
  const imageUrl = "/about/about.jpg";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section
        className="border-b border-border bg-muted/40"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-white">
              About Kaido
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed text-pretty">
              A small network of nomad-friendly stays in Niigata, Japan,
              designed for long stays that balance productivity and play.
            </p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Concept
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Wake up to snow, focus in calm coworking spaces, and wind down in
              hot springs and local culture. Kaido is designed for overseas
              digital nomads staying 1 month or longer (≥ 30 nights).
            </p>
            <div className="bg-muted/20 p-6 rounded-lg">
              <h3 className="font-bold mb-3">A Day in the Life</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Morning</span> —
                  Kagura powder laps, first chair, tree runs, coffee.
                </p>
                <p>
                  <span className="font-medium text-foreground">Evening</span> —
                  Deep work in the coworking space, fast Wi-Fi, ergonomic desks.
                </p>
                <p>
                  <span className="font-medium text-foreground">Night</span> —
                  Local culture at small parties and listening bars (e.g., FLAT
                  Yuzawa).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Properties
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            {/* Kaido Yuzawa */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Kaido Yuzawa</h3>
              <p className="text-muted-foreground leading-relaxed">
                Onsen hostel within walking distance to ski lifts. Coworking
                space on site, strong Wi-Fi. Ideal for winter riders and long
                stays.
              </p>
              <div className="pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Private Room</span>
                  <span className="font-medium">¥420,000/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dormitory</span>
                  <span className="font-medium">¥238,000/mo</span>
                </div>
              </div>
            </div>

            {/* Kaido Nomad */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Kaido Nomad</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quiet rooms for focused routines. Strong Wi-Fi, shared kitchen.
                Your month-long base for deep work.
              </p>
              <div className="pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Private Room</span>
                  <span className="font-medium">¥288,000/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dormitory</span>
                  <span className="font-medium">¥144,000/mo</span>
                </div>
              </div>
            </div>

            {/* Kaido Urasa */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Kaido Urasa</h3>
              <p className="text-muted-foreground leading-relaxed">
                Countryside rhythm with access to Niigata's nature. Monthly
                pricing on request.
              </p>
              <div className="pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Rate</span>
                  <Link href="/contact">
                    <span className="font-medium">Contact us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-8 max-w-6xl">
            Minimum stay: 30 nights. Ski season typically runs November–May (~5
            months). Availability varies by season.
          </p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Weekly Linen Refresh</h3>
              <p className="text-sm text-muted-foreground">
                Fresh linens delivered weekly
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Shared Kitchen Access</h3>
              <p className="text-sm text-muted-foreground">
                Fully equipped communal kitchen
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Coworking Space</h3>
              <p className="text-sm text-muted-foreground">
                High-speed Wi-Fi & ergonomic desks
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Mail & Parcel Reception</h3>
              <p className="text-sm text-muted-foreground">
                Secure package handling
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Long-Stay Discounts</h3>
              <p className="text-sm text-muted-foreground">
                Better rates for extended stays
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Unlimited Onsen Access</h3>
              <p className="text-sm text-muted-foreground">At Kaido Yuzawa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">
              About SOUQ
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Kaido is operated by SOUQ株式会社, a Shibuya-based startup that
              leverages technology to create community-centered urban
              development. We are a tourism digital transformation company
              aiming to build sustainable futures through diverse cultures,
              nature, and communities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="font-medium mb-3">Technology</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilizing the latest technology to solve social issues and
                  create new value.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-3">Sustainability</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Emphasizing harmony between environment, society, and economy
                  for a sustainable future.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-3">Community</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cherishing the formation of communities where diverse people
                  connect and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <Footer />
    </div>
  );
}
