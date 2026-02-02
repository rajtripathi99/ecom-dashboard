import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card"

export default function NotificationCard() {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Notifications</h1>

      <Card className="w-full">
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email">Email notifications</Label>
            <Switch id="email" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="marketing">Marketing updates</Label>
            <Switch id="marketing" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="inventory">Inventory alerts</Label>
            <Switch id="inventory" defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}