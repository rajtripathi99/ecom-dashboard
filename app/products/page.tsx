import { ProductsTable } from "@/components/products/ProductsTable";

export default function Products() {
    return (
        <div className="flex flex-col items-center gap-4">
            <ProductsTable />
        </div>
    );
}