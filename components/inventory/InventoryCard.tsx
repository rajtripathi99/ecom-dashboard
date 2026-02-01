import { Card, CardContent } from "../ui/card"
import { LucideIcon } from "lucide-react"

type InventoryCardProps = {
    title: string
    value: string
    change: string
    icon: LucideIcon
    changeColor?: "green" | "red" | "yellow"
}

export default function InventoryCard({ 
    title, 
    value, 
    change, 
    icon: Icon,
    changeColor = "green"
}: InventoryCardProps) {
    const getChangeColorClass = () => {
        switch (changeColor) {
            case "green":
                return "text-green-500"
            case "red":
                return "text-red-500"
            case "yellow":
                return "text-yellow-500"
            default:
                return "text-green-500"
        }
    }

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
                    <span className={`text-sm font-semibold ${getChangeColorClass()}`}>{change}</span>
                </div>
            </CardContent>
        </Card>
    )
}