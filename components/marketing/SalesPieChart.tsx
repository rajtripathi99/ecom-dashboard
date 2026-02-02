"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  { campaign: "Spring Sale", revenue: 3800, fill: "var(--chart-1)" },
  { campaign: "Summer Sale", revenue: 5900, fill: "var(--chart-2)" },
  { campaign: "Email Promo", revenue: 4700, fill: "var(--chart-2)" },
  { campaign: "Halloween Deal", revenue: 3500, fill: "var(--chart-2)" },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
  },
} satisfies ChartConfig

export function SalesPieChart() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">Sales by Campaign</CardTitle>
            <CardDescription className="mt-1">Revenue last 30 days</CardDescription>
          </div>
          <Select defaultValue="30days">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-6">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <XAxis
              dataKey="campaign"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar 
              dataKey="revenue" 
              radius={[8, 8, 0, 0]} 
              maxBarSize={80}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}