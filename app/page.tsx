import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Twitter, Menu } from "lucide-react"
import Link from "next/link"
import { SplashScreen } from "@/components/splash-screen"
import { NewsletterModal } from "@/components/newsletter-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Home() {
  return (
    <>
      <SplashScreen />
      <NewsletterModal />

      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-bold text-foreground">Kaido Village</div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm text-foreground hover:text-accent cursor-pointer">
                  Home
                </Link>
                <Link href="/blog" className="text-sm text-foreground hover:text-accent cursor-pointer">
                  Blog
                </Link>
                <Link href="/contact" className="text-sm text-foreground hover:text-accent cursor-pointer">
                  Contact
                </Link>
              </nav>

              <DropdownMenu>
                <DropdownMenuTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="text-foreground">
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
        <section className="bg-primary text-primary-foreground py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-balance">Work, Live, and Connect in Chiang Mai</h1>
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              Digital nomad-friendly coliving space in the heart of Chiang Mai. Enjoy high-speed internet, a vibrant
              community, and all the amenities you need to work remotely while exploring one of Southeast Asia's most
              charming cities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-accent text-white hover:bg-accent/90 cursor-pointer">Book now</Button>
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent cursor-pointer"
              >
                Learn more
              </Button>
            </div>
          </div>
        </section>

        {/* Discount Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm uppercase tracking-wider mb-4 text-accent">Special</div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">One Month Stay Discount for Digital Nomads</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Stay with us for a month or longer and enjoy exclusive discounts designed for digital nomads. Our
                  long-term rates make it easy to settle in, build connections, and make Chiang Mai your temporary home
                  base while you work remotely.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                    Learn more
                  </Button>
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-muted/20 bg-transparent cursor-pointer"
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="bg-muted/20 aspect-[4/3] rounded-lg flex items-center justify-center border border-border">
                <div className="w-24 h-24 bg-muted/30 rounded flex items-center justify-center">
                  <svg className="w-12 h-12 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Book Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4 text-center">
            <div className="text-sm uppercase tracking-wider mb-4 text-accent">Guide</div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">How to Book Your Perfect Digital Nomad Stay</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Booking is just a few straightforward steps designed to ensure a smooth and easy experience.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Choose Your Room",
                  description: "Search our list of clean and private rooms and shared spaces.",
                },
                {
                  title: "Check Availability",
                  description: "View our calendar and select your dates.",
                },
                {
                  title: "Complete Reservation",
                  description: "Finalize your stay with a quick online checkout.",
                },
              ].map((step, index) => (
                <Card key={index} className="p-6 text-center border-border bg-card">
                  <div className="bg-muted/20 aspect-square rounded-lg mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 bg-muted/30 rounded flex items-center justify-center">
                      <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </Card>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                Book now
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted/20 bg-transparent cursor-pointer"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="text-sm uppercase tracking-wider mb-4 text-accent">Amenities</div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Everything a Digital Nomad Needs</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              We've thought of everything you need to balance work and play. Enjoy top-tier amenities and a supportive
              community.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {[
                {
                  title: "High Speed Internet",
                  description: "Fast and reliable fiber optic WiFi to keep you connected and productive.",
                },
                {
                  title: "Co-Working Space",
                  description: "Dedicated desks and quiet zones designed for focused remote work.",
                },
                {
                  title: "Communal Kitchen",
                  description: "Fully equipped shared kitchen where you can cook and socialize.",
                },
                {
                  title: "Social Events",
                  description: "Regular meetups, workshops, and activities to help you connect with fellow nomads.",
                },
              ].map((amenity, index) => (
                <Card key={index} className="p-6 text-center border-border bg-card">
                  <div className="bg-muted/20 aspect-square rounded-lg mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 bg-muted/30 rounded flex items-center justify-center">
                      <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm">{amenity.description}</p>
                </Card>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                Learn amenities
              </Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-muted/20 bg-transparent cursor-pointer"
              >
                Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4 text-center">
            <div className="text-sm uppercase tracking-wider mb-4 text-accent">Our team</div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Team</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Passionate locals and experienced travelers dedicated to making your stay unforgettable.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Community Manager",
                  description:
                    "Passionate about building connections and creating memorable experiences for digital nomads.",
                },
                {
                  name: "Mike Chen",
                  role: "Operations Director",
                  description: "Experienced in hospitality and committed to smooth operations.",
                },
                {
                  name: "Emma Rodriguez",
                  role: "Guest Experience Lead",
                  description: "Dedicated to ensuring every guest feels at home and supported.",
                },
                {
                  name: "Alex Thompson",
                  role: "Marketing Manager",
                  description: "Spreading the word about our amazing community and space.",
                },
                {
                  name: "Lisa Wu",
                  role: "Events Coordinator",
                  description: "Organizing fun activities and networking opportunities for our community.",
                },
                {
                  name: "David Park",
                  role: "Facilities Manager",
                  description: "Keeping our space clean, comfortable, and well-maintained.",
                },
              ].map((member, index) => (
                <Card key={index} className="p-6 text-center border-border bg-card">
                  <div className="bg-muted/20 aspect-square rounded-lg mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 bg-muted/30 rounded flex items-center justify-center">
                      <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-card-foreground">{member.name}</h3>
                  <p className="text-sm text-accent mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                  <div className="flex gap-3 justify-center">
                    <Link href="#" className="text-muted-foreground hover:text-accent cursor-pointer">
                      <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-accent cursor-pointer">
                      <Twitter className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-accent cursor-pointer">
                      <Facebook className="w-4 h-4" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-foreground">We're Hiring</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our dynamic team and help us create the best coliving experience for digital nomads!
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                View openings
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="mb-6">
              <Twitter className="w-8 h-8 mx-auto text-accent" />
            </div>
            <div className="text-sm uppercase tracking-wider mb-4 text-accent">Window</div>
            <blockquote className="text-2xl font-medium mb-6 leading-relaxed text-foreground">
              "This space transformed my remote work experience. The community is amazing, and Chiang Mai is
              unbeatable."
            </blockquote>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Sarah Chen</p>
              <p>@sarahchen • 3d • Chiang Mai</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Start Your Digital Nomad Journey</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our thriving community of remote workers and experience the perfect blend of productivity and
              adventure in Chiang Mai.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                Book now
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted/20 bg-transparent cursor-pointer"
                >
                  Contact us
                </Button>
              </Link>
            </div>

            <div className="bg-muted/20 aspect-[21/9] rounded-lg max-w-4xl mx-auto flex items-center justify-center border border-border">
              <div className="w-24 h-24 bg-muted/30 rounded flex items-center justify-center">
                <svg className="w-12 h-12 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-xl font-bold mb-4 text-foreground">Kaido Village</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your coliving space in the heart of Chiang Mai. Spaces made for digital nomads.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="text-muted-foreground hover:text-accent cursor-pointer">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-accent cursor-pointer">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/rooms" className="text-muted-foreground hover:text-accent cursor-pointer">
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link href="/amenities" className="text-muted-foreground hover:text-accent cursor-pointer">
                      Amenities
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog" className="text-muted-foreground hover:text-accent cursor-pointer">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-muted-foreground hover:text-accent cursor-pointer">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-accent cursor-pointer">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-muted-foreground hover:text-accent cursor-pointer">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
                <div className="flex gap-3 mb-4">
                  <Link href="#" className="text-muted-foreground hover:text-accent cursor-pointer">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-accent cursor-pointer">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-accent cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-accent cursor-pointer">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>© 2025 Kaido Village. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-accent cursor-pointer">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-accent cursor-pointer">
                  Terms of Service
                </Link>
                <Link href="/cookie-settings" className="hover:text-accent cursor-pointer">
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
