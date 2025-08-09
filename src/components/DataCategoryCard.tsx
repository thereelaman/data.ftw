import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface DataCategoryCardProps {
  category: {
    name: string;
    description: string;
    icon: LucideIcon;
    href: string;
  };
}

export function DataCategoryCard({ category }: DataCategoryCardProps) {
  return (
    <Link href={category.href}>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
          <category.icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
