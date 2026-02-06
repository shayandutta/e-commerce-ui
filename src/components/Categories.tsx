"use client";
"use client";
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {

const searchParams = useSearchParams();
const pathName = usePathname();
const router = useRouter();
const selectedCategory = searchParams.get("category");

const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all")
    router.push(`${pathName}?${params.toString()}`, {scroll: false}); //this will update the URL with the new category
    //without this, the URL will not change and the component will not re-render
}
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 mb-4 text-sm rounded-lg">
      {categories.map((category) => (
        <div
          className={`flex items-center gap-2 justify-center cursor-pointer px-2 py-1 rounded-md ${
            category.slug === selectedCategory ? "bg-white" : " text-gray-500"
          }`}
          key={category.name}
          onClick={()=>handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;



//flow with useSearchParams and useRouter

// User clicks a category
// User clicks e.g. “Shoes” in Categories.
// The onClick runs: handleChange("shoes").
// handleChange does: router.push("/?category=shoes").
// Next.js updates the URL to /?category=shoes (no full page reload; it’s client-side navigation).
// Because the URL changed, Next.js re-renders components that depend on it.
// Categories runs again. It calls useSearchParams() again.
// The new URL has ?category=shoes, so searchParams.get("category") is now "shoes".
// selectedCategory becomes "shoes", so “Shoes” is shown as selected.