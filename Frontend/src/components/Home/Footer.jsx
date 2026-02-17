import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-muted/40">
      <div className="container mx-auto flex items-center justify-between py-6">
        
        {/* Left side */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">JobliFy</h3>
          <p className="text-sm text-muted-foreground">
            © 2026 Your Company. All rights reserved.
          </p>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="p-2 rounded-md hover:bg-muted transition"
          >
            <Facebook className="h-5 w-5" />
          </a>

          <a
            href="#"
            className="p-2 rounded-md hover:bg-muted transition"
          >
            <Twitter className="h-5 w-5" />
          </a>

          <a
            href="#"
            className="p-2 rounded-md hover:bg-muted transition"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
