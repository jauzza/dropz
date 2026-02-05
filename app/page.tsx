import { ProductCard } from "@/components/product-card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-background overflow-hidden">
      <ThemeToggle />
      <ProductCard />
    </main>
  )
}
