'use client';

import { useParams } from 'next/navigation';

export default function CountryPage() {
  const { parentCategory, subCategory, country } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {decodeURIComponent(country as string)} - {decodeURIComponent(parentCategory as string)} / {decodeURIComponent(subCategory as string)}
      </h1>
      <p>Data for {decodeURIComponent(country as string)} in the {decodeURIComponent(parentCategory as string)} / {decodeURIComponent(subCategory as string)} category will be displayed here.</p>
    </div>
  );
}
