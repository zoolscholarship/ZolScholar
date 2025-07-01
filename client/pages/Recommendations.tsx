import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Target,
  GraduationCap,
  Sparkles,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  ExternalLink,
  MessageCircle,
  Star,
  Zap,
} from "lucide-react";

export default function Recommendations() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    field: "",
    level: "",
    country: "",
    language: "",
    gpa: "",
    budget: "",
  });
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    {
      title: "مجال الدراسة",
      field: "field",
      options: [
        "الهندسة",
        "الطب",
        "العلوم",
        "الأدب",
        "الاقتصاد",
        "التكنولوجيا",
        "الفنون",
        "أخرى",
      ],
    },
    {
      title: "المستوى الدراسي",
      field: "level",
      options: ["بكالوريوس", "ماجستير", "دكتوراه", "دبلوم"],
    },
    {
      title: "الد��لة المفضلة",
      field: "country",
      options: [
        "أمريكا",
        "ألمانيا",
        "كندا",
        "أستراليا",
        "بريطانيا",
        "فرنسا",
        "اليابان",
        "لا يهم",
      ],
    },
    {
      title: "مستوى اللغة",
      field: "language",
      options: ["ممتاز", "جيد جداً", "جيد", "متوسط"],
    },
  ];

  const generateRecommendations = () => {
    setIsGenerating(true);

    // Simulate AI processing
    setTimeout(() => {
      const mockRecommendations = [
        {
          title: "منحة DAAD الألمانية",
          match: 95,
          country: "ألمانيا",
          level: "ماجستير",
          funding: "ممولة بالكامل",
          deadline: "مارس 2025",
          reasons: ["مجالك متاح", "مستوى اللغة مناسب", "معدل القبول عالي"],
          image:
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=200&fit=crop",
          applyLink: "https://www.daad.de/en/",
        },
        {
          title: "منحة Fulbright الأمريكية",
          match: 88,
          country: "أمريكا",
          level: "ماجستير",
          funding: "ممولة بالكامل",
          deadline: "أكتوبر 2024",
          reasons: [
            "مجال دراستك مطلوب",
            "برنامج التبادل الثقافي",
            "دعم البحث العلمي",
          ],
          image:
            "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=200&fit=crop",
          applyLink: "https://www.fulbright.org/",
        },
        {
          title: "منحة الحكومة الكندية",
          match: 82,
          country: "كندا",
          level: "ماجستير",
          funding: "ممولة بالكامل",
          deadline: "يناير 2025",
          reasons: [
            "سياسة الهجرة المفتوحة",
            "جودة التعليم العالية",
            "فرص عمل ممتازة",
          ],
          image:
            "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=200&fit=crop",
          applyLink: "https://www.scholarships-bourses.gc.ca/",
        },
      ];

      setRecommendations(mockRecommendations);
      setIsGenerating(false);
    }, 3000);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendations();
    }
  };

  const handleOptionSelect = (value: string) => {
    const field = steps[currentStep].field;
    setUserData({ ...userData, [field]: value });
  };

  if (recommendations.length > 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              🎯 توصياتك الذكية
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              بناءً على معلوماتك، وجدنا أفضل المنح المناسبة لك
            </p>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg px-6 py-2">
              <Brain className="w-5 h-5 ml-2" />
              مدعوم بالذكاء الاصطناعي
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
              <Card
                key={index}
                className="scholarship-card relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold">
                    <Star className="w-4 h-4 ml-1" />
                    {rec.match}% مطابقة
                  </Badge>
                </div>

                <CardHeader>
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {rec.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center text-blue-600">
                      <MapPin className="w-4 h-4 ml-1" />
                      {rec.country}
                    </div>
                    <div className="flex items-center text-green-600">
                      <DollarSign className="w-4 h-4 ml-1" />
                      {rec.funding}
                    </div>
                    <div className="flex items-center text-orange-600">
                      <Clock className="w-4 h-4 ml-1" />
                      {rec.deadline}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <Target className="w-4 h-4 ml-1" />
                        لماذا هذه المنحة مناسبة لك؟
                      </h4>
                      <ul className="space-y-1">
                        {rec.reasons.map((reason: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={rec.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        قدِّم الآن
                        <ExternalLink className="w-4 h-4 mr-2" />
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/6285932416084"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => {
                setCurrentStep(0);
                setRecommendations([]);
                setUserData({
                  field: "",
                  level: "",
                  country: "",
                  language: "",
                  gpa: "",
                  budget: "",
                });
              }}
              variant="outline"
              size="lg"
            >
              <ArrowRight className="w-5 h-5 ml-2" />
              جرب مرة أخرى
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Brain className="w-16 h-16 text-white animate-bounce" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              🤖 الذكاء الاصطناعي يحلل بياناتك...
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              نحن نبحث في قاعدة بيانات تضم آلاف المنح لإيجاد أفضل الخيارات لك
            </p>

            <div className="space-y-4 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>تحليل مجال دراستك...</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                <span>مطابقة المستوى الأكاديمي...</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Target className="w-5 h-5 text-green-500" />
                <span>حساب نسبة التطابق...</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="h-2 bg-gray-200 rounded-full max-w-xs mx-auto">
                <div
                  className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            🤖 محرك التوصيات الذكي
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            أجب على بعض الأسئلة وسنجد لك أفضل المنح المناسبة بالذكاء الاصطناعي
          </p>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <span className="text-sm text-muted-foreground">
                السؤال {currentStep + 1} من {steps.length}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full max-w-md mx-auto">
              <div
                className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <Card className="scholarship-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-500" />
              {steps[currentStep].title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps[currentStep].options.map((option) => (
                <Button
                  key={option}
                  variant={
                    userData[
                      steps[currentStep].field as keyof typeof userData
                    ] === option
                      ? "default"
                      : "outline"
                  }
                  className="h-16 text-lg"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={handleNext}
                disabled={
                  !userData[steps[currentStep].field as keyof typeof userData]
                }
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                {currentStep === steps.length - 1 ? (
                  <>
                    <Brain className="w-5 h-5 ml-2" />
                    احصل على توصياتك
                  </>
                ) : (
                  <>
                    <ArrowRight className="w-5 h-5 ml-2" />
                    التالي
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
