import CategoryCard from "./CategoryCard"
import { Laptop, Armchair, ShoppingBasket, Sparkles } from "lucide-react"

export default function CategoriesCard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <CategoryCard
        title="ELECTRONICS"
        productCount={25}
        revenue="$20,000"
        icon={Laptop}
      />

      <CategoryCard
        title="FURNITURE"
        productCount={20}
        revenue="$15,000"
        icon={Armchair}
      />

      <CategoryCard
        title="GROCERIES"
        productCount={25}
        revenue="$10,000"
        icon={ShoppingBasket}
      />

      <CategoryCard
        title="FRAGRANCES"
        productCount={12}
        revenue="$7,500"
        icon={Sparkles}
      />
    </div>
  )
}