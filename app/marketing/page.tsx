import ActiveCampaigns from "@/components/marketing/ActiveCampaigns";
import MarketingCards from "@/components/marketing/MarketingCards";
import { SalesPieChart } from "@/components/marketing/SalesPieChart";

export default function Marketing() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full">
                <MarketingCards />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left */}
                <SalesPieChart />
                {/* Right */}
                <ActiveCampaigns />
            </div>
        </div>
    );
}