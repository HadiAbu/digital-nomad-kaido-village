import React from "react";
import { Button } from "./ui/button";

const Discount = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm uppercase tracking-wider mb-4 text-accent">
              Special
            </div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              One Month Stay Discount for Digital Nomads
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Stay with us for a month or longer and enjoy exclusive discounts
              designed for digital nomads. Our long-term rates make it easy to
              settle in, build connections, and make Kaido Village your
              temporary home base while you work remotely.
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
          <div className="bg-muted/20  rounded-lg flex items-center justify-center border border-border">
            <img
              className="rounded-lg"
              src="/homepage/co-work-2.png"
              alt="discount"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
