import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      {/* Social proof badge */}
      <div className="mb-6 flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-3.5 py-1.5 shadow-sm">
        {/* Logos */}
        <div className="flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" fill="#FF492C" />
            <text x="5.5" y="14.5" fontSize="12" fontWeight="bold" fill="white">G</text>
            <text x="10.5" y="10" fontSize="6" fontWeight="bold" fill="white">2</text>
          </svg>
          <svg width="16" height="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
          </svg>
        </div>

        {/* Rating */}
        <span className="text-sm font-bold text-foreground">4.9</span>

        {/* Stars */}
        <div className="flex items-center gap-0.5 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Separator */}
        <div className="mx-0.5 h-4 w-px bg-border" />

        {/* User count */}
        <span className="text-xs font-medium text-muted-foreground">35,000+ users</span>
      </div>

      {/* Hero heading */}
      <h1 className="max-w-3xl text-center text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
        Find <span style={{ color: '#3C73E7' }}>any lead's</span> email & phone, <span style={{ color: '#3C73E7' }}>anywhere</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-3xl text-center text-lg text-muted-foreground">
        Find 80%+ of your leads’ verified emails and mobile numbers, anywhere, worldwide, in one click. Stop losing deals because you couldn’t reach them.
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
