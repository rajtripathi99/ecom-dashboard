import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function ProfileCard() {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Profile</h1>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-start gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <form className="flex-1 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="fName">Full Name</Label>
                <Input
                  id="fName"
                  type="text"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>

              <div className="pt-2">
                <Button size="sm">Save Changes</Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}