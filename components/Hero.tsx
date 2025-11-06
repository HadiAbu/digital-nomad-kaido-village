import { Button } from "./ui/button";
import Link from "next/link";

// Renamed from App to Hero, set up for default export in a Next.js context.
const Hero = () => {
  const imageUrl = "/homepage/hero.jpg";

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <section
        className="relative py-32 md:py-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center max-w-4xl text-white z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight text-balance">
            Live & Work in Echigo-Yuzawa <br className="hidden sm:block" />
            Curated for digital nomads
          </h1>
          <p className="text-lg md:text-xl mb-10 leading-relaxed font-light">
            Kaido is a small network of nomad-friendly stays in Niigata, Japan,
            designed for long stays that balance productivity and play. Wake up
            to snow, focus in calm coworking spaces, and wind down in hot
            springs and local culture.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link href="https://www.nomad-lab.jp/en">
              <Button className="bg-orange-500 text-white hover:bg-orange-600 ring-2 ring-orange-500 hover:ring-orange-600">
                Book now
              </Button>
            </Link>
            <Link href="https://www.nomad-lab.jp/en/about">
              <Button className="border-2 border-white text-white hover:bg-white/20 bg-transparent ring-2 ring-transparent">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
