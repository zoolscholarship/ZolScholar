import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  DollarSign,
  MapPin,
  BookOpen,
  Users,
  FileText,
  CheckCircle,
  Clock,
  ExternalLink,
  MessageCircle,
  Heart,
  Share2,
  Star,
  TrendingUp,
  Globe,
  Award,
  Target,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  Download,
} from "lucide-react";
import { getScholarshipById, scholarshipsDatabase } from "@/data/scholarships";

export default function ScholarshipDetails() {
  const { id } = useParams<{ id: string }>();
  const [liked, setLiked] = useState(false);
  const [applied, setApplied] = useState(false);

  if (!id) {
    return <div>معرف المنحة غير صحيح</div>;
  }

  const scholarship = getScholarshipById(id);

  if (!scholarship) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">المنحة غير موجودة</h1>
          <Link to="/search">
            <Button>العودة للبحث</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedScholarships = scholarshipsDatabase
    .filter((s) => s.country === scholarship.country && s.id !== scholarship.id)
    .slice(0, 3);

  const similarScholarships = scholarshipsDatabase
    .filter(
      (s) => s.category === scholarship.category && s.id !== scholarship.id,
    )
    .slice(0, 3);

  const whatsappLink = "https://wa.me/6285932416084";
  const whatsappMessage = `مرحباً، أريد الاستفسار عن ${scholarship.title}`;
  const whatsappUrl = `${whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge className={scholarship.badgeColor}>
                  {scholarship.country}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  معدل النجاح: {scholarship.successRate}
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4">
                {scholarship.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {scholarship.university}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  آخر موعد: {scholarship.deadline}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {scholarship.duration}
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {scholarship.description}
              </p>

              <div className="flex items-center gap-4">
                <Button
                  size="lg"
                  onClick={() => setApplied(!applied)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {applied ? "تمت الإضافة للمفضلة" : "أضف للمفضلة"}
                  <Heart
                    className={`w-5 h-5 mr-2 ${applied ? "fill-current" : ""}`}
                  />
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setLiked(!liked)}
                  className="flex items-center gap-2"
                >
                  <Heart
                    className={`w-4 h-4 ${liked ? "fill-current text-red-500" : ""}`}
                  />
                  {liked ? "أعجبني" : "إعجاب"}
                </Button>

                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  مشاركة
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    التمويل
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>النوع:</span>
                      <span className="font-semibold text-green-600">
                        {scholarship.funding}
                      </span>
                    </div>
                    {scholarship.amount && (
                      <div className="flex justify-between">
                        <span>المبلغ:</span>
                        <span className="font-semibold">
                          {scholarship.amount}
                        </span>
                      </div>
                    )}
                    {scholarship.livingCost && (
                      <div className="flex justify-between">
                        <span>تكلفة المعيشة:</span>
                        <span className="text-sm text-muted-foreground">
                          {scholarship.livingCost}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    معلومات الدراسة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>المستوى:</span>
                      <span className="font-semibold">{scholarship.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>اللغة:</span>
                      <span className="font-semibold">
                        {scholarship.language}
                      </span>
                    </div>
                    {scholarship.workPermit !== undefined && (
                      <div className="flex justify-between">
                        <span>تصريح العمل:</span>
                        <span
                          className={`font-semibold ${
                            scholarship.workPermit
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {scholarship.workPermit ? "متاح" : "غير متاح"}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Support */}
              <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">تحتاج مساعدة؟</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    تحدث مع خبرائنا للحصول على استشارة مجانية
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full whatsapp-button justify-center">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      تحدث معنا الآن
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="benefits" className="space-y-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 h-auto p-1">
              <TabsTrigger value="benefits" className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                المزايا
              </TabsTrigger>
              <TabsTrigger
                value="requirements"
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                الشروط
              </TabsTrigger>
              <TabsTrigger
                value="application"
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                التقديم
              </TabsTrigger>
              <TabsTrigger value="subjects" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                التخصصات
              </TabsTrigger>
              <TabsTrigger value="tips" className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                نصائح
              </TabsTrigger>
              <TabsTrigger value="timeline" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                الجدول الزمني
              </TabsTrigger>
            </TabsList>

            {/* Benefits Tab */}
            <TabsContent value="benefits">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    مزايا المنحة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-green-500" />
                        المزايا المالية
                      </h4>
                      <ul className="space-y-3">
                        {scholarship.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        المزايا الإضافي��
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>شبكة خريجين عالمية</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>فرص تدريب عملي</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>مؤتمرات وورش عمل</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>إرشاد أكاديمي</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>أنشطة ثقافية واجتماعية</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Requirements Tab */}
            <TabsContent value="requirements">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    شروط التقديم
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">الشروط الأساسية</h4>
                      <ul className="space-y-3">
                        {scholarship.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">الفئة المستهدفة</h4>
                      <ul className="space-y-3">
                        {scholarship.targetStudents.map((target, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <Target className="w-5 h-5 text-blue-500" />
                            <span>{target}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Success Rate Progress */}
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold">معدل القبول:</span>
                      <span className="text-lg font-bold text-primary">
                        {scholarship.successRate}
                      </span>
                    </div>
                    <Progress
                      value={parseInt(scholarship.successRate)}
                      className="h-3"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      معدل قبول متوسط مقارنة بالمنح الأخرى في نفس الفئة
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Application Tab */}
            <TabsContent value="application">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-500" />
                    عملية التقديم
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">خطوات التقديم</h4>
                      <div className="space-y-4">
                        {scholarship.applicationProcess.map((step, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h5 className="font-medium">{step}</h5>
                              <p className="text-sm text-muted-foreground">
                                {index === 0 && "قم بملء الطلب أونلاين بعناية"}
                                {index === 1 && "تأكد من صحة جميع المعل��مات"}
                                {index === 2 && "استعد جيداً للمقابلة"}
                                {index === 3 && "انتظر النتيجة النهائية"}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">المستندات المطلوبة</h4>
                      <ul className="space-y-3">
                        {scholarship.documents.map((doc, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <Download className="w-4 h-4 text-green-500" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-semibold mb-2 text-blue-800">
                          هل تحتاج مساعدة في تحضير المستندات؟
                        </h5>
                        <p className="text-sm text-blue-700 mb-3">
                          نقدم خدمات كتابة رسالة ا��دافع، السيرة الذاتية، وترجمة
                          المستندات
                        </p>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" className="whatsapp-button">
                            اطلب المساعدة
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Subjects Tab */}
            <TabsContent value="subjects">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-purple-500" />
                    التخصصات المتاحة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {scholarship.subjects.map((subject, index) => (
                      <div
                        key={index}
                        className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center"
                      >
                        <BookOpen className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                        <h4 className="font-semibold">{subject}</h4>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">نصائح لاختيار التخصص</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• اختر تخصصاً يتماشى مع أهدافك المهنية</li>
                      <li>• تأكد من توفر فرص عمل في بلدك</li>
                      <li>• ابحث عن أساتذة مميزين في التخصص</li>
                      <li>• اعتبر متطلبات اللغة لكل تخصص</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tips Tab */}
            <TabsContent value="tips">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    نصائ�� للنجاح
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-green-600">
                        نصائح خاصة بهذه المنحة
                      </h4>
                      <ul className="space-y-3">
                        {scholarship.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-blue-600">
                        نصائح عامة للتقديم
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span>
                            ابدأ التحضير قبل 6 أشهر من الموعد النهائ��
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span>اقرأ متطلبات المنحة بعناية فائقة</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span>احصل على خطابات توصية قوية</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span>اكتب رسالة دافع مقنعة ومميزة</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span>راجع طلبك عدة مرات قبل الإرسال</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Timeline Tab */}
            <TabsContent value="timeline">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-blue-500" />
                    الجدول الزمني للتقديم
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                      <div>
                        <h4 className="font-semibold text-red-800">
                          موعد مهم!
                        </h4>
                        <p className="text-red-700">
                          آخر موعد للتقديم: {scholarship.deadline}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                        <h4 className="font-semibold mb-2">قبل 3 أشهر</h4>
                        <p className="text-sm text-muted-foreground">
                          ابدأ تحضير المستندات والحصول على خطابات التوصية
                        </p>
                      </div>

                      <div className="text-center p-6 bg-yellow-50 rounded-lg">
                        <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                        <h4 className="font-semibold mb-2">قبل شهر</h4>
                        <p className="text-sm text-muted-foreground">
                          اكمل الطلب أونلاين وراجع جميع المستندات
                        </p>
                      </div>

                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <Clock className="w-8 h-8 text-green-500 mx-auto mb-3" />
                        <h4 className="font-semibold mb-2">يوم التقديم</h4>
                        <p className="text-sm text-muted-foreground">
                          أرسل الطلب وتأكد من وصول التأكيد
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Scholarships */}
      {relatedScholarships.length > 0 && (
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              منح أخرى في {scholarship.country}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedScholarships.map((relatedScholarship) => (
                <Card
                  key={relatedScholarship.id}
                  className="scholarship-card hover:scale-105 transition-transform"
                >
                  <CardHeader>
                    <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={relatedScholarship.image}
                        alt={relatedScholarship.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">
                      {relatedScholarship.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {relatedScholarship.description.slice(0, 100)}...
                    </p>
                    <Link to={`/scholarship/${relatedScholarship.id}`}>
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
        </section>
      )}

      {/* Apply Now Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">جاهز للتقديم؟</h2>
          <p className="text-xl mb-8 opacity-90">
            لا تضيع هذه الفرصة الذهبية! قدم الآن واحصل على منحة أحلامك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={scholarship.applicationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-gray-100"
              >
                <ExternalLink className="w-5 h-5 ml-2" />
                قدِّم الآن
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                احصل على مساعدة
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
