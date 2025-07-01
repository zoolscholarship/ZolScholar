import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  TrendingUp,
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  FileText,
  Target,
  Lightbulb,
  Star,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function Blog() {
  const featuredArticle = {
    id: 1,
    title: "الدليل الشامل للحصول على منحة دراسية مضمونة في 2025",
    excerpt:
      "خطوات عملية ومجربة لزيادة فرص قبولك في أفضل المنح الدراسية حول العالم. نصائح من خبراء وطلاب حصلوا على منح بقيمة ملايين الدولارات.",
    content:
      "في هذا الدليل الشامل، سنشارك معك أهم الأسرار والاستراتيجيات التي استخدمها آلاف الطلاب الناجحين...",
    author: "فريق حلم زول بسيط",
    date: "2024-12-20",
    readTime: "15 دقيقة",
    views: 2847,
    likes: 234,
    category: "دليل شامل",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
    featured: true,
  };

  const articles = [
    {
      id: 2,
      title: "كيفية كتابة رسالة دافع مقنعة تضمن قبولك",
      excerpt:
        "تعلم أسرار كتابة رسالة دافع احترافية تبهر لجنة التحكيم وتضمن حصولك على المنحة.",
      author: "د. أحمد محمد",
      date: "2024-12-18",
      readTime: "8 دقائق",
      views: 1523,
      likes: 89,
      category: "رسالة الدافع",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=200&fit=crop",
    },
    {
      id: 3,
      title: "أفضل 10 مواقع للبحث عن المنح الدراسية المجانية",
      excerpt:
        "قائمة محدثة بأهم المواقع والمنصات التي تحتوي على آلاف المنح الدراسية حول العالم.",
      author: "سارة أحمد",
      date: "2024-12-15",
      readTime: "6 دقائق",
      views: 3241,
      likes: 156,
      category: "مواقع مفيدة",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    },
    {
      id: 4,
      title: "أخطاء شائعة تدمر فرصك في الحصول على المنحة",
      excerpt:
        "تجنب هذه الأخطاء الـ15 التي يقع فيها معظم المتقدمين وتؤدي إلى رفض طلباتهم.",
      author: "محمد علي",
      date: "2024-12-12",
      readTime: "10 دقائق",
      views: 1876,
      likes: 123,
      category: "نصائح مهمة",
      image:
        "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=400&h=200&fit=crop",
    },
    {
      id: 5,
      title: "تحضير السيرة الذاتية الأكاديمية المثالية",
      excerpt:
        "كل ما تحتاج معرفته لإنشاء سيرة ذاتية أكاديمية مميزة تلفت انتباه لجان المنح.",
      author: "فاطمة محمود",
      date: "2024-12-10",
      readTime: "12 دقيقة",
      views: 2156,
      likes: 178,
      category: "السيرة الذاتية",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=200&fit=crop",
    },
    {
      id: 6,
      title: "كيفية التأهل لامتحانات اللغة (IELTS/TOEFL)",
      excerpt:
        "استراتيجيات فعالة لتحقيق الدرجات المطلوبة في امتحانات اللغة الإنجليزية.",
      author: "يوسف الأحمد",
      date: "2024-12-08",
      readTime: "9 دقائق",
      views: 1654,
      likes: 94,
      category: "امتحانات اللغة",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop",
    },
    {
      id: 7,
      title: "أسرار النجاح في المقابلات الشخصية للمنح",
      excerpt:
        "نصائح من طلاب نجحوا في المقابلات وحصلوا على منح في أفضل الجامعات.",
      author: "نور الدين",
      date: "2024-12-05",
      readTime: "11 دقيقة",
      views: 1987,
      likes: 145,
      category: "المقابلات",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    },
  ];

  const categories = [
    { name: "الكل", count: 25, active: true },
    { name: "دليل شامل", count: 5 },
    { name: "رسالة الدافع", count: 8 },
    { name: "السيرة الذاتية", count: 6 },
    { name: "نصائح مهمة", count: 12 },
    { name: "المقابلات", count: 4 },
    { name: "امتحانات اللغة", count: 7 },
  ];

  const tips = [
    "ابدأ التحضير للمنحة قبل الموعد النهائي بـ 6 أشهر على الأقل",
    "اقرأ متطلبات المنحة بعناية واتبع التعليمات بدقة",
    "اطلب خطابات التوصية من أساتذة يعرفونك جيداً",
    "راجع طلبك عدة مرات قبل الإرسال",
    "تواصل مع طلاب حصلوا على المنحة من قبل",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            📚 مدونة المنح الدراسية
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            دليلك الشامل للحصول على المنح الدراسية - نصائح، استراتيجيات، وقصص
            نجاح
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <Card className="scholarship-card mb-8 overflow-hidden">
              <div className="relative">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                    <Star className="w-4 h-4 ml-1" />
                    مميز
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{featuredArticle.category}</Badge>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <CardTitle className="text-2xl">
                  {featuredArticle.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {featuredArticle.views.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 ml-1" />
                      {featuredArticle.likes}
                    </Button>
                    <Button size="sm">اقرأ المزيد</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="scholarship-card hover:scale-105 transition-transform"
                >
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {article.views}
                        </span>
                        <Button variant="outline" size="sm">
                          اقرأ
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card className="scholarship-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  التصنيفات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant={category.active ? "default" : "ghost"}
                      className="w-full justify-between"
                      size="sm"
                    >
                      {category.name}
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="scholarship-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  نصائح سريعة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {tip}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="scholarship-card bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">📧 اشترك في النشرة</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  احصل على أحدث النصائح والمنح مباشرة على واتساب
                </p>
                <a
                  href="https://wa.me/6285932416084"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    اشترك الآن
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
