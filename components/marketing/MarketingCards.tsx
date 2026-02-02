import MarketingCard from "./MarketingCard"
import { Megaphone, Ticket, TrendingUp } from "lucide-react"

export default function MarketingCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <MarketingCard
        title="ACTIVE CAMPAIGNS"
        value="$2,120"
        subtitle="4 Campaigns"
        change="+15%"
        icon={Megaphone}
        changePositive={true}
      />

      <MarketingCard
        title="COUPONS USED"
        value="385"
        subtitle="120 this week"
        change="+22%"
        icon={Ticket}
        changePositive={true}
      />

      <MarketingCard
        title="CONVERSION UPLIFT"
        value="+8.7%"
        subtitle="This month"
        change="+1.2%"
        icon={TrendingUp}
        changePositive={true}
      />
    </div>
  )
}