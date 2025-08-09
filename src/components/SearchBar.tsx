'use client';

import { Input } from "@/components/ui/input";
import Fuse from "fuse.js";
import { countries } from "@/lib/countries";
import { useState } from "react";

interface Country {
  name: string;
  coordinates: [number, number];
}

interface SearchBarProps {
  onSearch: (results: Country[]) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(countries, {
    keys: ["name"],
    includeScore: true,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    if (value.length > 2) {
      const results = fuse.search(value);
      onSearch(results.map((result) => result.item));
    } else {
      onSearch(countries);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <Input
        type="search"
        placeholder="Search for a country..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}
