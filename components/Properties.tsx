import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";

const Properties = () => {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 text-center">
        <div className="text-sm uppercase tracking-wider mb-4 text-accent">
          Properties
        </div>
        <h2 className="text-4xl font-bold mb-4 text-foreground">
          Book Your Perfect Digital Nomad Stay
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our unique properties are set up to support the digital nomad
          lifestyle. Key amenities include dedicated high-speed internet and
          quiet workspaces to ensure you stay productive. After a day of focus,
          unwind with ease at the nearby or on-site natural hot springs. Kaido
          integrates your stay with the best of Niigata, from snowy mornings to
          rich local culture.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Kaido Yuzawa",
              description:
                "Onsen hostel within walking distance to ski lifts. Coworking space on site, strong Wi-Fi. Ideal for winter riders and long stays.",
              img: "/homepage/room.jpg",
            },
            {
              title: "Kaido Nomad",
              description:
                "Quiet rooms for focused routines. Strong Wi-Fi, shared kitchen. Your month-long base for deep work",
              img: "/homepage/cowork.jpeg",
            },
            {
              title: "Kaido Urasa",
              description:
                "Countryside rhythm with access to Niigata’s nature.",
              img: "/homepage/country.jpg",
            },
          ].map((step, index) => (
            <Card key={index} className="p-2 text-center border-border bg-card">
              <div className="aspect-square rounded-lg flex items-center justify-center">
                <img
                  className="rounded-lg h-full w-full object-cover"
                  src={step.img}
                  alt="property-picture"
                />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="https://www.nomad-lab.jp/"
            target="_blank"
            rel="noopener hadiabuhamed"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
              Book now
            </Button>
          </Link>
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

export default Properties;
