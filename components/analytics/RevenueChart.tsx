"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
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
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function RevenueChart() {
  const [chartData, setChartData] = React.useState<Array<{ month: string; revenue: number }>>([])
  const [loading, setLoading] = React.useState(true)
  const [percentageChange, setPercentageChange] = React.useState(0)

  React.useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/carts')
        const data = await response.json()
        const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ]

        const revenueByMonth = months.map((month, index) => {
          const cartsPerMonth = Math.ceil(data.carts.length / 12)
          const startIndex = index * cartsPerMonth
          const endIndex = Math.min(startIndex + cartsPerMonth, data.carts.length)
          const monthCarts = data.carts.slice(startIndex, endIndex)
          const monthRevenue = monthCarts.reduce((sum: number, cart: any) => {
            return sum + (cart.discountedTotal || 0)
          }, 0)
          
          return {
            month,
            revenue: Math.round(monthRevenue)
          }
        })

        setChartData(revenueByMonth)

        if (revenueByMonth.length >= 2) {
          const firstMonth = revenueByMonth[0].revenue
          const lastMonth = revenueByMonth[revenueByMonth.length - 1].revenue
          const change = ((lastMonth - firstMonth) / firstMonth) * 100
          setPercentageChange(Math.round(change * 10) / 10)
        }
      } catch (error) {
        console.error('Error fetching revenue data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRevenueData()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Revenue Chart</CardTitle>
          <CardDescription>Loading...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Loading revenue data...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="revenue"
              type="natural"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by {Math.abs(percentageChange)}% this year <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total revenue for the last 12 months
        </div>
      </CardFooter>
    </Card>
  )
}