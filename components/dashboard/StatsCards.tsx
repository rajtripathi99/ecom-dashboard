import StatCard from "./StatCard"
import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react"

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$32,540"
        change="+12%"
        icon={DollarSign}
      />

      <StatCard
        title="Total Orders"
        value="1,250"
        change="+8%"
        icon={ShoppingCart}
      />

      <StatCard
        title="Customers"
        value="842"
        change="+5%"
        icon={Users}
      />

      <StatCard
        title="Conversion Rate"
        value="3.5%"
        change="+1.2%"
        icon={TrendingUp}
      />
    </div>
  )
}