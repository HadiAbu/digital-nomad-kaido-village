import { Twitter } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="mb-6">
          <Twitter className="w-8 h-8 mx-auto text-accent" />
        </div>
        <div className="text-sm uppercase tracking-wider mb-4 text-accent">
          Window
        </div>
        <blockquote className="text-2xl font-medium mb-6 leading-relaxed text-foreground">
          "This space transformed my remote work experience. The community is
          amazing, and Chiang Mai is unbeatable."
        </blockquote>
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Sarah Chen</p>
          <p>@sarahchen • 3d • Chiang Mai</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
