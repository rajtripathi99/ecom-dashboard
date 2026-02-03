import { RevenueChart } from "@/components/dashboard/RevenueChart"
import StatsCards from "@/components/dashboard/StatsCards"
import TopProducts from "@/components/dashboard/TopProducts"
import RecentOrders from "@/components/dashboard/RecentOrders"

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <StatsCards />
      <RevenueChart />
      <div className="grid gap-4 lg:grid-cols-2">
        <TopProducts />
        <RecentOrders />
      </div>
    </div>
  )
}