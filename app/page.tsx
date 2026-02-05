import { ProductCard } from "@/components/product-card"
import { LiquidGlassHeader } from "@/components/liquid-glass-header"
import { SearchFilterBar } from "@/components/search-filter-bar"

const models = [
  {
    name: "Yardenlasry",
    size: "6 GB",
    downloads: 1094,
    files: 108,
    timeAgo: "38 minutes ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "Xinia_official",
    size: "1 GB",
    downloads: 412,
    files: 41,
    timeAgo: "1 hour ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "Mythiccal",
    size: "25 GB",
    downloads: 320,
    files: 136,
    timeAgo: "1 hour ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "TitaSahara",
    size: "32 GB",
    downloads: 137,
    files: 321,
    timeAgo: "1 hour ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "SophiaRose",
    size: "8 GB",
    downloads: 892,
    files: 74,
    timeAgo: "2 hours ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "EmmaStone",
    size: "12 GB",
    downloads: 654,
    files: 98,
    timeAgo: "3 hours ago",
    imageSrc: "/images/goy.png",
    isVerified: false,
  },
  {
    name: "LunaBlaze",
    size: "4 GB",
    downloads: 1245,
    files: 52,
    timeAgo: "4 hours ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
  {
    name: "AvaWilliams",
    size: "18 GB",
    downloads: 423,
    files: 167,
    timeAgo: "5 hours ago",
    imageSrc: "/images/goy.png",
    isVerified: true,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <LiquidGlassHeader />
      
      <div className="pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <SearchFilterBar />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 pb-8">
          {models.map((model, index) => (
            <ProductCard
              key={index}
              name={model.name}
              size={model.size}
              downloads={model.downloads}
              files={model.files}
              timeAgo={model.timeAgo}
              imageSrc={model.imageSrc}
              isVerified={model.isVerified}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
