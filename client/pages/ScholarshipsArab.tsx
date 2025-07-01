import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink, MessageCircle } from "lucide-react";

export default function ScholarshipsArab() {
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
            منح دراسية من الدول العربية: السعودية، الإمارات، مصر، قطر، السودان
          </p>
          <Badge className="mt-4 bg-amber-500 text-white text-lg px-4 py-2">
            80+ منحة متاحة
          </Badge>
        </div>

        <div className="text-center py-20">
          <MapPin className="w-24 h-24 text-muted-foreground mx-auto mb-6 animate-float" />
          <h2 className="text-2xl font-bold text-foreground mb-4">قريباً...</h2>
          <p className="text-muted-foreground mb-8">
            نعمل على إضافة قاعدة بيانات شاملة للمنح العربية
          </p>
          <a
            href="https://wa.me/6285932416084"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="whatsapp-button">
              <MessageCircle className="w-5 h-5 ml-2" />
              احصل على التحديثات عبر واتساب
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
