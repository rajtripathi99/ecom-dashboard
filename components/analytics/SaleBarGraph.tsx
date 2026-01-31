"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartConfig = {
  orders: {
    label: "Orders",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function SaleBarGraph() {
  const [chartData, setChartData] = React.useState<Array<{ category: string; orders: number }>>([])
  const [loading, setLoading] = React.useState(true)
  const [topCategory, setTopCategory] = React.useState("")
  const [percentageIncrease, setPercentageIncrease] = React.useState(0)

  React.useEffect(() => {
    const fetchSalesData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()

        const categoryMap = new Map<string, number>()
        
        data.products.forEach((product: any) => {
          const category = product.category
          const orders = product.stock || 0
          
          if (categoryMap.has(category)) {
            categoryMap.set(category, categoryMap.get(category)! + orders)
          } else {
            categoryMap.set(category, orders)
          }
        })

        const categoryData = Array.from(categoryMap.entries())
          .map(([category, orders]) => ({
            category: category.charAt(0).toUpperCase() + category.slice(1),
            orders
          }))
          .sort((a, b) => b.orders - a.orders)
          .slice(0, 6)

        setChartData(categoryData)

        if (categoryData.length > 0) {
          setTopCategory(categoryData[0].category)
          
          if (categoryData.length >= 2) {
            const lowest = categoryData[categoryData.length - 1].orders
            const highest = categoryData[0].orders
            const increase = ((highest - lowest) / lowest) * 100
            setPercentageIncrease(Math.round(increase * 10) / 10)
          }
        }
      } catch (error) {
        console.error('Error fetching sales data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSalesData()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sales by Category</CardTitle>
          <CardDescription>Loading...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Loading sales data...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Category</CardTitle>
        <CardDescription>Top performing categories</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 20,
            }}
          >
            <XAxis type="number" dataKey="orders" hide />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.length > 12 ? value.slice(0, 12) + '...' : value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="orders" fill="var(--color-orders)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {topCategory} leading by {percentageIncrease}% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total orders by category
        </div>
      </CardFooter>
    </Card>
  )
}