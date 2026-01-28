import { Card, CardContent } from "../ui/card"
import { LucideIcon } from "lucide-react"

type StatCardProps = {
    title: string
    value: string
    change: string
    icon: LucideIcon
}

export default function StatCard({ title, value, change, icon: Icon }: StatCardProps) {
    return (
        <Card className="hover:border-muted-foreground/50 transition-colors">
            <CardContent className="flex items-start justify-between">
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{title}</p>
                    <h2 className="text-4xl font-bold">{value}</h2>
                </div>
                <div className="flex flex-col items-end justify-start gap-3">
                    <div className="p-2.5 bg-muted rounded-lg">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-green-500">{change}</span>
                </div>
            </CardContent>
        </Card>
    )
}