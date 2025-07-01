import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const whatsappNumber = "+62 859-3241-6084";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s+/g, "").replace("+", "")}`;

  const contactMethods = [
    {
      title: "واتساب",
      description: "التواصل المباشر والسريع",
      icon: MessageCircle,
      value: whatsappNumber,
      link: whatsappLink,
      color: "bg-green-500",
      primary: true,
    },
    {
      title: "تيك توك",
      description: "تابعنا للحصول على آخر التحديثات",
      icon: ExternalLink,
      value: "@osamasalih687",
      link: "https://tiktok.com/@osamasalih687",
      color: "bg-black",
    },
    {
      title: "لينكد إن",
      description: "تواصل مهني",
      icon: ExternalLink,
      value: "Osama on LinkedIn",
      link: "#",
      color: "bg-blue-600",
    },
    {
      title: "إنستغرام",
      description: "صور ومقاطع تعليمية",
      icon: ExternalLink,
      value: "Osama on Instagram",
      link: "#",
      color: "bg-pink-500",
    },
  ];

  const faq = [
    {
      question: "كيف يمكنني التقديم على المنح؟",
      answer:
        "يمكنك البحث عن المنح المناسبة في موقعنا ثم التواصل معنا عبر واتساب للحصول على مساعدة مخصصة في عملية التقديم.",
    },
    {
      question: "هل خدماتكم مجانية؟",
      answer:
        "نقدم استشارات مجانية أولية. أما الخدمات المتخصصة فلها تكلفة. تواصل معنا لمعرفة التفاصيل.",
    },
    {
      question: "كم يستغرق الحصول على رد؟",
      answer:
        "نرد على جميع الاستفسارات خلال 24 ساعة كحد أقصى، وعادة ما نرد خلال ساعات قليلة.",
    },
    {
      question: "هل تساعدون في جميع أنواع المنح؟",
      answer:
        "نعم، نساعد في جميع أنواع المنح الدراسية سواء كانت ممولة بالكامل أو جزئياً، عربية أو أجنبية.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            تواصل معنا
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نحن هنا لمساعدتك في كل خطوة من رحلتك نحو الحصول على المنحة الدراسية
            المناسبة لك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">طرق التواصل</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={index}
                    className={`scholarship-card cursor-pointer transition-transform hover:scale-105 ${
                      method.primary ? "ring-2 ring-green-500" : ""
                    }`}
                    onClick={() => window.open(method.link, "_blank")}
                  >
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                      {method.primary && (
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          الأسرع
                        </span>
                      )}
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-4">
                        {method.description}
                      </p>
                      <p className="font-semibold text-primary mb-4">
                        {method.value}
                      </p>
                      <Button
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(method.link, "_blank");
                        }}
                      >
                        <Icon className="w-4 h-4 ml-2" />
                        تواصل الآن
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Quick Info */}
          <div>
            <Card className="scholarship-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  ساعات العمل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">السبت - الخميس</p>
                  <p className="text-muted-foreground">9:00 ص - 10:00 م</p>
                </div>
                <div>
                  <p className="font-semibold">الجمعة</p>
                  <p className="text-muted-foreground">2:00 م - 10:00 م</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong>ملاحظة:</strong> نرد على الرسائل خلال 24 ساعة حتى في
                    أيام العطل
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="scholarship-card mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  تواصل سريع
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  للحصول على رد فوري، تواصل معنا عبر واتساب
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full whatsapp-button justify-center">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    رسالة واتساب
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            الأسئلة الشائعة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faq.map((item, index) => (
              <Card key={index} className="scholarship-card">
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز للبدء؟</h2>
          <p className="text-xl mb-8 opacity-90">
            لا تتردد في التواصل معنا الآن للحصول على استشارة مجانية وبدء رحلتك
            نحو المنحة الدراسية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                ابدأ المحادثة
              </Button>
            </a>
            <a
              href="https://tiktok.com/@osamasalih687"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ExternalLink className="w-5 h-5 ml-2" />
                تابعنا على تيك توك
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
