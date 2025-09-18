import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Calendar, Home, LogOut, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { AuthDialog } from "@/components/auth/AuthDialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut, loading } = useAuth();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Temple", href: "/about" },
    { name: "Deity Info", href: "/deity" },
    { name: "Services", href: "/services" },
    { name: "Accommodations", href: "/accommodations" },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-divine rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ॐ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold text-foreground">
                Sri Srisaila Devasthanam
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link to="/services">Book Darshan</Link>
            </Button>
            <Button asChild size="sm" className="btn-divine">
              <Link to="/donations">
                <Heart className="w-4 h-4 mr-1" />
                Donate
              </Link>
            </Button>
            
            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <User className="w-4 h-4 mr-1" />
                      {user.email}
                    </Button>
                    <Button
                      onClick={signOut}
                      variant="outline"
                      size="sm"
                    >
                      <LogOut className="w-4 h-4 mr-1" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <AuthDialog>
                    <Button size="sm" variant="outline">
                      Sign In
                    </Button>
                  </AuthDialog>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services" onClick={() => setIsOpen(false)}>
                      Book Darshan
                    </Link>
                  </Button>
                  <Button asChild className="w-full btn-divine">
                    <Link to="/donations" onClick={() => setIsOpen(false)}>
                      <Heart className="w-4 h-4 mr-1" />
                      Donate
                    </Link>
                  </Button>
                  
                  {!loading && (
                    <>
                      {user ? (
                        <div className="space-y-2">
                          <Button variant="ghost" className="w-full justify-start">
                            <User className="w-4 h-4 mr-2" />
                            {user.email}
                          </Button>
                          <Button
                            onClick={() => {
                              signOut();
                              setIsOpen(false);
                            }}
                            variant="outline"
                            className="w-full"
                          >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out
                          </Button>
                        </div>
                      ) : (
                        <AuthDialog>
                          <Button variant="outline" className="w-full">
                            Sign In
                          </Button>
                        </AuthDialog>
                      )}
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;