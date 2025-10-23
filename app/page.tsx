import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">Zego</div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm hover:text-gray-600">
              Home
            </Link>
            <Link href="#" className="text-sm hover:text-gray-600">
              Blog
            </Link>
            <Link href="#" className="text-sm hover:text-gray-600">
              Contact
            </Link>
            <Link href="#" className="text-sm hover:text-gray-600">
              Support
            </Link>
          </nav>
          <Button className="bg-black text-white hover:bg-gray-800">Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-400 text-white py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 text-balance">work, live, and connect in chiang mai</h1>
          <p className="text-lg mb-8 leading-relaxed">
            Digital nomad-friendly coliving space in the heart of Chiang Mai. Enjoy high-speed internet, a vibrant
            community, and all the amenities you need to work remotely while exploring one of Southeast Asia's most
            charming cities.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-100">Book now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm uppercase tracking-wider mb-4">Special</div>
              <h2 className="text-4xl font-bold mb-6">one month stay discount for digital nomads</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stay with us for a month or longer and enjoy exclusive discounts designed for digital nomads. Our
                long-term rates make it easy to settle in, build connections, and make Chiang Mai your temporary home
                base while you work remotely.
              </p>
              <div className="flex gap-4">
                <Button className="bg-black text-white hover:bg-gray-800">Learn more</Button>
                <Button variant="outline">Apply</Button>
              </div>
            </div>
            <div className="bg-gray-200 aspect-[4/3] rounded-lg flex items-center justify-center">
              <div className="w-24 h-24 bg-gray-300 rounded flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm uppercase tracking-wider mb-4">Guide</div>
          <h2 className="text-4xl font-bold mb-4">how to book your perfect digital nomad stay</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Booking is just a few straightforward steps designed to ensure a smooth and easy experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "choose your room",
                description: "Search our list of clean and private rooms and shared spaces.",
              },
              {
                title: "check availability",
                description: "View our calendar and select your dates.",
              },
              {
                title: "complete reservation",
                description: "Finalize your stay with a quick online checkout.",
              },
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center border-gray-200">
                <div className="bg-gray-200 aspect-square rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800">Book now</Button>
            <Button variant="outline">Contact</Button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm uppercase tracking-wider mb-4">Amenities</div>
          <h2 className="text-4xl font-bold mb-4">everything a digital nomad needs</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We've thought of everything you need to balance work and play. Enjoy top-tier amenities and a supportive
            community.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "high speed internet",
                description: "Fast and reliable fiber optic WiFi to keep you connected and productive.",
              },
              {
                title: "co-working space",
                description: "Dedicated desks and quiet zones designed for focused remote work.",
              },
              {
                title: "communal kitchen",
                description: "Fully equipped shared kitchen where you can cook and socialize.",
              },
              {
                title: "social events",
                description: "Regular meetups, workshops, and activities to help you connect with fellow nomads.",
              },
            ].map((amenity, index) => (
              <Card key={index} className="p-6 text-center border-gray-200">
                <div className="bg-gray-200 aspect-square rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{amenity.title}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </Card>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800">Learn amenities</Button>
            <Button variant="outline">Gallery</Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm uppercase tracking-wider mb-4">Our team</div>
          <h2 className="text-4xl font-bold mb-4">our team</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Passionate locals and experienced travelers dedicated to making your stay unforgettable.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "sarah johnson",
                role: "Community Manager",
                description:
                  "Passionate about building connections and creating memorable experiences for digital nomads.",
              },
              {
                name: "mike chen",
                role: "Operations Director",
                description: "Experienced in hospitality and committed to smooth operations.",
              },
              {
                name: "emma rodriguez",
                role: "Guest Experience Lead",
                description: "Dedicated to ensuring every guest feels at home and supported.",
              },
              {
                name: "alex thompson",
                role: "Marketing Manager",
                description: "Spreading the word about our amazing community and space.",
              },
              {
                name: "lisa wu",
                role: "Events Coordinator",
                description: "Organizing fun activities and networking opportunities for our community.",
              },
              {
                name: "david park",
                role: "Facilities Manager",
                description: "Keeping our space clean, comfortable, and well-maintained.",
              },
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center border-gray-200">
                <div className="bg-gray-200 aspect-square rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex gap-3 justify-center">
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Twitter className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Facebook className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">we're hiring</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our dynamic team and help us create the best coliving experience for digital nomads!
            </p>
            <Button className="bg-black text-white hover:bg-gray-800">View openings</Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="mb-6">
            <Twitter className="w-8 h-8 mx-auto text-gray-400" />
          </div>
          <div className="text-sm uppercase tracking-wider mb-4">Window</div>
          <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
            "This space transformed my remote work experience. The community is amazing, and Chiang Mai is unbeatable."
          </blockquote>
          <div className="text-sm text-gray-600">
            <p className="font-semibold">Sarah Chen</p>
            <p>@sarahchen • 3d • Chiang Mai</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">start your digital nomad journey</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our thriving community of remote workers and experience the perfect blend of productivity and adventure
            in Chiang Mai.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button className="bg-black text-white hover:bg-gray-800">Book now</Button>
            <Button variant="outline">Contact us</Button>
          </div>

          <div className="bg-gray-200 aspect-[21/9] rounded-lg max-w-4xl mx-auto flex items-center justify-center">
            <div className="w-24 h-24 bg-gray-300 rounded flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
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
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4">Zego</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your coliving space in the heart of Chiang Mai. Spaces made for digital nomads.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Amenities
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3 mb-4">
                <Link href="#" className="text-gray-600 hover:text-black">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2025 Zego. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-black">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-black">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-black">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
