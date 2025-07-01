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
} from "lucide-react";

export default function Search() {
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
                <Input placeholder="ابحث عن منحة..." className="pr-10" />
              </div>
              <select className="px-3 py-2 border border-input rounded-md bg-background">
                <option>جميع الدول</option>
                <option>السعودية</option>
                <option>الإمارات</option>
                <option>تركيا</option>
                <option>ألمانيا</option>
                <option>كندا</option>
              </select>
              <select className="px-3 py-2 border border-input rounded-md bg-background">
                <option>جميع المستويات</option>
                <option>بكالوريوس</option>
                <option>ماجستير</option>
                <option>دكتوراه</option>
              </select>
              <select className="px-3 py-2 border border-input rounded-md bg-background">
                <option>نوع التمويل</option>
                <option>ممول بالكامل</option>
                <option>ممول جزئياً</option>
                <option>منح جوية</option>
              </select>
            </div>
            <div className="mt-4">
              <Button>
                <SearchIcon className="w-4 h-4 ml-2" />
                بحث
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder scholarship cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="scholarship-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary text-primary-foreground">
                    تركيا
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 ml-1" />
                    31 يناير 2024
                  </div>
                </div>
                <CardTitle className="text-xl">
                  منحة الحكومة التركية 2024
                </CardTitle>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <DollarSign className="w-4 h-4 ml-1" />
                    ممولة بالكامل
                  </div>
                  <div className="flex items-center text-blue-600">
                    <MapPin className="w-4 h-4 ml-1" />
                    جميع المستويات
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  منحة شاملة تغطي الرسوم الدراسية والسكن والمعيشة مع راتب شهري.
                </p>
                <Button className="w-full">عرض التفاصيل</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            عرض المزيد من النتائج
          </Button>
        </div>
      </div>
    </div>
  );
}
