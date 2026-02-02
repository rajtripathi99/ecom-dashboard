import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const orders = [
    {
      id: "#1024",
      customer: "John Doe",
      amount: "$320",
      status: "Shipped",
    },
    {
      id: "#1023",
      customer: "Aman Verma",
      amount: "$150",
      status: "Pending",
    },
    {
      id: "#1022",
      customer: "Sneha Sharma",
      amount: "$420",
      status: "Delivered",
    },
    {
      id: "#1021",
      customer: "Rohit Singh",
      amount: "$89",
      status: "Cancelled",
    },
  ]
  
  function getStatusVariant(status: string) {
    switch (status) {
      case "Delivered":
        return "default"
      case "Shipped":
        return "secondary"
      case "Pending":
        return "outline"
      default:
        return "destructive"
    }
  }
  
  export default function RecentOrders() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
  
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
  
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">
                    {order.id}
                  </TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {order.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  }