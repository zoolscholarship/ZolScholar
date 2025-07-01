import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search as SearchIcon,
  Filter,
  MapPin,
  Calendar,
  DollarSign,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedFunding, setSelectedFunding] = useState("");

  const allScholarships = [
    {
      title: "منحة DAAD الألمانية",
      country: "ألمانيا",
      deadline: "مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      description: "منحة شاملة تغطي الرسوم الدراسية والمعيشة مع راتب شهري €850",
      link: "https://www.daad.de/en/",
      badgeColor: "bg-yellow-500 text-white",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة التركية",
      country: "تركيا",
      deadline: "فبراير 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      description: "منحة شاملة مع راتب شهري وسكن مجاني وتأمين صحي",
      link: "https://www.turkiyescholarships.org.tr",
      badgeColor: "bg-red-600 text-white",
      image:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=300&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الكندية",
      country: "كندا",
      deadline: "يناير 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      description: "منحة مع راتب شهري وإمكانية الإقامة الدائمة",
      link: "https://www.scholarships-bourses.gc.ca/",
      badgeColor: "bg-red-700 text-white",
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=300&h=200&fit=crop",
    },
    {
      title: "منحة جامعة الملك سعود",
      country: "السعودية",
      deadline: "فبراير 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      description: "منحة شاملة مع راتب شهري وسكن وطعام مجاني",
      link: "https://ksu.edu.sa/",
      badgeColor: "bg-green-600 text-white",
      image:
        "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=300&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة اليابانية MEXT",
      country: "اليابان",
      deadline: "مايو 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      description: "منحة مع راتب شهري ¥117,000 ودورة لغة يابانية",
      link: "https://www.mext.go.jp/en/",
      badgeColor: "bg-pink-500 text-white",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=200&fit=crop",
    },
    {
      title: "منحة جامعة الإمارات",
      country: "الإمارات",
      deadline: "مارس 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      description: "منحة مع راتب شهري 3000 درهم وسكن مجاني",
      link: "https://www.uaeu.ac.ae/",
      badgeColor: "bg-red-600 text-white",
      image:
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=300&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الأسترالية",
      country: "أستراليا",
      deadline: "أبريل 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكامل",
      description: "منحة مع راتب شهري A$3,000 وتذاكر طيران",
      link: "https://www.australiaawards.gov.au/",
      badgeColor: "bg-orange-500 text-white",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الفرنسية",
      country: "فرنسا",
      deadline: "مارس 2025",
      level: "ماجستير/دكتوراه",
      funding: "ممولة بالكا��ل",
      description: "منحة مع راتب شهري €1,200 ودورة لغة فرنسية",
      link: "https://www.campusfrance.org/en/",
      badgeColor: "bg-blue-600 text-white",
      image:
        "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الصينية CSC",
      country: "الصين",
      deadline: "مارس 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      description: "منحة شاملة مع راتب شهري وسكن مجاني ودورة لغة",
      link: "http://www.csc.edu.cn",
      badgeColor: "bg-red-500 text-white",
      image:
        "https://images.unsplash.com/photo-1508515803269-23c93a85bf30?w=300&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة البريطانية Chevening",
      country: "بريطانيا",
      deadline: "نوفمبر 2024",
      level: "ماجستير",
      funding: "ممولة بالكامل",
      description: "منحة مرموقة مع راتب شهري £1,200 وتذاكر طيران",
      link: "https://www.chevening.org/",
      badgeColor: "bg-purple-600 text-white",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
    },
    {
      title: "منحة جامعة قطر",
      country: "قطر",
      deadline: "فبراير 2025",
      level: "جميع المستويات",
      funding: "ممولة بالكامل",
      description: "منحة مع راتب شهري 2500 ريال قطري وسكن مجاني",
      link: "https://www.qu.edu.qa/",
      badgeColor: "bg-purple-600 text-white",
      image:
        "https://images.unsplash.com/photo-1541339907198-b8d0525ab2b5?w=300&h=200&fit=crop",
    },
    {
      title: "منحة الحكومة الهولندية",
      country: "هولندا",
      deadline: "فبراير 2025",
      level: "ماجستير",
      funding: "منحة جزئية",
      description: "منحة مع راتب شهري €950 وإعفاء من الرسوم",
      link: "https://www.studyinnl.org/",
      badgeColor: "bg-orange-600 text-white",
      image:
        "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=300&h=200&fit=crop",
    },
  ];

  const filteredScholarships = allScholarships.filter((scholarship) => {
    const matchesSearch =
      searchTerm === "" ||
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.country.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCountry =
      selectedCountry === "" ||
      selectedCountry === "جميع الدول" ||
      scholarship.country === selectedCountry;

    const matchesLevel =
      selectedLevel === "" ||
      selectedLevel === "جميع المستويات" ||
      scholarship.level.includes(selectedLevel) ||
      scholarship.level === "جميع المستويات";

    const matchesFunding =
      selectedFunding === "" ||
      selectedFunding === "نوع التمويل" ||
      scholarship.funding.includes(selectedFunding);

    return matchesSearch && matchesCountry && matchesLevel && matchesFunding;
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            البحث عن المنح الدراسية
          </h1>
          <p className="text-xl text-muted-foreground">
            ابحث عن المنحة المناسبة لك من بين مئات الفرص المتاحة
          </p>
        </div>

        {/* Search Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              فلاتر البحث
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <SearchIcon className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="ابحث عن منحة..."
                  className="pr-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-3 py-2 border border-input rounded-md bg-background"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">جميع الدول</option>
                <option value="السعودية">السعودية</option>
                <option value="الإمارات">الإمارات</option>
                <option value="قطر">قطر</option>
                <option value="تركيا">تركيا</option>
                <option value="ألمانيا">ألمانيا</option>
                <option value="كندا">كندا</option>
                <option value="أستراليا">أستراليا</option>
                <option value="اليابان">اليابان</option>
                <option value="فرنسا">فرنسا</option>
                <option value="الصين">الصين</option>
                <option value="بريطانيا">بريطانيا</option>
                <option value="هولندا">هولندا</option>
              </select>
              <select
                className="px-3 py-2 border border-input rounded-md bg-background"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="">جميع المستويات</option>
                <option value="بكالوريوس">بكالوريوس</option>
                <option value="ماجستير">ماجستير</option>
                <option value="دكتوراه">دكتوراه</option>
              </select>
              <select
                className="px-3 py-2 border border-input rounded-md bg-background"
                value={selectedFunding}
                onChange={(e) => setSelectedFunding(e.target.value)}
              >
                <option value="">نوع التمويل</option>
                <option value="ممولة بالكامل">ممول بالكامل</option>
                <option value="منحة جزئية">ممول جزئياً</option>
              </select>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCountry("");
                  setSelectedLevel("");
                  setSelectedFunding("");
                }}
                variant="outline"
              >
                مسح الفلاتر
              </Button>
              <div className="text-sm text-muted-foreground">
                عُثر على {filteredScholarships.length} منحة
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship, index) => (
              <Card
                key={index}
                className="scholarship-card group hover:scale-105 transition-transform"
              >
                <CardHeader>
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={scholarship.image}
                      alt={scholarship.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={scholarship.badgeColor}>
                      {scholarship.country}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 ml-1" />
                      {scholarship.deadline}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{scholarship.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center text-green-600">
                      <DollarSign className="w-4 h-4 ml-1" />
                      {scholarship.funding}
                    </div>
                    <div className="flex items-center text-blue-600">
                      <MapPin className="w-4 h-4 ml-1" />
                      {scholarship.level}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {scholarship.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={scholarship.link}
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
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                لم نجد منح مطابقة لبحثك
              </h3>
              <p className="text-muted-foreground mb-4">
                جرب تغيير معايير البحث أو التواصل معنا للمساعدة
              </p>
              <a
                href="https://wa.me/6285932416084"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <MessageCircle className="w-4 h-4 ml-2" />
                  تحدث مع خبير
                </Button>
              </a>
            </div>
          )}
        </div>

        {filteredScholarships.length > 0 && (
          <div className="text-center mt-12">
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-semibold mb-2">
                تحتاج مساعدة في اختيار المنحة المناسبة؟
              </h3>
              <p className="text-muted-foreground mb-4">
                تحدث مع خبرائنا للحصول على توصيات مخصصة لملفك الأكاديمي
              </p>
              <a
                href="https://wa.me/6285932416084"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="whatsapp-button">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  احصل على استشارة مجانية
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
