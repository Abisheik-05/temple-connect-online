import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Temple", href: "/about" },
    { name: "Deity Information", href: "/deity" },
    { name: "Services & Sevas", href: "/services" },
    { name: "Accommodations", href: "/accommodations" },
  ];

  const serviceLinks = [
    { name: "Book Darshan", href: "/services" },
    { name: "Online Donations", href: "/donations" },
    { name: "Temple Events", href: "/events" },
    { name: "Photo Gallery", href: "/gallery" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-divine rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">ॐ</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground">
                Sri Srisaila Devasthanam
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A sacred abode of divine spirituality, offering devotees a serene
              environment for worship, meditation, and spiritual growth.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Serving devotees with devotion</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Srisailam, Andhra Pradesh, India - 518102
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+91 8512-287-333</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@srisailadevasthanam.org</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>Daily: 4:00 AM - 10:00 PM</div>
                  <div>Special occasions: 24 hours</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Sri Srisaila Devasthanam. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;