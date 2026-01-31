import { RevenueChart } from "@/components/analytics/RevenueChart";
import StatsCards from "@/components/dashboard/StatsCards";
import SaleBarGraph from "@/components/analytics/SaleBarGraph";
import TopProductsTable from "@/components/analytics/TopProductsTable";

export default function Analytics() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full">
                <StatsCards />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left */}
                <RevenueChart />
                {/* Right */}
                <SaleBarGraph />
            </div>
            <div className="w-full">
                <TopProductsTable />
            </div>
        </div>
    );
}