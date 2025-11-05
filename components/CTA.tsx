import { Button } from "./ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-foreground">
          Start Your Digital Nomad Journey
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our thriving community of remote workers and experience the
          perfect blend of productivity and adventure in Kaido Village.
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
            <svg
              className="w-12 h-12 text-muted-foreground"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
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
  );
};

export default CTA;
