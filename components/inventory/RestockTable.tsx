"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
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
import { Package } from "lucide-react"

type RestockProduct = {
  id: number
  title: string
  thumbnail: string
  currentStock: number
  restockQuantity: number
}

export default function RestockTable() {
  const [products, setProducts] = React.useState<RestockProduct[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchRestockProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        const lowStockProducts = data.products
          .filter((product: any) => product.stock < 20)
          .map((product: any) => ({
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            currentStock: product.stock,
            restockQuantity: 30 - product.stock 
          }))
          .slice(0, 5)

        setProducts(lowStockProducts)
      } catch (error) {
        console.error('Error fetching restock suggestions:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRestockProducts()
  }, [])

  const handleOrderAll = () => {
    console.log('Ordering all restock items:', products)
  }

  if (loading) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Restock Suggestions</CardTitle>
            <CardDescription>Products are put or offert you need</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">Loading...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle>Restock Suggestions</CardTitle>
          <CardDescription>Products are put or offert you need</CardDescription>
        </div>
        <Button 
          className="bg-green-600 hover:bg-green-700"
          onClick={handleOrderAll}
        >
          Order All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="pl-6">Product</TableHead>
              <TableHead className="text-center">Current Stock</TableHead>
              <TableHead className="text-right pr-6">Restock Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length > 0 ? (
              products.map((product) => (
                <TableRow key={product.id} className="border-b border-border last:border-0">
                  <TableCell className="font-medium pl-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center flex-shrink-0">
                        {product.thumbnail ? (
                          <img 
                            src={product.thumbnail} 
                            alt={product.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Package className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <span className="text-base">{product.title}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-base py-4">{product.currentStock}</TableCell>
                  <TableCell className="text-right pr-6 text-base font-medium text-green-500 py-4">
                    + {product.restockQuantity}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                  No products need restocking
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}