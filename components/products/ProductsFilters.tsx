import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ChevronDown, Search } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ProductsFilters() {
    return (
        <div className="w-full min-w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Field orientation="horizontal">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search Categories"
                            className="pl-10"
                        />
                    </div>
                </Field>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">All Categories <ChevronDown className="ml-2 h-4 w-4" /> </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>Categories</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Headphones</DropdownMenuItem>
                            <DropdownMenuItem>Smartphones</DropdownMenuItem>
                            <DropdownMenuItem>Laptops</DropdownMenuItem>
                            <DropdownMenuItem>Tablets</DropdownMenuItem>
                            <DropdownMenuItem>Smartwatches</DropdownMenuItem>
                            <DropdownMenuItem>Cameras</DropdownMenuItem>
                            <DropdownMenuItem>Gaming</DropdownMenuItem>
                            <DropdownMenuItem>Accessories</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}