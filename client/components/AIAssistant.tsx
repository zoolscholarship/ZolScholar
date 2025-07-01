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
        "أهلاً وسهلاً! 👋 أنا مساعدك الذكي في موقع 'حلم زول بسيط'. يمكنني الإجابة على أسئلتك حول المنح الدراسية، التقديم، المستندات، والخدمات. اسأل أي شيء! 🎓✨",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickSuggestions = [
    {
      text: "🎓 ما هي أفضل منح متاحة؟",
      action: "منح",
      type: "question",
    },
    {
      text: "📝 كيف أكتب رسالة دافع؟",
      action: "رسالة دافع",
      type: "question",
    },
    {
      text: "🌍 أريد منح في ألمانيا",
      action: "ألمانيا",
      type: "question",
    },
    {
      text: "⏰ ما هي المواعيد المهمة؟",
      action: "مواعيد",
      type: "question",
    },
    {
      text: "🛠️ ما هي خدماتكم؟",
      action: "خدمات",
      type: "question",
    },
    {
      text: "💬 تحدث مع خبير",
      action: "https://wa.me/6285932416084",
      type: "link",
    },
  ];

  const handleQuickSuggestion = (suggestion: any) => {
    if (suggestion.type === "question") {
      setInputValue(suggestion.action);
      // Auto-send the question
      setTimeout(() => {
        const newMessages = [
          ...messages,
          { type: "user", content: suggestion.action },
        ];
        setMessages(newMessages);

        setTimeout(() => {
          const aiResponse = getAIResponse(suggestion.action);
          setMessages((prev) => [
            ...prev,
            { type: "bot", content: aiResponse },
          ]);
        }, 1000);
      }, 100);
    } else if (suggestion.type === "link") {
      window.open(suggestion.action, "_blank");
    }
  };

  // AI Knowledge Base
  const knowledgeBase = {
    // أسئلة عن المنح الدراسية
    scholarships: {
      keywords: [
        "منحة",
        "منح",
        "دراسة",
        "تعليم",
        "جامعة",
        "كلية",
        "بكالوريوس",
        "ماجستير",
        "دكتوراه",
      ],
      responses: [
        "🎓 لدينا أكثر من 200 منحة دراسية متاحة من 12 دولة مختلفة! يمكنك البحث عنها في صفحة البحث أو الحصول على توصيات مخصصة عبر محرك التوصيات الذكي.",
        "📚 نقدم منح ممولة بالكامل ومنح جزئية من السعودية، الإمارات، تركيا، ألمانيا، كندا، أستراليا واليابان وغيرها. ما هو مجال دراستك المفضل؟",
        "🌍 هل تبحث عن منح في دولة معينة؟ لدينا منح عربية وأجنبية متنوعة. استخدم فلاتر البحث لتضييق النتائج حسب احتياجاتك!",
      ],
    },

    // أسئلة عن التقديم والمستندات
    application: {
      keywords: [
        "تقديم",
        "طلب",
        "مستندات",
        "أوراق",
        "سيرة ذاتية",
        "رسالة دافع",
        "cv",
        "motivation",
      ],
      responses: [
        "📝 نساعدك في تجهيز جميع المستندات المطلوبة! نقدم خدمات كتابة السيرة الذاتية، رسالة الدافع، وترجمة المستندات. تحدث معنا عبر واتساب للتفاصيل.",
        "✅ المستندات الأساسية عادة تشمل: السيرة الذاتية، رسالة الدافع، كشف الدرجات، شهادة اللغة، وخطابات التوصية. يمكننا مساعدتك في تحضيرها جميعاً!",
        "📊 استخدم متابع الطلبات لتنظيم مستنداتك ومتابعة حالة كل طلب. سيذكرك بالمواعيد المهمة ويظهر لك الخطوات القادمة.",
      ],
    },

    // أسئلة عن المواعيد والشروط
    deadlines: {
      keywords: ["موعد", "مدة", "شروط", "متطلبات", "deadline", "requirements"],
      responses: [
        "⏰ مواعيد المنح تختلف حسب الدولة والجامعة. معظم المنح الأوروبية مواعيدها في فبراير-مارس، والأمريكية في أكتوبر-ديسمبر. تحقق من صفحة البحث للمواعيد المحدثة!",
        "📅 عادة ننصح بالبدء في التحضير قبل 6 أشهر من الموعد النهائي. الشروط تختلف لكن غالباً تتطلب معدل جيد، شهادة لغة، ورسالة دافع قوية.",
        "🎯 لضمان عدم فوات أي موعد، استخدم متابع الطلبات الذي سيرسل لك تذكيرات تلقائية قبل انتهاء المواعيد بوقت كافٍ.",
      ],
    },

    // أسئلة عن البلدان
    countries: {
      keywords: [
        "ألمانيا",
        "كندا",
        "أستراليا",
        "تركيا",
        "السعودية",
        "الإمارات",
        "أمريكا",
        "بريطانيا",
        "فرنسا",
        "اليابان",
      ],
      responses: [
        "🌍 كل دولة لها مميزاتها! ألمانيا مجانية التعليم، كندا تقدم ��قامة دائمة، تركيا قريبة ثقافياً، والسعودية والإمارات تقدم منح سخية للعرب. ما هي أولوياتك؟",
        "🇩🇪 ألمانيا: تعليم مجاني + راتب شهري | 🇨🇦 كندا: منح + إقامة دائمة | 🇹🇷 تركيا: منح شاملة + قرب ثقافي | 🇸🇦 السعودية: منح سخية للعرب",
        "💡 أنصحك باستخدام محرك التوصيات الذكي! سيحلل ملفك ويقترح عليك أفضل الدول والمنح المناسبة لظروفك الشخصية والأكاديمية.",
      ],
    },

    // أسئلة عن الخدمات
    services: {
      keywords: ["خدمة", "خدمات", "مساعدة", "سعر", "تكلفة", "واتساب"],
      responses: [
        "🛠️ نقدم خدمات شاملة: كتابة سيرة ذاتية احترافية، رسالة دافع مقنعة، ترجمة مستندات، تدريب على المقابلات، واستشارات شخصية. تواصل معنا عبر واتساب للتفاصيل والأسعار!",
        "💬 جميع خدماتنا متوفرة عبر واتساب! نبدأ بالاستشارة المجانية لفهم احتياجاتك، ثم نضع خطة عمل مخصصة لك. رقمنا: +62 859-3241-6084",
        "⭐ نفتخر بمعدل نجاح 95% للطلاب الذين استخدموا خدماتنا! اقرأ قصص النجاح لترى كيف ساعدنا أكثر من 500 طالب في الحصول على منح.",
      ],
    },

    // أسئلة عامة
    general: {
      keywords: ["مين", "إيه", "كيف", "ليه", "أسامة", "زول بسيط", "مجاني"],
      responses: [
        "👋 أهلاً! أنا المساعد الذكي لموقع 'حلم زول بسيط' الذي أسسه أسامة من السودان. هدفنا مساعدة الطلاب العرب، خاصة السودانيين، في الحصول على منح دراسية مجانية.",
        "💝 'حلم زول بسيط' ليس مجرد موقع، إنه رسالة أمل! أسامة مر بنفس الصعوبات وحصل على منح، والآن يساعد غيره. كل الخدمات الأساسية مجانية من القلب للقلب.",
        "🎯 نختلف عن المواقع الأخرى لأننا نقدم متابعة شخصية، توصيات ذكية، وخدمات شاملة. هدفنا نجاحك، ليس الربح!",
      ],
    },
  };

  const getAIResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();

    // البحث عن الكلمات المفتاحية في رسالة المستخدم
    for (const [category, data] of Object.entries(knowledgeBase)) {
      for (const keyword of data.keywords) {
        if (message.includes(keyword.toLowerCase())) {
          const responses = data.responses;
          return responses[Math.floor(Math.random() * responses.length)];
        }
      }
    }

    // إجابات عامة إذا لم يجد كلمات مفتاحية محددة
    const defaultResponses = [
      "🤔 سؤال مثير للاهتمام! دعني أحيلك لخبرائنا عبر واتساب للحصول على إجابة مفصلة ودقيقة. هم متخصصون وجاهزون لمساعدتك!",
      "💡 يمكنني مساعدتك أكثر إذا كان سؤالك عن المنح الدراسية، التقديم، أو خدماتنا. أو تواصل مع فريقنا مباشرة عبر واتساب للحصول على إجابة شاملة!",
      "🔍 استخدم كلمات أكثر تحديداً مثل 'منح ألمانيا' أو 'كيف أكتب رسالة دافع' لأتمكن من مساعدتك بشكل أفضل. أو جرب محرك التوصيات الذكي!",
      "📚 يمكنك أيضاً زيارة مدونة المنح للحصول على مقالات مفصلة عن كل ما يخص المنح الدراسية والتقديم!",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: "user", content: inputValue }];
    setMessages(newMessages);

    // Generate intelligent AI response
    setTimeout(() => {
      const aiResponse = getAIResponse(inputValue);
      setMessages((prev) => [...prev, { type: "bot", content: aiResponse }]);
    }, 1000);

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
                      أسئلة شائعة يمكنني مساعدتك فيها:
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {quickSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickSuggestion(suggestion)}
                          className="text-right p-2 text-xs bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors"
                        >
                          {suggestion.text}
                        </button>
                      ))}
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
