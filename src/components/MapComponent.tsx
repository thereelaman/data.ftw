"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default icon issue with webpack
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: string })._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
}

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

interface MapComponentProps {
  center: LatLngExpression;
  zoom: number;
  children?: React.ReactNode;
}

const MapComponent: React.FC<MapComponentProps> = ({ center, zoom, children }) => {
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {children}
    </MapContainer>
  );
};

export default MapComponent;
