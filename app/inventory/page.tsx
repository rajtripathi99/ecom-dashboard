import InventoryCards from "@/components/inventory/InventoryCards";
import { InventoryPieChart } from "@/components/inventory/InventoryPieChart";
import RestockTable from "@/components/inventory/RestockTable";

export default function Inventory() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full">
                <InventoryCards />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left */}
                <InventoryPieChart />
                {/* Right */}
                <RestockTable />
            </div>
        </div>
    );
}