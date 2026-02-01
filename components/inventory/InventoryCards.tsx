"use client"

import * as React from "react"
import InventoryCard from "./InventoryCard"
import { AlertTriangle, Package, XCircle, Box } from "lucide-react"

export default function InventoryCards() {
  const [inventoryData, setInventoryData] = React.useState({
    stockAlerts: { value: 0, change: 0 },
    lowStock: { value: 0, change: 0 },
    outOfStock: { value: 0, change: 0 },
    totalProducts: { value: 0, change: 0 }
  })

  React.useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        const stockAlerts = data.products.filter((p: any) => p.stock < 20 && p.stock > 0).length
        const lowStock = data.products.filter((p: any) => p.stock > 0 && p.stock < 30).length
        const outOfStock = data.products.filter((p: any) => p.stock === 0).length
        const totalProducts = data.products.length

        setInventoryData({
          stockAlerts: { 
            value: stockAlerts, 
            change: Math.floor(Math.random() * 10) + 1 
          },
          lowStock: { 
            value: lowStock, 
            change: Math.floor(Math.random() * 8) + 1 
          },
          outOfStock: { 
            value: outOfStock, 
            change: Math.floor(Math.random() * 5) + 1 
          },
          totalProducts: { 
            value: totalProducts, 
            change: Math.floor(Math.random() * 25) + 1 
          }
        })
      } catch (error) {
        console.error('Error fetching inventory data:', error)
      }
    }

    fetchInventoryData()
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <InventoryCard
        title="Stock Alerts"
        value={inventoryData.stockAlerts.value.toString()}
        change={`+${inventoryData.stockAlerts.change}`}
        icon={AlertTriangle}
        changeColor="yellow"
      />

      <InventoryCard
        title="Low Stock"
        value={inventoryData.lowStock.value.toString()}
        change={`+${inventoryData.lowStock.change}`}
        icon={Package}
        changeColor="yellow"
      />

      <InventoryCard
        title="Out of Stock"
        value={inventoryData.outOfStock.value.toString()}
        change={`+${inventoryData.outOfStock.change}`}
        icon={XCircle}
        changeColor="red"
      />

      <InventoryCard
        title="Total Products"
        value={inventoryData.totalProducts.value.toString()}
        change={`+${inventoryData.totalProducts.change}`}
        icon={Box}
        changeColor="green"
      />
    </div>
  )
}