import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  GraduationCap,
  Plane,
  Globe,
  MapPin,
  Settings,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "الرئيسية", icon: null },
    { href: "/search", label: "بحث", icon: Search },
    {
      href: "/scholarships/fully-funded",
      label: "منح دراسية ممولة بالكامل",
      icon: GraduationCap,
    },
    { href: "/scholarships/airfare", label: "منح جوية", icon: Plane },
    { href: "/scholarships/arab", label: "منح عربية", icon: MapPin },
    { href: "/scholarships/foreign", label: "منح أجنبية", icon: Globe },
    { href: "/services", label: "خدمات", icon: Settings },
    { href: "/contact", label: "تواصل معنا", icon: MessageCircle },
  ];

  const whatsappNumber = "+62 859-3241-6084";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s+/g, "").replace("+", "")}`;

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-primary mr-2">
                حلم زول بسيط
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "nav-link px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2",
                      isActive && "text-primary bg-primary/10",
                    )}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <MessageCircle className="w-4 h-4" />
              واتساب
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "nav-link block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2",
                      isActive && "text-primary bg-primary/10",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button w-full justify-center mt-4"
              >
                <MessageCircle className="w-4 h-4" />
                تواصل معنا على واتساب
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
