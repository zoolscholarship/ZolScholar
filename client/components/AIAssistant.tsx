import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  X,
  Send,
  Brain,
  Sparkles,
  HelpCircle,
  Search,
  FileText,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "مرحباً! 👋 أنا مساعدك الذكي في رحلة البحث عن المنح الدراسية. كيف يمكنني مساعدتك اليوم؟",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickSuggestions = [
    {
      text: "🎯 احصل على توصيات ذكية",
      action: "/recommendations",
      icon: Brain,
    },
    {
      text: "📊 تتبع طلباتي",
      action: "/tracker",
      icon: FileText,
    },
    {
      text: "🔍 ابحث عن منح",
      action: "/search",
      icon: Search,
    },
    {
      text: "💬 تحدث مع خبير",
      action: "https://wa.me/6285932416084",
      icon: MessageCircle,
    },
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: "user", content: inputValue }];

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "بناءً على سؤالك، أنصحك بزيارة صفحة التوصيات الذكية للحصول على منح مخصصة لملفك الأكاديمي. 🎯",
        "يمكنني مساعدتك في العثور على أفضل المنح! دعني أحللك على صفحة البحث المتقدم. 🔍",
        "هذا سؤال رائع! أقترح عليك التحدث مع أحد خبرائنا عبر واتساب للحصول على إجابة مفصلة. 💬",
        "لدينا أدوات رائعة لمساعدتك! جرب متابع الطلبات لتنظيم رحلتك الأكاديمية. 📊",
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      setMessages((prev) => [
        ...prev,
        { type: "bot", content: randomResponse },
      ]);
    }, 1000);

    setMessages(newMessages);
    setInputValue("");
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 left-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-2xl animate-bounce"
            size="icon"
          >
            <Brain className="w-8 h-8 text-white" />
          </Button>
        )}
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50">
          <Card className="w-80 h-96 shadow-2xl border-2 border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">🤖 المساعد الذكي</CardTitle>
                    <p className="text-xs opacity-90">متاح الآن</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex flex-col h-80">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-gray-100 text-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {/* Quick Suggestions */}
                {messages.length === 1 && (
                  <div className="space-y-2 mt-4">
                    <p className="text-xs text-muted-foreground text-center">
                      اختر من الخيارات السريعة:
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {quickSuggestions.map((suggestion, index) => {
                        const Icon = suggestion.icon;
                        return suggestion.action.startsWith("http") ? (
                          <a
                            key={index}
                            href={suggestion.action}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-2 text-xs bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors"
                          >
                            <Icon className="w-4 h-4 text-purple-500" />
                            {suggestion.text}
                          </a>
                        ) : (
                          <Link
                            key={index}
                            to={suggestion.action}
                            className="flex items-center gap-2 p-2 text-xs bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="w-4 h-4 text-purple-500" />
                            {suggestion.text}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="اكتب سؤالك هنا..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  مدعوم بالذكاء الاصطناعي 🤖
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
