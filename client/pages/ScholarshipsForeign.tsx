import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, ExternalLink, MessageCircle } from "lucide-react";

export default function ScholarshipsForeign() {
  const scholarships = [
    {
      title: "منحة Fulbright - أمريكا",
      country: "أمريكا",
      deadline: "آخر موعد: أكتوبر 2024",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب شهري $2,500", "رسوم دراسية", "تأمين صحي", "تذاكر طيران"],
      applyLink: "https://www.fulbright.org/",
      badgeColor: "bg-blue-600 text-white",
      image:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Gates Cambridge",
      country: "بريطانيا",
      deadline: "آخر موعد: أكتوبر 2024",
      level: "دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب سنوي £18,000", "رسوم دراسية", "تأمين صحي", "بدل أسرة"],
      applyLink: "https://www.gatescambridge.org/",
      badgeColor: "bg-purple-600 text-white",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
    },
    {
      title: "منحة ERASMUS MUNDUS",
      country: "أوروبا",
      deadline: "آخر موعد: يناير 2025",
      level: "ماجستير",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب شهري €1,400", "رسوم دراسية", "تذاكر طيران", "تأمين صحي"],
      applyLink:
        "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en",
      badgeColor: "bg-blue-500 text-white",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Rhodes Scholarship",
      country: "بريطانيا",
      deadline: "آخر موعد: سبتمبر 2024",
      level: "دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب سنوي £17,310", "رسوم دراسية", "سكن", "بدل سفر"],
      applyLink: "https://www.rhodeshouse.ox.ac.uk/",
      badgeColor: "bg-purple-700 text-white",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Marie Curie",
      country: "أوروبا",
      deadline: "آخر موعد: سبتمبر 2024",
      level: "دكتوراه/ما بعد الدكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب شهري €4,500", "بدل تنقل", "بدل أسرة", "تدريب مهني"],
      applyLink: "https://marie-sklodowska-curie-actions.ec.europa.eu/",
      badgeColor: "bg-green-600 text-white",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=200&fit=crop",
    },
    {
      title: "منحة MEXT اليابان",
      country: "اليابان",
      deadline: "آخر موعد: مايو 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "اليابانية/الإنجليزية",
      benefits: [
        "راتب شهري ¥143,000",
        "رسوم دراسية",
        "تذاكر طيران",
        "دورة لغة",
      ],
      applyLink: "https://www.mext.go.jp/en/",
      badgeColor: "bg-red-500 text-white",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Australian Awards",
      country: "أستراليا",
      deadline: "آخر موعد: أبريل 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: [
        "راتب شهري A$3,330",
        "رسوم دراسية",
        "تذاكر طيران",
        "تأمين صحي",
      ],
      applyLink: "https://www.australiaawards.gov.au/",
      badgeColor: "bg-orange-500 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Vanier Canada",
      country: "كندا",
      deadline: "آخر موعد: نوفمبر 2024",
      level: "دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية/الفرنسية",
      benefits: ["راتب سنوي C$50,000", "لمدة 3 سنوات", "بدل بحث", "تأمين صحي"],
      applyLink: "https://vanier.gc.ca/",
      badgeColor: "bg-red-700 text-white",
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Swiss Excellence",
      country: "سويسرا",
      deadline: "آخر موعد: نوفمبر 2024",
      level: "دكتوراه/ما بعد الدكتوراه",
      funding: "ممولة بالكامل",
      language: "الألمانية/الفرنسية/الإنجليزية",
      benefits: ["راتب شهري CHF 1,920", "رسوم دراسية", "تأمين صحي", "بدل سفر"],
      applyLink: "https://www.sbfi.admin.ch/",
      badgeColor: "bg-red-600 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Holland Orange Tulip",
      country: "هولندا",
      deadline: "آخر موعد: فبراير 2025",
      level: "ماجستير",
      funding: "منحة جزئية",
      language: "الإنجليزية",
      benefits: [
        "خصم €5,000-24,000",
        "مساعدات مالية",
        "برامج تبادل",
        "شبكة خريجين",
      ],
      applyLink: "https://www.studyinnl.org/",
      badgeColor: "bg-orange-600 text-white",
      image:
        "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Swedish Institute",
      country: "السويد",
      deadline: "آخر موعد: يناير 2025",
      level: "ماجستير",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب شهري SEK 12,000", "رسوم دراسية", "تأمين صحي", "بدل سفر"],
      applyLink: "https://studyinsweden.se/",
      badgeColor: "bg-yellow-600 text-white",
      image:
        "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Danish Government",
      country: "الدنمارك",
      deadline: "آخر موعد: مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: [
        "راتب شهري DKK 14,000",
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
      title: "منحة Finnish Government",
      country: "فنلندا",
      deadline: "آخر موعد: فبراير 2025",
      level: "دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية/الفنلندية",
      benefits: ["راتب شهري €1,500", "رسوم دراسية", "تأمين صحي", "بدل سفر"],
      applyLink: "https://www.studyinfinland.fi/",
      badgeColor: "bg-blue-700 text-white",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Austrian Government",
      country: "النمسا",
      deadline: "آخر ��وعد: مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "منحة جزئية",
      language: "الألمانية/الإنجليزية",
      benefits: [
        "راتب شهري €1,040",
        "إعفاء من الرسوم",
        "تأمين صحي",
        "دورات لغة",
      ],
      applyLink: "https://www.studyinaustria.at/",
      badgeColor: "bg-red-800 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Korean Government KGSP",
      country: "كوريا الجنوبية",
      deadline: "آخر موعد: مارس 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "الكورية/الإنجليزية",
      benefits: [
        "راتب شهري ₩900,000",
        "رسوم دراسية",
        "تذاكر طيران",
        "دورة لغة كورية",
      ],
      applyLink: "https://www.studyinkorea.go.kr/",
      badgeColor: "bg-pink-600 text-white",
      image:
        "https://images.unsplash.com/photo-1541339907198-b8d0525ab2b5?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Taiwan Scholarship",
      country: "تايوان",
      deadline: "آخر موعد: مارس 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "الصينية/الإنجليزية",
      benefits: ["راتب شهري NT$25,000", "رسوم دراسية", "تأمين صحي", "دورة لغة"],
      applyLink: "https://taiwanscholarship.moe.gov.tw/",
      badgeColor: "bg-green-500 text-white",
      image:
        "https://images.unsplash.com/photo-1508515803269-23c93a85bf30?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Singapore Government",
      country: "سنغافورة",
      deadline: "آخر موعد: يناير 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: [
        "راتب شهري S$2,000",
        "رسوم دراسية",
        "تذاكر طيران",
        "بدل أطروحة",
      ],
      applyLink: "https://www.a-star.edu.sg/",
      badgeColor: "bg-red-600 text-white",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=200&fit=crop",
    },
    {
      title: "منحة New Zealand Development",
      country: "نيوزيلندا",
      deadline: "آخر موعد: مايو 2025",
      level: "ماجستير",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: [
        "راتب شهري NZ$2,000",
        "رسوم دراسية",
        "تذاكر طيران",
        "تأمين صحي",
      ],
      applyLink:
        "https://www.mfat.govt.nz/en/aid-and-development/scholarships/",
      badgeColor: "bg-green-700 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Brunei Government",
      country: "بروناي",
      deadline: "آخر موعد: مارس 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "الإنجليزية",
      benefits: ["راتب شهري B$600", "رسوم دراسية", "سكن مجاني", "تأمين صحي"],
      applyLink: "https://www.moe.gov.bn/",
      badgeColor: "bg-yellow-700 text-white",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop",
    },
    {
      title: "منحة Malaysian Government",
      country: "ماليزيا",
      deadline: "آخر موعد: أبريل 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      language: "الإنجليزية/المالايو",
      benefits: [
        "راتب شهري RM1,500",
        "رسوم دراسية",
        "سكن مجاني",
        "تذاكر طيران",
      ],
      applyLink: "https://biasiswa.mohe.gov.my/",
      badgeColor: "bg-blue-600 text-white",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            المنح الأجنبية
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            منح دراسية من الدول الأجنبية: ألمانيا، تركيا، أمريكا، كندا،
            إندونيسيا، ماليزيا
          </p>
          <Badge className="mt-4 bg-accent text-accent-foreground text-lg px-4 py-2">
            120+ منحة متاحة
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
