import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, ExternalLink, MessageCircle } from "lucide-react";
import { filterScholarships } from "@/data/scholarships";
import { Link } from "react-router-dom";

export default function ScholarshipsFullyFunded() {
  const whatsappLink = "https://wa.me/6285932416084";

  // Get all fully funded scholarships from the database
  const scholarships = filterScholarships({ category: "fully-funded" });

  const staticScholarships = [
    {
      title: "منحة UI GREAT – إندونيسيا",
      country: "إندونيسيا",
      deadline: "آخر موعد: 27 مارس 2025",
      level: "ماجستير",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب شهري", "سكن مجاني", "تأمين صحي", "رسوم دراسية"],
      applyLink:
        "https://opportunitiescorners.com/indonesia-ui-great-scholarship/",
      badgeColor: "bg-green-500 text-white",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop",
    },
    {
      title: "منحة CSC – الصين",
      country: "الصين",
      deadline: "آخر موعد: مارس 2025",
      level: "بكالوريوس/ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "الصينية/الإنجليزية",
      benefits: ["راتب شهري", "سكن مجاني", "تأمين صحي", "دورة لغة"],
      applyLink: "http://www.csc.edu.cn",
      badgeColor: "bg-red-500 text-white",
      image:
        "https://images.unsplash.com/photo-1508515803269-23c93a85bf30?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الروسية",
      country: "روسيا",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "الروسية/الإنجليزية",
      benefits: ["راتب شهري", "سكن مجاني", "كورس لغة روسية", "تأمين صحي"],
      applyLink:
        "https://amursu.ru/en/admissions/russian-government-scholarships/",
      badgeColor: "bg-blue-500 text-white",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
    },
    {
      title: "Türkiye Scholarships – تركيا",
      country: "تركيا",
      deadline: "آخر موعد: فبراير 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "التركية/الإنجليزية",
      benefits: [
        "راتب شهري 1000 ليرة",
        "سكن مجاني",
        "تأمين صحي",
        "تذاكر طيران",
      ],
      applyLink: "https://www.turkiyescholarships.org.tr",
      badgeColor: "bg-red-600 text-white",
      image:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=200&fit=crop",
    },
    {
      title: "DAAD EPOS – ألمانيا",
      country: "ألمانيا",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "الألمانية/الإنجليزية",
      benefits: ["راتب شهري 850€", "تأمين صحي", "دورات لغة", "بدل سفر"],
      applyLink:
        "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
      badgeColor: "bg-yellow-500 text-white",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الكندية",
      country: "كندا",
      deadline: "آخر موعد: يناير 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية/الفرنسية",
      benefits: ["راتب شهري", "رسوم دراسية", "تأمين ص��ي", "بدل معيشة"],
      applyLink: "https://www.scholarships-bourses.gc.ca/",
      badgeColor: "bg-red-700 text-white",
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة اليابانية MEXT",
      country: "اليابان",
      deadline: "آخر موعد: مايو 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "اليابانية/الإنجليزية",
      benefits: [
        "راتب شهري ¥117,000",
        "رسوم دراسية",
        "تذاكر طيران",
        "دورة لغة",
      ],
      applyLink:
        "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/sdetail02/1373897.htm",
      badgeColor: "bg-pink-500 text-white",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الأسترالية",
      country: "أستراليا",
      deadline: "آخر موعد: أبريل 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: [
        "ر��تب شهري A$3,000",
        "رسوم دراسية",
        "تأمين صحي",
        "تذاكر طيران",
      ],
      applyLink: "https://www.australiaawards.gov.au/",
      badgeColor: "bg-orange-500 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الهولندية",
      country: "هولندا",
      deadline: "آخر موعد: فبراير 2025",
      level: "ماجستير",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب شهري €950", "رسوم دراسية", "تأمين صحي", "بدل سفر"],
      applyLink: "https://www.studyinnl.org/finances/holland-scholarship",
      badgeColor: "bg-orange-600 text-white",
      image:
        "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الفرنسية",
      country: "فرنسا",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "الفرنسية/الإنجليزية",
      benefits: ["راتب شهري €1,200", "رسوم دراسية", "تأمين صحي", "دورة لغة"],
      applyLink:
        "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence",
      badgeColor: "bg-blue-600 text-white",
      image:
        "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة النرويجية",
      country: "النرويج",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "النرويجية/الإنجليزية",
      benefits: [
        "راتب شهري NOK 12,000",
        "رسوم دراسية",
        "تأمين صحي",
        "بدل معيشة",
      ],
      applyLink: "https://www.studyinnorway.no/",
      badgeColor: "bg-blue-700 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة السويدية",
      country: "السويد",
      deadline: "آخر موعد: يناير 2025",
      level: "ماجستير",
      funding: "ممولة بالكامل",
      language: "السويدية/الإنجليزية",
      benefits: ["راتب شهري SEK 10,000", "رسوم دراسية", "تأمين صحي", "بدل سفر"],
      applyLink:
        "https://studyinsweden.se/scholarships/swedish-institute-scholarships-for-global-professionals/",
      badgeColor: "bg-yellow-600 text-white",
      image:
        "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة البريطانية",
      country: "بريطانيا",
      deadline: "آخر موعد: فبراير 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب شهري £1,200", "رسوم دراسية", "تأمين صحي", "تذاكر طيران"],
      applyLink: "https://www.chevening.org/",
      badgeColor: "bg-purple-600 text-white",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الدنماركية",
      country: "الدنمارك",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير",
      funding: "ممولة بالكامل",
      language: "الدنماركية/الإنجليزية",
      benefits: [
        "راتب شهري DKK 8,000",
        "رسوم دراسية",
        "تأمين صحي",
        "بدل معيشة",
      ],
      applyLink: "https://studyindenmark.dk/",
      badgeColor: "bg-red-500 text-white",
      image:
        "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة السويسرية",
      country: "سويسرا",
      deadline: "آخر موعد: يناير 2025",
      level: "دكتوراه",
      funding: "ممولة بالكامل",
      language: "الألمانية/الفرنسية/الإنجليزية",
      benefits: ["راتب شهري CHF 1,920", "رسوم دراسية", "تأمين صحي", "بدل سفر"],
      applyLink:
        "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
      badgeColor: "bg-red-600 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة هارفارد",
      country: "أمريكا",
      deadline: "آخر موعد: ديسمبر 2024",
      level: "دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب سنوي $42,000", "رسوم دراسية", "تأمين صحي", "بدل بحث"],
      applyLink: "https://www.harvard.edu/",
      badgeColor: "bg-red-800 text-white",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة ستانفورد",
      country: "أمريكا",
      deadline: "آخر موعد: ديسمبر 2024",
      level: "دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب سنوي $45,000", "رسوم دراسية", "تأمين صحي", "بدل معيشة"],
      applyLink: "https://www.stanford.edu/",
      badgeColor: "bg-red-700 text-white",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة MIT",
      country: "أمريكا",
      deadline: "آخر موعد: ديسمبر 2024",
      level: "دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب سنوي $40,000", "رسوم دراسية", "تأمين صحي", "بدل بحث"],
      applyLink: "https://www.mit.edu/",
      badgeColor: "bg-gray-600 text-white",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة أكسفورد",
      country: "بريطانيا",
      deadline: "آخر موعد: يناير 2025",
      level: "دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب سنوي £17,000", "رسوم دراسية", "كوليج فيز", "بدل بحث"],
      applyLink: "https://www.ox.ac.uk/",
      badgeColor: "bg-blue-800 text-white",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
    },
    {
      title: "منحة جامعة كامبريدج",
      country: "بريطانيا",
      deadline: "آخر موعد: أكتوبر 2024",
      level: "دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب سنوي £18,000", "رسوم دراسية", "كوليج فيز", "بدل معيشة"],
      applyLink: "https://www.cam.ac.uk/",
      badgeColor: "bg-blue-900 text-white",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            المنح الدراسية الممولة بالكامل
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            منح شاملة تغطي جميع التكاليف: الرسوم الدراسية + السكن + المعيشة +
            تذاكر الطيران
          </p>
          <Badge className="mt-4 bg-success text-success-foreground text-lg px-4 py-2">
            100+ منحة متاحة
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
                    href={whatsappLink}
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
          <p className="text-muted-foreground mb-4">
            هل تحتاج مساعدة في اختيار المنحة المناسبة؟
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="whatsapp-button">
              <MessageCircle className="w-5 h-5 ml-2" />
              تحدث مع خبرائنا مجاناً
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
