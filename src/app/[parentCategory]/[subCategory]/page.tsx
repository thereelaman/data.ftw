'use client';

import { useParams, useRouter } from 'next/navigation';
import { SearchBar } from '@/components/SearchBar';
import MapComponent from '@/components/MapComponent';
import { useState } from 'react';
import { countries } from '@/lib/countries';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Button } from '@/components/ui/button';

interface Country {
  name: string;
  coordinates: [number, number];
}

// This is to workaround a bug in react-leaflet where the default icon is not found
if (typeof window !== 'undefined') {
    delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: string })._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
}


export default function CountrySelectionPage() {
  const { parentCategory, subCategory } = useParams();
  const router = useRouter();
  const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries);
  const [mapCenter, setMapCenter] = useState<L.LatLngExpression>([20, 0]);
  const [mapZoom, setMapZoom] = useState(2);

  const handleSearch = (results: Country[]) => {
    setFilteredCountries(results);
  };

  const handleViewCountry = (country: Country) => {
    setMapCenter(country.coordinates as L.LatLngExpression);
    setMapZoom(6);
  };

  const handleSelectCountry = (country: Country) => {
    router.push(`/${parentCategory}/${subCategory}/${country.name.toLowerCase()}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Select a Country</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <p className="mb-4">Category: {decodeURIComponent(parentCategory as string)} / {decodeURIComponent(subCategory as string)}</p>
      <div className="w-full h-[600px] rounded-md overflow-hidden">
        <MapComponent center={mapCenter} zoom={mapZoom}>
          {filteredCountries.map((country) => (
            <Marker key={country.name} position={country.coordinates as L.LatLngExpression}>
              <Popup>
                <div className="flex flex-col gap-2">
                  <p>{country.name}</p>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleViewCountry(country)}>View</Button>
                    <Button size="sm" variant="outline" onClick={() => handleSelectCountry(country)}>Select</Button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapComponent>
      </div>
    </div>
  );
}
