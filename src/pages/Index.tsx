import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      {/* Rating badges */}
      <div className="mb-8 flex items-center gap-6">
        <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium">
          <span className="text-base">G</span>
          <span className="font-semibold text-foreground">4.8</span>
          <span className="text-amber-400">★★★★★</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium">
          <span className="text-base">✈</span>
          <span className="font-semibold text-foreground">4.9</span>
          <span className="text-amber-400">★★★★★</span>
        </div>
      </div>

      {/* Hero heading */}
      <h1 className="max-w-3xl text-center text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
        Find any lead's email & phone
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-xl text-center text-lg text-muted-foreground">
        Build lead lists from{" "}
        <span className="font-medium underline decoration-foreground/40 underline-offset-4 text-foreground">
          anywhere online
        </span>{" "}
        and enrich your existing database in one click.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex items-center gap-4">
        <Button size="lg" className="rounded-full px-8 text-base font-semibold">
          Sign up for free <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full px-8 text-base font-semibold">
          Get a demo
        </Button>
      </div>
    </div>
  );
};

export default Index;
