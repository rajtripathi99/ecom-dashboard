"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export function CategoryPieChart() {
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
    const fetchCategoryData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/products?limit=100')
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
          .slice(0, 4)

        const colors = [
          "var(--chart-1)",
          "var(--chart-2)",
          "var(--chart-3)",
          "var(--chart-4)",
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
        console.error('Error fetching category data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategoryData()
  }, [])

  if (loading) {
    return (
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Product Distribution</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-6">
          <div className="h-full flex items-center justify-center">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Product Distribution</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center pb-6">
        <div className="flex flex-col items-center gap-4">
          <div className="w-full flex justify-center">
            <ChartContainer
              config={chartConfig}
              className="aspect-square h-[250px]"
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
                  innerRadius={55}
                  outerRadius={80}
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
                              {totalProducts}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground text-sm"
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
          </div>

          <div className="flex flex-col gap-2 w-full">
            {chartData.map((item) => (
              <div key={item.category} className="flex items-center gap-3">
                <div 
                  className="h-3 w-3 rounded-full shrink-0" 
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-sm font-medium">
                  {item.category} ({item.products})
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}