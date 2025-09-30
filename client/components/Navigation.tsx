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
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import AIAssistant from "./AIAssistant";
import NotificationBanner from "./NotificationBanner";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "الرئيسية", icon: null },
    { href: "/search", label: "بحث", icon: Search },
    {
      href: "/scholarships/fully-funded",
      label: "منح ممولة بالكامل",
      icon: GraduationCap,
    },
    { href: "/scholarships/airfare", label: "منح جوية", icon: Plane },
    { href: "/scholarships/arab", label: "منح عربية", icon: MapPin },
    { href: "/scholarships/foreign", label: "منح أجنبية", icon: Globe },
    { href: "/services", label: "خدمات", icon: Settings },
    { href: "/contact", label: "تواصل معنا", icon: MessageCircle },
  ];

  const moreItems = [
    { href: "/explore", label: "🌍 استكشاف المنح", icon: "🗺️" },
    { href: "/recommendations", label: "🤖 توصيات ذكية", icon: "🧠" },
    { href: "/tracker", label: "📊 متابع الطلبات", icon: "📈" },
    { href: "/success-stories", label: "🏆 قصص النجاح", icon: "✨" },
    { href: "/blog", label: "📚 مدونة المنح", icon: "💡" },
  ];

  const whatsappNumber = "+62 859-3241-6084";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s+/g, "").replace("+", "")}`;

  return (
    <>
      <NotificationBanner />
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

                {/* More Items Dropdown */}
                <div className="relative group">
                  <button className="nav-link px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    المزيد
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div className="py-2">
                      {moreItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          <span className="text-lg">{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
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
                size="lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3"
              >
                {isMobileMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-border">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "nav-link block px-4 py-4 rounded-lg text-lg font-medium flex items-center gap-3 transition-all hover:bg-primary/5",
                        isActive && "text-primary bg-primary/10",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      {item.label}
                    </Link>
                  );
                })}

                {/* Mobile More Items */}
                <div className="border-t border-border pt-4 mt-6">
                  <div className="text-sm font-semibold text-muted-foreground px-4 mb-3">
                    مميزات إضافية
                  </div>
                  {moreItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="nav-link block px-4 py-4 rounded-lg text-lg font-medium flex items-center gap-3 transition-all hover:bg-primary/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile WhatsApp Button */}
                <div className="pt-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button w-full justify-center py-4 text-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    تواصل معنا على واتساب
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <AIAssistant />
    </>
  );
};

export default Navigation;
