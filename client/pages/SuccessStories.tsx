import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Star,
  MapPin,
  GraduationCap,
  Quote,
  MessageCircle,
  Heart,
  Calendar,
  TrendingUp,
  Users,
  Award,
  Sparkles,
} from "lucide-react";

export default function SuccessStories() {
  const successStories = [
    {
      name: "أحمد محمد الحسن",
      country: "السودان",
      scholarship: "منحة DAAD الألمانية",
      university: "جامعة ميونخ التقنية",
      field: "الهندسة الميكانيكية",
      year: "2023",
      story:
        "كنت أحلم بدراسة الهندسة في ألمانيا، وبفضل فريق حلم زول بسيط، تمكنت من الحصول على منحة DAAD. ساعدوني في كتابة رسالة الدافع وتحضير جميع المستندات. الآن أدرس في إحدى أفضل الجامعات في العالم!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      achievement: "منحة كاملة + راتب شهري €950",
      rating: 5,
    },
    {
      name: "فاطمة عبدالله",
      country: "مصر",
      scholarship: "منحة الحكومة الكندية",
      university: "جامعة تورونتو",
      field: "علوم الحاسوب",
      year: "2024",
      story:
        "بعد رفض طلبي عدة مرات، تواصلت مع فريق حلم زول بسيط. أعادوا كتابة سيرتي الذاتي�� ورسالة الدافع بشكل احترافي. حصلت على القبول من أول محاولة بعد ذلك! شكراً لهم من كل قلبي.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=300&h=300&fit=crop&crop=face",
      achievement: "منحة كاملة + إقامة دائمة",
      rating: 5,
    },
    {
      name: "يوسف علي محمود",
      country: "الأردن",
      scholarship: "منحة الحكومة اليابانية MEXT",
      university: "جامعة طوكيو",
      field: "الذكاء الاصطناعي",
      year: "2023",
      story:
        "اليابان كانت حلمي منذ الطفولة. فريق حلم زول بسيط لم يساعد��ي فقط في الحصول على المنحة، بل أيضاً في تعلم أساسيات اللغة اليابانية والثقافة اليابانية. الآن أعمل في أحد أكبر شركات التكنولوجيا في اليابان!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      achievement: "منحة كاملة + عمل بدوام جزئي",
      rating: 5,
    },
    {
      name: "مريم أحمد الزهراء",
      country: "المغرب",
      scholarship: "منحة Erasmus Mundus",
      university: "جامعات أوروبية متعددة",
      field: "الاقتصاد الدولي",
      year: "2024",
      story:
        "كنت أريد دراسة الماجستير في أوروبا لكن التكاليف كانت عائقاً كبيراً. بفضل الله ثم فريق حلم زول بسيط، حصلت على منحة Erasmus Mundus التي تتيح لي الدراسة في 3 دول أوروبية مختلفة!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      achievement: "منحة €3,000 شهرياً + سفر",
      rating: 5,
    },
    {
      name: "عبدالرحمن صالح",
      country: "العراق",
      scholarship: "منحة جامعة هارفارد",
      university: "جامعة هارفارد",
      field: "الطب",
      year: "2023",
      story:
        "هارفارد كانت حلماً بعيد المنال، لكن فريق حلم زول بسيط آمنوا بقدراتي وساعدوني في تقديم طلب مثالي. الآن أدرس في أفضل كلية طب في العالم. الحلم أصبح حقيقة!",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      achievement: "منحة كاملة $70,000 سنوياً",
      rating: 5,
    },
    {
      name: "نور الهدى محمد",
      country: "تونس",
      scholarship: "منحة الحكومة الأسترالية",
      university: "جامعة ملبورن",
      field: "العلوم البيئية",
      year: "2024",
      story:
        "أستراليا كانت خياري الأول للدراسة بسبب التقدم في مجال العلوم البيئية. الفريق ساعدني في كل خطوة، من اختيار الجامعة المناسبة إلى تحضير المقابلة. الآن أدرس في أجمل جامعة في العالم!",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
      achievement: "منحة كاملة + إقامة مؤقتة",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "قصة نجاح", icon: Trophy },
    { number: "95%", label: "معدل النجاح", icon: TrendingUp },
    { number: "50+", label: "دولة", icon: MapPin },
    { number: "1000+", label: "طالب مستفيد", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            🏆 قصص النجاح
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            اكتشف كيف غيّر طلاب مثلك حياتهم وحققوا أحلامهم الأكاديمية
            <br />
            <span className="text-primary font-semibold">
              أنت التالي في قائمة النجاح! 🌟
            </span>
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              ✨ قصص ملهمة من طلابنا
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              هؤلاء الطلاب بدأوا رحلتهم مثلك تماماً، والآن يدرسون في أفضل جامعات
              العالم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="scholarship-card relative overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                    <Award className="w-4 h-4 ml-1" />
                    {story.year}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {story.country}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">
                        {story.scholarship}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {story.university} - {story.field}
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full inline-block">
                      {story.achievement}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <Quote className="w-6 h-6 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{story.story}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 ml-1" />
                      ملهم
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold mb-6">
            🚀 أنت التالي في قائمة النجاح!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            لا تدع أحلامك تبقى مجرد أحلام. ابدأ رحلتك اليوم وكن من قصص النجاح
            القادمة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285932416084"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                ابدأ رحلتك الآن
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Trophy className="w-5 h-5 ml-2" />
              شارك قصة نجاحك
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
