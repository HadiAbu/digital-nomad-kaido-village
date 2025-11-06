"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    // { name: "Blog", href: "/blog" },
    // { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="border-b border-[#25483B]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#171F29]">
          Kaido Village
        </Link>

        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm ${
                pathname === item.href
                  ? "text-[#913d16] font-semibold"
                  : "text-[#171F29] hover:text-[#913d16]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Mobile Navigation Dropdown Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#171F29]">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navItems.map((item) => (
                <DropdownMenuItem asChild key={item.name}>
                  <Link
                    href={item.href}
                    className={`w-full cursor-pointer ${
                      pathname === item.href ? "font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
