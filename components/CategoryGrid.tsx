import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";

export default function CategoryGrid({ limit }: { limit?: number }) {
  const visibleCategories = typeof limit === "number" ? categories.slice(0, limit) : categories;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {visibleCategories.map((category) => (
        <ProductCard category={category} key={category.slug} />
      ))}
    </div>
  );
}
