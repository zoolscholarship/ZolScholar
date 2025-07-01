import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plane, ExternalLink, MessageCircle } from "lucide-react";

export default function ScholarshipsAirfare() {
  const scholarships = [
    {
      title: "منحة الحكومة التركية + طيران",
      country: "تركيا",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "تذاكر طيران مجانية",
      language: "التركية/الإنجليزية",
      benefits: [
        "تذاكر طيران ذهاب وإياب",
        "راتب شهري",
        "سكن مجاني",
        "تأمين صحي",
      ],
      applyLink: "https://www.turkiyescholarships.org.tr",
      badgeColor: "bg-red-600 text-white",
      image:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=200&fit=crop",
    },
    {
      title: "منحة DAAD + طيران",
      country: "ألمانيا",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "تذاكر طيران مجانية",
      language: "الألمانية/الإنجليزية",
      benefits: ["تذاكر طيران", "راتب شهري €850", "تأمين صحي", "دورات لغة"],
      applyLink: "https://www.daad.de/en/",
      badgeColor: "bg-yellow-500 text-white",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=200&fit=crop",
    },
    {
      title: "منحة اليابان MEXT + طيران",
      country: "اليابان",
      deadline: "آخر موعد: مايو 2025",
      level: "جميع المستويات",
      funding: "تذاكر طيران مجانية",
      language: "اليابانية/الإنجليزية",
      benefits: [
        "تذاكر طيران مجانية",
        "راتب شهري ¥117,000",
        "رسوم دراسية",
        "دورة لغة",
      ],
      applyLink: "https://www.mext.go.jp/en/",
      badgeColor: "bg-pink-500 text-white",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=200&fit=crop",
    },
    {
      title: "منحة أستراليا + طيران",
      country: "أستراليا",
      deadline: "آخر موعد: أبريل 2025",
      level: "ماجستير/دكتوراه",
      funding: "تذاكر طيران مجانية",
      language: "الإنجليزية",
      benefits: [
        "تذاكر طيران",
        "راتب شهري A$3,000",
        "رسوم دراسية",
        "تأمين صحي",
      ],
      applyLink: "https://www.australiaawards.gov.au/",
      badgeColor: "bg-orange-500 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      title: "منحة كندا + طيران",
      country: "كندا",
      deadline: "آخر موعد: يناير 2025",
      level: "ماجستير/دكتوراه",
      funding: "تذاكر طيران مجانية",
      language: "الإنجليزية/الفرنسية",
      benefits: ["تذاكر طيران", "راتب شهري", "رسوم دراسية", "تأمين صحي"],
      applyLink: "https://www.scholarships-bourses.gc.ca/",
      badgeColor: "bg-red-700 text-white",
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=200&fit=crop",
    },
    {
      title: "منحة فرنسا + طيران",
      country: "فرنسا",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "تذاكر طيران مجانية",
      language: "الفرنسية/الإنجليزية",
      benefits: ["تذاكر طيران", "راتب شهري €1,200", "رسوم دراسية", "تأمين صحي"],
      applyLink: "https://www.campusfrance.org/en/",
      badgeColor: "bg-blue-600 text-white",
      image:
        "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الصين + طيران",
      country: "الصين",
      deadline: "آخر موعد: مارس 2025",
      level: "جميع المستويات",
      funding: "تذاكر طيران مجانية",
      language: "الصينية/الإنجليزية",
      benefits: ["تذاكر طيران", "راتب شهري", "سكن مجاني", "تأمين صحي"],
      applyLink: "http://www.csc.edu.cn",
      badgeColor: "bg-red-500 text-white",
      image:
        "https://images.unsplash.com/photo-1508515803269-23c93a85bf30?w=400&h=200&fit=crop",
    },
    {
      title: "منحة روسيا + طيران",
      country: "روسيا",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "تذاكر طيران مجانية",
      language: "الروسية/الإنجليزية",
      benefits: ["تذاكر طيران", "راتب شهري", "سكن مجاني", "كورس لغة روسية"],
      applyLink: "https://amursu.ru/en/",
      badgeColor: "bg-blue-500 text-white",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
    },
    {
      title: "منحة النرويج + طيران",
      country: "النرويج",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "تذاكر طيران مجانية",
      language: "النرويجية/الإنجليزية",
      benefits: [
        "تذاكر طيران",
        "راتب شهري NOK 12,000",
        "رسوم دراسية",
        "تأمين صحي",
      ],
      applyLink: "https://www.studyinnorway.no/",
      badgeColor: "bg-blue-700 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      title: "منحة السويد + طيران",
      country: "السويد",
      deadline: "آخر موعد: يناير 2025",
      level: "ماجستير",
      funding: "تذاكر طيران مجانية",
      language: "السويدية/الإنجليزية",
      benefits: [
        "تذاكر طيران",
        "راتب شهري SEK 10,000",
        "رسوم دراسية",
        "تأمين صحي",
      ],
      applyLink: "https://studyinsweden.se/",
      badgeColor: "bg-yellow-600 text-white",
      image:
        "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&h=200&fit=crop",
    },
    {
      title: "منحة هولندا + طيران",
      country: "هولندا",
      deadline: "آخر موعد: فبراير 2025",
      level: "ماجستير",
      funding: "تذاكر طيران مجانية",
      language: "الإنجليزية",
      benefits: ["تذاكر طيران", "راتب شهري €950", "رسوم دراسية", "تأمين صحي"],
      applyLink: "https://www.studyinnl.org/",
      badgeColor: "bg-orange-600 text-white",
      image:
        "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=200&fit=crop",
    },
    {
      title: "منحة بريطانيا + طيران",
      country: "بريطانيا",
      deadline: "آخر موعد: فبراير 2025",
      level: "ماجستير/دكتوراه",
      funding: "تذاكر طيران مجانية",
      language: "الإنجليزية",
      benefits: ["تذاكر طيران", "راتب شهري £1,200", "رسوم دراسية", "تأمين صحي"],
      applyLink: "https://www.chevening.org/",
      badgeColor: "bg-purple-600 text-white",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
    },
    {
      title: "منحة سويسرا + طيران",
      country: "سويسرا",
      deadline: "آخر موعد: يناير 2025",
      level: "دكتوراه",
      funding: "تذاكر طيران مجانية",
      language: "الألمانية/الفرنسية/الإنجليزية",
      benefits: [
        "تذاكر طيران",
        "راتب شهري CHF 1,920",
        "رسوم دراسية",
        "تأمين صحي",
      ],
      applyLink: "https://www.sbfi.admin.ch/",
      badgeColor: "bg-red-600 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الدنمارك + طيران",
      country: "الدنمارك",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير",
      funding: "تذاكر طيران مجانية",
      language: "الدنماركية/الإنجليزية",
      benefits: [
        "تذاكر طيران",
        "راتب شهري DKK 8,000",
        "رسوم دراسية",
        "تأمين صحي",
      ],
      applyLink: "https://studyindenmark.dk/",
      badgeColor: "bg-red-500 text-white",
      image:
        "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=200&fit=crop",
    },
    {
      title: "منحة إندونيسيا + طيران",
      country: "إندونيسيا",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير",
      funding: "تذاكر طيران مجانية",
      language: "الإنجليزية",
      benefits: ["تذاكر طيران", "راتب شهري", "سكن مجاني", "تأمين صحي"],
      applyLink: "https://opportunitiescorners.com/",
      badgeColor: "bg-green-500 text-white",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Plane className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            المنح الجوية
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            منح دراسية تتضمن تذاكر الطيران مجاناً إلى وجهتك الدراسية
          </p>
          <Badge className="mt-4 bg-blue-500 text-white text-lg px-4 py-2">
            50+ منحة متاحة
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
                    <span className="text-blue-600 font-semibold">
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
