import CategoriesCards from "@/components/categories/CategoryCards";
import { CategoryPieChart } from "@/components/categories/CategoryPieChart";
import CategoryTable from "@/components/categories/CategoryTable";

export default function Categories() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full">
                <CategoriesCards />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left */}
                <CategoryTable />
                {/* Right */}
                <CategoryPieChart />
            </div>
        </div>
    );
}