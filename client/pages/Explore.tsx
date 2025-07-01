import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  TrendingUp,
  Award,
  Users,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  Zap,
  Star,
  Target,
  ArrowRight,
  Filter,
  Heart,
  Eye,
} from "lucide-react";
import { scholarshipsDatabase } from "@/data/scholarships";

export default function Explore() {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // تجميع المنح حسب المناطق
  const regions = [
    { id: "all", name: "جميع المناطق", count: scholarshipsDatabase.length },
    {
      id: "europe",
      name: "أوروبا",
      countries: ["ألمانيا", "فرنسا", "بريطانيا", "هولندا"],
      count: scholarshipsDatabase.filter((s) =>
        ["ألمانيا", "فرنسا", "بريطانيا", "هولندا"].includes(s.country),
      ).length,
    },
    {
      id: "asia",
      name: "آسيا",
      countries: ["اليابان", "الصين", "كوريا", "سنغافورة"],
      count: scholarshipsDatabase.filter((s) =>
        ["اليابان", "الصين", "كوريا", "سنغافورة"].includes(s.country),
      ).length,
    },
    {
      id: "americas",
      name: "الأمريكتان",
      countries: ["أمريكا", "كندا", "البرازيل"],
      count: scholarshipsDatabase.filter((s) =>
        ["أمريكا", "كندا", "البرازيل"].includes(s.country),
      ).length,
    },
    {
      id: "arab",
      name: "العالم العربي",
      countries: ["السعودية", "الإمارات", "قطر", "مصر"],
      count: scholarshipsDatabase.filter((s) =>
        ["السعودية", "الإمارات", "قطر", "مصر"].includes(s.country),
      ).length,
    },
    {
      id: "oceania",
      name: "أوقيانوسيا",
      countries: ["أستراليا", "نيوزيلندا"],
      count: scholarshipsDatabase.filter((s) =>
        ["أستراليا", "نيوزيلندا"].includes(s.country),
      ).length,
    },
  ];

  // تصنيفات المنح
  const categories = [
    { id: "all", name: "جميع الأنواع", icon: Globe },
    { id: "fully-funded", name: "ممولة بالكامل", icon: Award },
    { id: "partial", name: "ممولة جزئياً", icon: DollarSign },
    { id: "airfare", name: "منح جوية", icon: Zap },
    { id: "research", name: "منح بحثية", icon: BookOpen },
  ];

  // فلترة المنح
  const getFilteredScholarships = () => {
    let filtered = scholarshipsDatabase;

    if (selectedRegion !== "all") {
      const region = regions.find((r) => r.id === selectedRegion);
      if (region && region.countries) {
        filtered = filtered.filter((s) =>
          region.countries!.includes(s.country),
        );
      }
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((s) => s.category === selectedCategory);
    }

    return filtered;
  };

  const filteredScholarships = getFilteredScholarships();

  // أفضل المنح (حسب معدل النجاح)
  const topScholarships = scholarshipsDatabase
    .sort((a, b) => parseInt(b.successRate) - parseInt(a.successRate))
    .slice(0, 6);

  // أحدث المنح
  const newestScholarships = scholarshipsDatabase.slice(-6);

  // منح شائعة
  const popularScholarships = scholarshipsDatabase
    .filter((s) => s.funding === "ممولة بالكامل")
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              🌍 استكشف عالم المنح الدراسية
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              اكتشف أكثر من 250 منحة دراسية من جميع أنحاء العالم واختر ما يناسب
              أحلامك الأكاديمية
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <Globe className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">250+</div>
              <div className="text-muted-foreground">منحة متاحة</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <MapPin className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-muted-foreground">دولة</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">150+</div>
              <div className="text-muted-foreground">منحة ممولة بالكامل</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">10k+</div>
              <div className="text-muted-foreground">طالب مستفيد</div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Region */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            🗺️ استكشف المنح حسب المنطقة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regions.slice(1).map((region) => (
              <Card
                key={region.id}
                className="scholarship-card cursor-pointer hover:scale-105 transition-all"
                onClick={() => setSelectedRegion(region.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{region.name}</span>
                    <Badge className="bg-primary text-primary-foreground">
                      {region.count} منحة
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {region.countries?.map((country) => (
                      <div
                        key={country}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <MapPin className="w-4 h-4" />
                        {country}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4">
                    استكشف المنح
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            ⭐ مجموعات مختارة
          </h2>

          {/* Top Scholarships */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
                أفضل المنح (معدل نجاح عالي)
              </h3>
              <Link to="/search">
                <Button variant="outline">عرض الكل</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topScholarships.map((scholarship) => (
                <Card
                  key={scholarship.id}
                  className="scholarship-card hover:scale-105 transition-transform"
                >
                  <CardHeader>
                    <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
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
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">
                          {scholarship.successRate}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">
                      {scholarship.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm mb-4">
                      <div className="flex items-center text-green-600">
                        <DollarSign className="w-4 h-4 ml-1" />
                        {scholarship.funding}
                      </div>
                      <div className="flex items-center text-blue-600">
                        <Calendar className="w-4 h-4 ml-1" />
                        {scholarship.deadline}
                      </div>
                    </div>
                    <Link to={`/scholarship/${scholarship.id}`}>
                      <Button className="w-full">
                        عرض التفاصيل
                        <ArrowRight className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Scholarships */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                المنح الأكثر شعبية
              </h3>
              <Link to="/search">
                <Button variant="outline">عرض الكل</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularScholarships.map((scholarship) => (
                <Card
                  key={scholarship.id}
                  className="scholarship-card hover:scale-105 transition-transform"
                >
                  <CardHeader>
                    <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
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
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">شائع</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">
                      {scholarship.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {scholarship.description.slice(0, 100)}...
                    </p>
                    <Link to={`/scholarship/${scholarship.id}`}>
                      <Button className="w-full">
                        عرض التفاصيل
                        <ArrowRight className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* New Scholarships */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Zap className="w-6 h-6 text-blue-500" />
                أحدث المنح
              </h3>
              <Link to="/search">
                <Button variant="outline">عرض الكل</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newestScholarships.map((scholarship) => (
                <Card
                  key={scholarship.id}
                  className="scholarship-card hover:scale-105 transition-transform"
                >
                  <CardHeader>
                    <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
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
                      <Badge className="bg-blue-500 text-white">جديد</Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {scholarship.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm mb-4">
                      <div className="flex items-center text-green-600">
                        <DollarSign className="w-4 h-4 ml-1" />
                        {scholarship.funding}
                      </div>
                      <div className="flex items-center text-orange-600">
                        <Calendar className="w-4 h-4 ml-1" />
                        {scholarship.deadline}
                      </div>
                    </div>
                    <Link to={`/scholarship/${scholarship.id}`}>
                      <Button className="w-full">
                        عرض التفاصيل
                        <ArrowRight className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            🎯 تصفح حسب النوع
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const count = scholarshipsDatabase.filter((s) =>
                category.id === "all" ? true : s.category === category.id,
              ).length;

              return (
                <Card
                  key={category.id}
                  className="scholarship-card cursor-pointer hover:scale-105 transition-all text-center"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {count}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      منحة متاحة
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            جاهز لبدء رحلة البحث عن منحتك؟
          </h2>
          <p className="text-xl mb-8 opacity-90">
            استخدم أدواتنا المتقدمة للعثور على المنحة المثالية لك من بين أكثر من
            250 فرصة متاحة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-gray-100"
              >
                <Target className="w-5 h-5 ml-2" />
                ابحث عن منح
              </Button>
            </Link>
            <Link to="/recommendations">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Zap className="w-5 h-5 ml-2" />
                احصل على توصيات ذكية
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
