"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Tag, Sun, Mail, Ghost, ChevronRight } from "lucide-react"

type Campaign = {
  id: string
  name: string
  revenue: string
  status: string
  icon: React.ReactNode
}

const campaigns: Campaign[] = [
  {
    id: "1",
    name: "Spring Sale",
    revenue: "$3,200",
    status: "Ends in 5 days",
    icon: <Tag className="w-5 h-5" />,
  },
  {
    id: "2",
    name: "Summer Sale",
    revenue: "$5,750",
    status: "Ends in 18 days",
    icon: <Sun className="w-5 h-5" />,
  },
  {
    id: "3",
    name: "Email Promo",
    revenue: "$4,100",
    status: "Ends 7 days",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    id: "4",
    name: "Halloween Deal",
    revenue: "$2,750",
    status: "Ended Today",
    icon: <Ghost className="w-5 h-5" />,
  },
]

export default function ActiveCampaigns() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Active Campaigns</CardTitle>
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            New Campaign
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="p-2.5 bg-muted rounded-lg shrink-0">
                {campaign.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{campaign.name}</p>
                <p className="text-xs text-muted-foreground">{campaign.revenue} Revenue</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-semibold text-sm">{campaign.revenue}</p>
                <p className="text-xs text-muted-foreground">{campaign.status}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-4 text-muted-foreground hover:text-foreground">
          View all
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  )
}