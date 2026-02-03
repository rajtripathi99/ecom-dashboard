import { OrdersTable } from "@/components/orders/OrdersTable";

export default function Orders() {
    return (
        <div className="flex items-center gap-4">
            <OrdersTable />
        </div>
    );
}