import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, ExternalLink, MessageCircle } from "lucide-react";

export default function ScholarshipsFullyFunded() {
  const whatsappLink = "https://wa.me/6285932416084";

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
          {/* Placeholder content */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Card key={item} className="scholarship-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary text-primary-foreground">
                    تركيا
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    آخر موعد: 31 يناير
                  </span>
                </div>
                <CardTitle className="text-xl">
                  منحة الحكومة التركية 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">المستوى:</span>
                    <span>جميع المستويات</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">التمويل:</span>
                    <span className="text-green-600 font-semibold">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">اللغة:</span>
                    <span>التركية/الإنجليزية</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-sm">المزايا:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• راتب شهري 1000 ليرة</li>
                    <li>• سكن مجاني</li>
                    <li>• تأمين صحي شامل</li>
                    <li>• تذاكر طيران</li>
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    التفاصيل والتقديم
                    <ExternalLink className="w-4 h-4 mr-2" />
                  </Button>
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
