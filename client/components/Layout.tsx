import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X, ArrowRight, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-primary hover:opacity-80 transition-opacity">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-white">
                <Wallet className="h-5 w-5" />
              </div>
              <span className="hidden sm:inline">FinVault</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Features
            </Link>
            <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Services
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Pricing
            </Link>
            <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Blog
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild className="font-medium">
              <Link to="/login">Log in</Link>
            </Button>
            <Button size="sm" className="gap-2 rounded-full font-semibold bg-gradient-to-r from-primary to-emerald-500 hover:opacity-90" asChild>
              <Link to="/login">Sign Up <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background animate-fade-in-up">
            <div className="p-4 flex flex-col gap-3">
              <Link to="/features" className="text-sm font-medium px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link to="/services" className="text-sm font-medium px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/pricing" className="text-sm font-medium px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/blog" className="text-sm font-medium px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/about" className="text-sm font-medium px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <hr className="my-2" />
              <Button variant="ghost" className="justify-start px-2 font-medium" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button className="w-full gap-2 rounded-full font-semibold bg-gradient-to-r from-primary to-emerald-500 hover:opacity-90" asChild>
                <Link to="/login">Sign Up <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 animate-fade-in-up">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-50 dark:bg-slate-950/50 mt-24">
        <div className="container py-16 md:py-20 space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 space-y-4">
              <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-primary">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-white">
                  <Wallet className="h-5 w-5" />
                </div>
                <span>FinVault</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Empowering your financial future with smart, secure, and intuitive wealth management tools. Take control today.
              </p>
              <div className="flex gap-3 pt-2">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider">Product</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><Link to="/features" className="hover:text-primary transition-colors duration-200">Features</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors duration-200">Services</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors duration-200">Pricing</Link></li>
                <li><Link to="/case-studies" className="hover:text-primary transition-colors duration-200">Case Studies</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors duration-200">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-primary transition-colors duration-200">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-primary transition-colors duration-200">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-primary transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors duration-200">Terms of Service</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors duration-200">FAQ</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors duration-200">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} FinVault Inc. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <span>🏴󠁧󠁢󠁥󠁮󠁧󠁿 English</span>
                <span>Secured with 🔒 Bank-level encryption</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
