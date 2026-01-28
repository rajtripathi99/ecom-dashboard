import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const products = [
    {
        name: "Wireless Headphones",
        price: "$199",
        sales: 320,
    },
    {
        name: "Smart Watch",
        price: "$249",
        sales: 280,
    },
    {
        name: "Gaming Mouse",
        price: "$79",
        sales: 210,
    },
    {
        name: "Bluetooth Speaker",
        price: "$99",
        sales: 180,
    },
]

export default function TopProducts() {
    return (
        <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
                <CardTitle>Top Products</CardTitle>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-right">Sales</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell className="font-medium">
                                    {product.name}
                                </TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell className="text-right">
                                    {product.sales}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}