"use client";

import { useRef } from "react";
import SearchBar from "@/components/donation-guide/SearchBar";
import CategoryCard from "@/components/donation-guide/CategoryCard";
import foodsDataRaw from "@/components/donation-guide/data/foods.json";
import { FoodsData } from "@/components/donation-guide/types/foods";

const foodsData = foodsDataRaw as FoodsData;

export default function FoodDonationGuidePage() {
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleResultClick = (_categoryId: string) => {};

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-white pt-16 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-[2.5rem] font-bold text-green-800 text-center">
              Pantry Donation Guide
            </h1>
            <div className="max-w-2xl w-full mt-6 mb-1">
              <SearchBar foodsData={foodsData} onResultClick={handleResultClick} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto transition-all duration-200 ease-out">
          {foodsData.categories.map((category) => (
            <div
              key={category.id}
              ref={(el) => {
                categoryRefs.current[category.id] = el;
              }}
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
