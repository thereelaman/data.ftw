'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataCategories } from "@/lib/categories";
import Link from "next/link";
import { useState } from "react";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [query, setQuery] = useState("");

  const allSubcategories = dataCategories.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      ...subcategory,
      parentCategory: category.name,
    }))
  );

  const fuse = new Fuse(allSubcategories, {
    keys: ["name", "description"],
    includeScore: true,
  });

  const results = fuse.search(query);
  const searchResults = query ? results.map((result) => result.item) : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Select a Data Category</h1>
        <div className="w-full max-w-sm">
          <Input
            type="search"
            placeholder="Search for a subcategory..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {query ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((subcategory) => (
            <Link
              key={subcategory.name}
              href={subcategory.href}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border"
            >
              <subcategory.icon className="h-5 w-5" />
              <div>
                <p className="font-semibold">{subcategory.name}</p>
                <p className="text-sm text-muted-foreground">
                  {subcategory.parentCategory}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Accordion type="multiple" className="w-full">
          {dataCategories.map((category) => (
            <AccordionItem key={category.name} value={category.name}>
              <AccordionTrigger>
                <div className="flex items-center gap-4">
                  <category.icon className="h-6 w-6" />
                  <span>{category.name}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.name}
                      href={subcategory.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <subcategory.icon className="h-5 w-5" />
                      <div>
                        <p className="font-semibold">{subcategory.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {subcategory.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
