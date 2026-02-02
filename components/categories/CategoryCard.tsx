import { Card, CardContent } from "../ui/card"
import { LucideIcon } from "lucide-react"

type CategoryCardProps = {
    title: string
    productCount: number
    revenue: string
    icon: LucideIcon
}

export default function CategoryCard({ title, productCount, revenue, icon: Icon }: CategoryCardProps) {
    return (
        <Card className="hover:border-muted-foreground/50 transition-colors">
            <CardContent className="">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col items-start justify-start gap-2">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{title}</p>
                        <h2 className="text-4xl font-bold">{productCount}</h2>
                        <span className="text-sm font-medium text-muted-foreground">{revenue}</span>
                    </div>
                    <div className="p-2.5 bg-muted rounded-lg">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}