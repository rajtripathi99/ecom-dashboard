"use client"

import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft, ChevronRight, Laptop, Armchair, ShoppingBasket, Sparkles, Shirt } from "lucide-react"

type CategoryCount = {
  name: string
  count: number
  icon: React.ReactNode
}

function SkeletonTableRows() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-9 rounded-lg" />
              <Skeleton className="h-4 w-32" />
            </div>
          </TableCell>
          <TableCell className="text-right">
            <Skeleton className="h-4 w-8 ml-auto" />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

export default function CategoryTable() {
  const [categories, setCategories] = useState<CategoryCount[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const itemsPerPage = 5

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://dummyjson.com/products?limit=100")
        const data = await response.json()
        const categoryMap = new Map<string, number>()
        data.products.forEach((product: any) => {
          const category = product.category
          categoryMap.set(category, (categoryMap.get(category) || 0) + 1)
        })

        const categoriesArray: CategoryCount[] = Array.from(categoryMap.entries()).map(([name, count]) => ({
          name: name.charAt(0).toUpperCase() + name.slice(1),
          count,
          icon: getCategoryIcon(name)
        }))

        setCategories(categoriesArray)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const getCategoryIcon = (category: string) => {
    const iconClass = "w-5 h-5"
    switch (category.toLowerCase()) {
      case "smartphones":
      case "laptops":
        return <Laptop className={iconClass} />
      case "furniture":
      case "home-decoration":
        return <Armchair className={iconClass} />
      case "groceries":
        return <ShoppingBasket className={iconClass} />
      case "fragrances":
      case "skincare":
        return <Sparkles className={iconClass} />
      default:
        return <Shirt className={iconClass} />
    }
  }

  const totalPages = Math.ceil(categories.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCategories = categories.slice(startIndex, endIndex)

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="rounded-lg border bg-card h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
        <div className="flex-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Products</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <SkeletonTableRows />
              ) : (
                currentCategories.map((category) => (
                  <TableRow key={category.name}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-muted rounded-lg">
                          {category.icon}
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {category.count}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 px-6 py-4 border-t mt-auto">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevious}
          disabled={currentPage === 1 || isLoading}
          className="gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleNext}
          disabled={currentPage === totalPages || isLoading}
          className="gap-1"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}