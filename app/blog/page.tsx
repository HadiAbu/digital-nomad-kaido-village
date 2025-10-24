import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Facebook, Instagram, Linkedin, Twitter, Menu } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "10 Tips for Digital Nomads in Chiang Mai",
      excerpt:
        "Discover the best practices for living and working remotely in one of Southeast Asia's most popular digital nomad destinations.",
      date: "March 15, 2025",
      author: "Sarah Johnson",
      category: "Lifestyle",
    },
    {
      id: 2,
      title: "How to Stay Productive While Traveling",
      excerpt:
        "Learn effective strategies to maintain your work-life balance and productivity while exploring new places as a digital nomad.",
      date: "March 10, 2025",
      author: "Mike Chen",
      category: "Productivity",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Coworking Spaces",
      excerpt:
        "Everything you need to know about choosing the right coworking space for your remote work needs and networking opportunities.",
      date: "March 5, 2025",
      author: "Emma Rodriguez",
      category: "Work",
    },
  ]

  return (
    <div className="min-h-screen bg-[#DFE5E8]">
      {/* Header */}
      <header className="border-b border-[#25483B]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#171F29]">
            Kaido Village
          </Link>
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            <Link href="/" className="text-sm text-[#171F29] hover:text-[#913d16]">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-[#913d16] font-semibold">
              Blog
            </Link>
            <Link href="/contact" className="text-sm text-[#171F29] hover:text-[#913d16]">
              Contact
            </Link>
          </nav>
          {/* Mobile navigation dropdown menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#171F29]">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/" className="w-full cursor-pointer">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog" className="w-full cursor-pointer font-semibold">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="w-full cursor-pointer">
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#171F29] py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 text-[#DFE5E8]">Blog</h1>
          <p className="text-lg text-[#DFE5E8] leading-relaxed">
            Stories, tips, and insights from the digital nomad community at Kaido Village
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden border-[#25483B] bg-white hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#25483B] aspect-[16/9] flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#171F29] rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#DFE5E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[#913d16] mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold mb-3 text-[#171F29]">{article.title}</h3>
                  <p className="text-[#70473D] text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-[#70473D]">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-transparent border-[#913d16] text-[#913d16] hover:bg-[#913d16] hover:text-white"
                  >
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#25483B] py-12 bg-[#171F29]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4 text-[#DFE5E8]">Kaido Village</div>
              <p className="text-sm text-[#DFE5E8] leading-relaxed">
                Your coliving space in the heart of Chiang Mai. Spaces made for digital nomads.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#DFE5E8]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-[#DFE5E8] hover:text-[#913d16]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#DFE5E8] hover:text-[#913d16]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#DFE5E8] hover:text-[#913d16]">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#DFE5E8] hover:text-[#913d16]">
                    Amenities
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#DFE5E8]">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-[#DFE5E8] hover:text-[#913d16]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#DFE5E8] hover:text-[#913d16]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#DFE5E8] hover:text-[#913d16]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#DFE5E8] hover:text-[#913d16]">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#DFE5E8]">Connect</h4>
              <div className="flex gap-3 mb-4">
                <Link href="#" className="text-[#DFE5E8] hover:text-[#913d16]">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-[#DFE5E8] hover:text-[#913d16]">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-[#DFE5E8] hover:text-[#913d16]">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-[#DFE5E8] hover:text-[#913d16]">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-[#25483B] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#DFE5E8]">
            <p>© 2025 Kaido Village. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[#913d16]">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#913d16]">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-[#913d16]">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
