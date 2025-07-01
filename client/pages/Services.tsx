import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Settings,
  FileText,
  BookOpen,
  UserCheck,
  Languages,
  Video,
  HeadphonesIcon,
  MessageCircle,
  CheckCircle,
  Star,
} from "lucide-react";

export default function Services() {
  const whatsappLink = "https://wa.me/6285932416084";

  const services = [
    {
      title: "تصميم سيرة ذاتية احترافية",
      icon: FileText,
      description: "سيرة ذاتية مميزة ومصممة خصيصاً لزيادة فرص قبولك",
      features: [
        "تصميم احترافي جذاب",
        "محتوى مُحسَّن لنظم التوظيف",
        "تسليط الضوء على نقاط القوة",
        "متوافق مع معايير المنح الدولية",
      ],
      color: "bg-blue-500",
    },
    {
      title: "كتابة رسالة الدافع",
      icon: BookOpen,
      description: "رسالة دافع مقنعة ومؤثرة مكتوبة بأسلوب مهني",
      features: [
        "محتوى مخصص حسب المنحة",
        "أسلوب كتابة أكاديمي",
        "إبراز الأهداف والطموحات",
        "مراجعة وتدقيق لغوي",
      ],
      color: "bg-green-500",
    },
    {
      title: "إنشاء حسابات في منصات التقديم",
      icon: UserCheck,
      description: "مساعدة كاملة في إنشاء وتفعيل حساباتك في المنصات المختلفة",
      features: [
        "إنشاء الحسابات بشكل صحيح",
        "تعبئة البيانات المطلوبة",
        "تفعيل الحسابات",
        "شرح طريقة الاستخدام",
      ],
      color: "bg-purple-500",
    },
    {
      title: "ترجمة المستندات",
      icon: Languages,
      description: "ترجمة دقيقة ومعتمدة ��جميع المستندات المطلوبة",
      features: [
        "ترجمة معتمدة ودقيقة",
        "جميع اللغات المطلوبة",
        "تنسيق مهني للمستندات",
        "مراجعة من خبراء اللغة",
      ],
      color: "bg-amber-500",
    },
    {
      title: "تدريب على المقابلات",
      icon: Video,
      description: "تدريب مكثف للمقابلات الشخصية عبر الإنترنت",
      features: [
        "محاكاة مقابلات حقيقية",
        "نصائح وإرشادات مهمة",
        "تحسين الثقة بالنفس",
        "تدريب على الأسئلة الشائعة",
      ],
      color: "bg-red-500",
    },
    {
      title: "استشارات خاصة",
      icon: HeadphonesIcon,
      description: "استشارات شخصية ومتابعة مستمرة عبر واتساب",
      features: [
        "استشارات شخصية مخصصة",
        "متابعة مستمرة",
        "إجابة جميع الاستفسارات",
        "دعم حتى الحصول على المنحة",
      ],
      color: "bg-cyan-500",
    },
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      text: "بفضل خدماتهم حصلت على منحة في ألمانيا. فريق محترف ومتعاون جداً.",
      rating: 5,
    },
    {
      name: "فاطمة عبدالله",
      text: "ساعدوني في كتابة رسالة الدافع وحصلت على القبول من أول مرة!",
      rating: 5,
    },
    {
      name: "يوسف علي",
      text: "خدمة ممتازة ومتابعة مستمرة. أنصح الجميع بالتعامل معهم.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Settings className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">خدماتنا</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم لك كل ما تحتاجه لضمان نجاح طلب المنحة الدراسية وتحقيق حلمك
            الأكاديمي
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="scholarship-card hover:scale-105 transition-transform"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm">يشمل:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full whatsapp-button justify-center"
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    اطلب الخدمة
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">كيف نعمل معك؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">التواصل الأولي</h3>
              <p className="text-sm text-muted-foreground">
                تواصل معنا عبر واتساب وحدد احتياجاتك
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">تحديد المتطلبات</h3>
              <p className="text-sm text-muted-foreground">
                نقوم بتحديد المتطلبات بدقة حسب المنحة المستهدفة
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">تنفيذ الخدمة</h3>
              <p className="text-sm text-muted-foreground">
                فريقنا المختص ينفذ الخدمة بأعلى معايير الجودة
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">التسليم والمتابعة</h3>
              <p className="text-sm text-muted-foreground">
                نسلم العمل ونتابع معك حتى تحقيق هدفك
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">آراء عملائنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="scholarship-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">ابدأ رحلتك الآن</h2>
          <p className="text-xl mb-8 opacity-90">
            تواصل معنا اليوم واحصل على استشارة مجانية لتحديد أفضل الخدمات لك
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <MessageCircle className="w-5 h-5 ml-2" />
              تواصل معنا على واتساب
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
