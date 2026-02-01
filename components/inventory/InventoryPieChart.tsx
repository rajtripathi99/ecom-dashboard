"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
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

export function InventoryPieChart() {
  const [chartData, setChartData] = React.useState<Array<{ category: string; products: number; fill: string }>>([])
  const [loading, setLoading] = React.useState(true)
  const [chartConfig, setChartConfig] = React.useState<ChartConfig>({
    products: {
      label: "Products",
    },
  })

  const totalProducts = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.products, 0)
  }, [chartData])

  React.useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()

        const categoryMap = new Map<string, number>()
        
        data.products.forEach((product: any) => {
          const category = product.category
          categoryMap.set(category, (categoryMap.get(category) || 0) + 1)
        })

        const categoryData = Array.from(categoryMap.entries())
          .map(([category, count]) => ({
            category: category.charAt(0).toUpperCase() + category.slice(1),
            count
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5)

        const colors = [
          "var(--chart-1)",
          "var(--chart-2)",
          "var(--chart-3)",
          "var(--chart-4)",
          "var(--chart-5)",
        ]

        const formattedChartData = categoryData.map((item, index) => ({
          category: item.category,
          products: item.count,
          fill: colors[index]
        }))

        const config: ChartConfig = {
          products: {
            label: "Products",
          },
        }

        categoryData.forEach((item, index) => {
          config[item.category.toLowerCase()] = {
            label: item.category,
            color: colors[index],
          }
        })

        setChartData(formattedChartData)
        setChartConfig(config)
      } catch (error) {
        console.error('Error fetching inventory data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInventoryData()
  }, [])

  if (loading) {
    return (
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Inventory Distribution</CardTitle>
          <CardDescription>Loading...</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <div className="mx-auto aspect-square max-h-[250px] flex items-center justify-center">
            <p className="text-muted-foreground">Loading inventory data...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Inventory Distribution</CardTitle>
        <CardDescription>Products by Category</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="products"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalProducts.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Products
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {chartData.map((item) => (
            <div key={item.category} className="flex items-center gap-2">
              <div 
                className="h-3 w-3 rounded-sm" 
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-xs text-muted-foreground">
                {item.category} ({item.products})
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm items-start">
        <div className="flex items-center gap-2 leading-none font-medium">
          {chartData[0]?.category} is the top category <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing inventory distribution across top 5 categories
        </div>
      </CardFooter>
    </Card>
  )
}