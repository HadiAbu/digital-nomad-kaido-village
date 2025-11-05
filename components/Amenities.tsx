import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Amenities = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="text-sm uppercase tracking-wider mb-4 text-accent">
          Amenities
        </div>
        <h2 className="text-4xl font-bold mb-4 text-foreground">
          Everything a Digital Nomad Needs
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          We've thought of everything you need to balance work and play. Enjoy
          top-tier amenities and a supportive community.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {[
            {
              title: "High Speed Internet",
              description:
                "Fast and reliable fiber optic WiFi to keep you connected and productive.",
            },
            {
              title: "Co-Working Space",
              description:
                "Dedicated desks and quiet zones designed for focused remote work.",
            },
            {
              title: "Communal Kitchen",
              description:
                "Fully equipped shared kitchen where you can cook and socialize.",
            },
            {
              title: "Social Events",
              description:
                "Regular meetups, workshops, and activities to help you connect with fellow nomads.",
            },
          ].map((amenity, index) => (
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
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {amenity.description}
              </p>
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
  );
};

export default Amenities;
