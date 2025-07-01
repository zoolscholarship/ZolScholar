import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Target,
  Calendar,
  Plus,
  Edit,
  Trash2,
  MessageCircle,
  TrendingUp,
  Award,
  BookOpen,
  Zap,
} from "lucide-react";

export default function ApplicationTracker() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      scholarship: "منحة DAAD الألمانية",
      university: "جامعة ميونخ التقنية",
      deadline: "2025-03-15",
      status: "قيد المراجعة",
      progress: 75,
      documents: {
        cv: "مكتمل",
        motivation: "مكتمل",
        transcripts: "مكتمل",
        language: "مطلوب",
      },
      statusColor: "bg-blue-500",
      nextStep: "إرسال شهادة اللغة",
    },
    {
      id: 2,
      scholarship: "منحة Fulbright الأمريكية",
      university: "جامعة هارفارد",
      deadline: "2024-10-15",
      status: "تم التقديم",
      progress: 100,
      documents: {
        cv: "مكتمل",
        motivation: "مكتمل",
        transcripts: "مكتمل",
        language: "مكتمل",
      },
      statusColor: "bg-green-500",
      nextStep: "انتظار النتيجة",
    },
    {
      id: 3,
      scholarship: "منحة الحكومة الكندية",
      university: "جامعة تورونتو",
      deadline: "2025-01-30",
      status: "في البداية",
      progress: 25,
      documents: {
        cv: "مكتمل",
        motivation: "مطلوب",
        transcripts: "مطلوب",
        language: "مطلوب",
      },
      statusColor: "bg-yellow-500",
      nextStep: "كتابة رسالة الدافع",
    },
  ]);

  const [stats] = useState({
    total: 3,
    submitted: 1,
    inProgress: 2,
    accepted: 0,
    deadline_soon: 1,
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "تم التقديم":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "قيد المراجعة":
        return <Clock className="w-5 h-5 text-blue-500" />;
      case "في البداية":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDocumentIcon = (status: string) => {
    return status === "مكتمل" ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : (
      <AlertCircle className="w-4 h-4 text-orange-500" />
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              📊 متابع طلباتك
            </h1>
            <p className="text-xl text-muted-foreground">
              تتبع تقدمك في جميع طلبات المنح الدراسية
            </p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            <Plus className="w-4 h-4 ml-2" />
            إضافة طلب جديد
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-sm text-muted-foreground">
                إجمالي الطلبات
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.submitted}</div>
              <div className="text-sm text-muted-foreground">تم التقديم</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.inProgress}</div>
              <div className="text-sm text-muted-foreground">قيد العمل</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.accepted}</div>
              <div className="text-sm text-muted-foreground">تم القبول</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.deadline_soon}</div>
              <div className="text-sm text-muted-foreground">موعد قريب</div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <div className="space-y-6">
          {applications.map((app) => {
            const daysLeft = getDaysUntilDeadline(app.deadline);
            const isUrgent = daysLeft <= 30;

            return (
              <Card key={app.id} className="scholarship-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(app.status)}
                      <div>
                        <CardTitle className="text-xl">
                          {app.scholarship}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {app.university}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge className={app.statusColor}>{app.status}</Badge>
                      <Badge variant={isUrgent ? "destructive" : "outline"}>
                        <Calendar className="w-4 h-4 ml-1" />
                        {daysLeft > 0
                          ? `${daysLeft} يوم متبقي`
                          : "انتهى الموعد"}
                      </Badge>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">التقدم العام</span>
                      <span className="text-sm text-muted-foreground">
                        {app.progress}%
                      </span>
                    </div>
                    <Progress value={app.progress} className="h-2" />
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Documents Status */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 ml-2" />
                        حالة المستندات
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">السيرة الذاتية</span>
                          <div className="flex items-center gap-2">
                            {getDocumentIcon(app.documents.cv)}
                            <span className="text-sm">{app.documents.cv}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">رسالة الدافع</span>
                          <div className="flex items-center gap-2">
                            {getDocumentIcon(app.documents.motivation)}
                            <span className="text-sm">
                              {app.documents.motivation}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">كشف الدرجات</span>
                          <div className="flex items-center gap-2">
                            {getDocumentIcon(app.documents.transcripts)}
                            <span className="text-sm">
                              {app.documents.transcripts}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">شهادة اللغة</span>
                          <div className="flex items-center gap-2">
                            {getDocumentIcon(app.documents.language)}
                            <span className="text-sm">
                              {app.documents.language}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Next Steps */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Target className="w-4 h-4 ml-2" />
                        الخطوة التالية
                      </h4>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-blue-500" />
                          <span className="font-medium text-blue-800">
                            {app.nextStep}
                          </span>
                        </div>
                        <p className="text-sm text-blue-600">
                          {app.progress < 100
                            ? "أكمل هذه الخطوة لتقديم طلبك"
                            : "تم إرسال الطلب بنجاح"}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 ml-1" />
                          تحديث
                        </Button>
                        <Button variant="outline" size="sm">
                          <TrendingUp className="w-4 h-4 ml-1" />
                          التفاصيل
                        </Button>
                        <a
                          href="https://wa.me/6285932416084"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4 ml-1" />
                            مساعدة
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Section */}
        <Card className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="p-6 text-center">
            <MessageCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">تحتاج مساعدة؟</h3>
            <p className="text-muted-foreground mb-4">
              فريقنا جاهز لمساعدتك في كل خطوة من رحلة التقديم للمنح
            </p>
            <a
              href="https://wa.me/6285932416084"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                <MessageCircle className="w-4 h-4 ml-2" />
                تحدث مع خبير
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
