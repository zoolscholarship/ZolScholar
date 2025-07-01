import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink, MessageCircle } from "lucide-react";

export default function ScholarshipsArab() {
  const scholarships = [
    {
      title: "منحة جامعة الملك سعود",
      country: "السعودية",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "العربية/الإنجليزية",
      benefits: [
        "راتب شهري 1000 ريال",
        "سكن وطعام مجاني",
        "تذاكر طيران سنوية",
        "تأمين صحي",
      ],
      applyLink:
        "https://ksu.edu.sa/en/admission-aid/admission/international-admission/",
      badgeColor: "bg-green-600 text-white",
      image:
        "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة الملك عبدالعزيز",
      country: "السعودية",
      deadline: "آخر موعد: مارس 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "العربية/الإنجليزية",
      benefits: ["راتب شهري", "سكن مجاني", "تذاكر طيران", "تأمين صحي شامل"],
      applyLink: "https://www.kau.edu.sa/",
      badgeColor: "bg-green-600 text-white",
      image:
        "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الجامعة الإسلامية بالمدينة",
      country: "السعودية",
      deadline: "آخر موعد: يناير 2025",
      level: "بكالوريوس/ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "العربية",
      benefits: ["راتب شهري", "سكن وطعام", "تذاكر طيران", "مكافآت تفوق"],
      applyLink: "https://iu.edu.sa/",
      badgeColor: "bg-green-600 text-white",
      image:
        "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة الإمام محمد بن سعود",
      country: "السعودية",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "العربية",
      benefits: ["راتب شهري", "سكن مجاني", "تذاكر طيران", "تأمين صحي"],
      applyLink: "https://imamu.edu.sa/",
      badgeColor: "bg-green-600 text-white",
      image:
        "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة الإمارات",
      country: "الإمارات",
      deadline: "آخر موعد: مارس 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "العربية/الإنجليزية",
      benefits: ["راتب شهري 3000 درهم", "سكن مجاني", "تأمين صحي", "بدل نقل"],
      applyLink: "https://www.uaeu.ac.ae/",
      badgeColor: "bg-red-600 text-white",
      image:
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الجامعة الأمريكية في الشارقة",
      country: "الإمارات",
      deadline: "آخر موعد: أبريل 2025",
      level: "بكالوريوس/ماجستير",
      funding: "ممولة جزئياً",
      language: "الإنجليزية",
      benefits: [
        "خصم 75% من الرسوم",
        "سكن مخفض",
        "منح تميز أكاديمي",
        "أنشطة طلابية",
      ],
      applyLink: "https://www.aus.edu/",
      badgeColor: "bg-red-600 text-white",
      image:
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة قطر",
      country: "قطر",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "العربية/الإنجليزية",
      benefits: [
        "راتب شهري 2500 ريال قطري",
        "سكن مجاني",
        "تأمين صحي",
        "بدل نقل",
      ],
      applyLink: "https://www.qu.edu.qa/",
      badgeColor: "bg-purple-600 text-white",
      image:
        "https://images.unsplash.com/photo-1541339907198-b8d0525ab2b5?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة الدوحة",
      country: "قطر",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "العربية/الإنجليزية",
      benefits: ["راتب شهري", "سكن مجاني", "تأمين صحي", "منح بحثية"],
      applyLink: "https://www.dohainstitute.edu.qa/",
      badgeColor: "bg-purple-600 text-white",
      image:
        "https://images.unsplash.com/photo-1541339907198-b8d0525ab2b5?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة الكويت",
      country: "الكويت",
      deadline: "آخر موعد: يناير 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "العربية/الإنجليزية",
      benefits: ["راتب شهري 400 دينار", "سكن مجاني", "تأمين صحي", "بدل كتب"],
      applyLink: "https://www.kuniv.edu.kw/",
      badgeColor: "bg-blue-600 text-white",
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الجامعة الأردنية",
      country: "الأردن",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "منحة جزئية",
      language: "العربية/الإنجليزية",
      benefits: ["إعفاء من الرسوم", "مساعدات مالية", "سكن مخفض", "منح تفوق"],
      applyLink: "https://www.ju.edu.jo/",
      badgeColor: "bg-orange-600 text-white",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الجامعة الأمريكية في بيروت",
      country: "لبنان",
      deadline: "آخر مو��د: مارس 2025",
      level: "جميع المستويات",
      funding: "منحة جزئية",
      language: "الإنجليزية",
      benefits: [
        "إعفاء من الرسوم",
        "مساعدات مالية",
        "منح تميز",
        "برامج عمل-دراسة",
      ],
      applyLink: "https://www.aub.edu.lb/",
      badgeColor: "bg-green-700 text-white",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة السودان للعلوم والتكنولوجيا",
      country: "السودان",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "منحة جزئية",
      language: "العربية/الإنجليزية",
      benefits: [
        "إعفاء جزئي من الرسوم",
        "سكن مخفض",
        "منح تفوق",
        "برامج تدريبية",
      ],
      applyLink: "https://www.sustech.edu/",
      badgeColor: "bg-yellow-600 text-white",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة الخرطوم",
      country: "السودان",
      deadline: "آخر موعد: يناير 2025",
      level: "جميع المس��ويات",
      funding: "منحة جزئية",
      language: "العربية/الإنجليزية",
      benefits: ["إعفاء من الرسوم", "سكن جامعي", "منح بحثية", "مساعدات طلابية"],
      applyLink: "http://www.uofk.edu/",
      badgeColor: "bg-yellow-600 text-white",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الجامعة التونسية",
      country: "تونس",
      deadline: "آخر موعد: مارس 2025",
      level: "جميع المستويات",
      funding: "منحة جزئية",
      language: "العربية/الفرنسية",
      benefits: ["إعفاء من الرسوم", "مساعدات مالية", "سكن جامعي", "منح تفوق"],
      applyLink: "http://www.mes.tn/",
      badgeColor: "bg-red-500 text-white",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73a12?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة محمد الخامس - المغرب",
      country: "المغرب",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "منحة جزئية",
      language: "العربية/الفر��سية",
      benefits: ["إعفاء من الرسوم", "مساعدات مالية", "سكن جامعي", "منح دراسية"],
      applyLink: "http://www.um5.ac.ma/",
      badgeColor: "bg-red-700 text-white",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73a12?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الجامعة الليبية",
      country: "ليبيا",
      deadline: "آخر موعد: أبريل 2025",
      level: "جميع المستويات",
      funding: "منحة جزئية",
      language: "العربية/الإنجليزية",
      benefits: ["إعفاء من الرسوم", "مساعدات مالية", "سكن جامعي", "منح بحثية"],
      applyLink: "http://elmergib.edu.ly/",
      badgeColor: "bg-green-500 text-white",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة بغداد",
      country: "العراق",
      deadline: "آخر موعد: مارس 2025",
      level: "جميع المستويات",
      funding: "منحة جزئية",
      language: "العربية/الإنجليزية",
      benefits: ["إعفاء من الرسوم", "مساعدات مالية", "سكن جامعي", "منح تفوق"],
      applyLink: "https://uobaghdad.edu.iq/",
      badgeColor: "bg-yellow-700 text-white",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة دمشق",
      country: "سوريا",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "منحة جزئية",
      language: "العربية",
      benefits: ["إعفاء من الرسوم", "مساعدات مالية", "سكن جامعي", "منح دراسية"],
      applyLink: "http://www.damascusuniversity.edu.sy/",
      badgeColor: "bg-gray-600 text-white",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة الأزهر",
      country: "مصر",
      deadline: "آخر موعد: مارس 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "العربية",
      benefits: ["إعفاء كامل من الرسوم", "راتب شهري", "سكن مجاني", "تأمين صحي"],
      applyLink: "https://www.azhar.edu.eg/",
      badgeColor: "bg-blue-800 text-white",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73a12?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة القاهرة",
      country: "مصر",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "منحة جزئية",
      language: "العربية/الإنجليزية",
      benefits: [
        "إعفاء جزئي من الرسوم",
        "مساعدات مالية",
        "سكن جامعي",
        "منح تفوق",
      ],
      applyLink: "https://cu.edu.eg/",
      badgeColor: "bg-blue-800 text-white",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73a12?w=400&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            المنح العربية
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            منح دراسية من الدول العرب��ة: السعودية، الإمارات، مصر، قطر، السودان
          </p>
          <Badge className="mt-4 bg-amber-500 text-white text-lg px-4 py-2">
            80+ منحة متاحة
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <Card key={index} className="scholarship-card">
              <CardHeader>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={scholarship.image}
                    alt={scholarship.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={scholarship.badgeColor}>
                    {scholarship.country}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {scholarship.deadline}
                  </span>
                </div>
                <CardTitle className="text-xl">{scholarship.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">المستوى:</span>
                    <span>{scholarship.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">التمويل:</span>
                    <span className="text-green-600 font-semibold">
                      {scholarship.funding}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">اللغة:</span>
                    <span>{scholarship.language}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-sm">المزايا:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {scholarship.benefits.map((benefit, i) => (
                      <li key={i}>• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <a
                    href={scholarship.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full">
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
      </div>
    </div>
  );
}
