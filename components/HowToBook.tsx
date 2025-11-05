import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";

const HowToBook = () => {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 text-center">
        <div className="text-sm uppercase tracking-wider mb-4 text-accent">
          Guide
        </div>
        <h2 className="text-4xl font-bold mb-4 text-foreground">
          How to Book Your Perfect Digital Nomad Stay
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Booking is just a few straightforward steps designed to ensure a
          smooth and easy experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Choose Your Room",
              description:
                "Search our list of clean and private rooms and shared spaces.",
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
                  <svg
                    className="w-8 h-8 text-muted-foreground"
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
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
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
  );
};

export default HowToBook;
