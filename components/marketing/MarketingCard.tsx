import { Card, CardContent } from "../ui/card"
import { LucideIcon } from "lucide-react"

type MarketingCardProps = {
    title: string
    value: string
    subtitle: string
    change: string
    icon: LucideIcon
    changePositive?: boolean
}

export default function MarketingCard({ 
    title, 
    value, 
    subtitle, 
    change, 
    icon: Icon,
    changePositive = true 
}: MarketingCardProps) {
    return (
        <Card className="hover:border-muted-foreground/50 transition-colors">
            <CardContent className="">
                <div className="flex items-start justify-between mb-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {title}
                    </p>
                    <div className="p-2.5 bg-muted rounded-lg">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                </div>
                <div className="space-y-1">
                    <h2 className="text-3xl font-bold">{value}</h2>
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{subtitle}</span>
                        <span className={`text-sm font-semibold ${
                            changePositive ? 'text-green-500' : 'text-red-500'
                        }`}>
                            {change}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}