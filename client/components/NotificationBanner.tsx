import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Bell, Sparkles, Gift, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: "🆕 جديد! محرك التوصيات الذكي - احصل على منح مخصصة لملفك الأكاديمي",
      action: "/recommendations",
      actionText: "جرب الآن",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      icon: <Gift className="w-5 h-5" />,
      text: "🎁 استشارة مجانية! تحدث مع خبرائنا عبر واتساب للحصول على توجيه شخصي",
      action: "https://wa.me/6285932416084",
      actionText: "تحدث معنا",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "⚡ عاجل! آخر موعد للتقديم على 15 منحة ينتهي خلال 30 يوم",
      action: "/search",
      actionText: "اعرض المنح",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "🏆 جديد! اقرأ قصص نجاح 500+ طالب حصلوا على منح مجانية",
      action: "/success-stories",
      actionText: "اقرأ القصص",
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [notifications.length]);

  if (!isVisible) return null;

  const current = notifications[currentNotification];

  return (
    <div
      className={`${current.bgColor} text-white py-3 px-4 relative overflow-hidden`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-white/10 transform -skew-y-1 animate-pulse"></div>

      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 animate-bounce" />
            {current.icon}
          </div>

          <p className="text-sm md:text-base font-medium flex-1">
            {current.text}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {current.action.startsWith("http") ? (
            <a href={current.action} target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                {current.actionText}
              </Button>
            </a>
          ) : (
            <Link to={current.action}>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                {current.actionText}
              </Button>
            </Link>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-white/20 h-8 w-8"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white/50 transition-all duration-8000 ease-linear"
          style={{
            width: `${((currentNotification + 1) / notifications.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default NotificationBanner;
