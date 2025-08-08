import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" aria-label="Lovable home" className="font-bold text-lg tracking-tight">
          Lovable
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#pricing" className="story-link">Pricing</a>
          <a href="#compare" className="story-link">Compare</a>
          <a href="#testimonials" className="story-link">Testimonials</a>
          <a href="#support" className="story-link">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <NavLink to="#" className="hidden md:inline-block">
            <Button variant="outline" size="sm">Sign in</Button>
          </NavLink>
          <a href="#pricing">
            <Button variant="gradient" size="sm" className="hover-scale">Start hourly access</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
