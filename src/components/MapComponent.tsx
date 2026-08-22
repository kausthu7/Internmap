import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';
import { Startup } from '../types';
import {
  Layers,
  Compass,
  Briefcase,
  ExternalLink
} from 'lucide-react';

import { getLogoFilename } from '../logoHelper';
import { useLanguage } from '../context/LanguageContext';

interface MapComponentProps {
  startups: Startup[];
  selectedStartup: Startup | null;
  onSelectStartup: (startup: Startup) => void;
  onBookmarkStartup?: (startupId: string) => void;
  bookmarkedIds?: string[];
  activeTile: TileProvider;
  resetCenterTrigger: number;
}

type TileProvider = 'positron' | 'dark_matter' | 'voyager';

export const MapComponent: React.FC<MapComponentProps> = ({
  startups,
  selectedStartup,
  onSelectStartup,
  onBookmarkStartup,
  bookmarkedIds = [],
  activeTile,
  resetCenterTrigger,
}) => {
  const { t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerClusterGroupRef = useRef<L.MarkerClusterGroup | null>(null);
  const markersMapRef = useRef<Map<string, L.Marker>>(new Map());

  const tileLayerRef = useRef<L.TileLayer | null>(null);

  // Paris Center
  const PARIS_COORDS: [number, number] = [48.8584, 2.3475];

  const TILE_CONFIGS: Record<TileProvider, { url: string; attribution: string; name: string }> = {
    positron: {
      name: 'Modern Light',
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; CARTO &copy; OpenStreetMap',
    },
    dark_matter: {
      name: 'Modern Dark Mode',
      url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; CARTO &copy; OpenStreetMap',
    },
    voyager: {
      name: 'Detailed Voyager (Default)',
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      attribution: '&copy; CARTO &copy; OpenStreetMap',
    },
  };

  // 1. Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: PARIS_COORDS,
        zoom: 13,
        minZoom: 11,
        maxZoom: 18,
        zoomControl: false,
      });

      // Zoom control in bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Initial Tile Layer
      const initialConfig = TILE_CONFIGS[activeTile];
      const initialLayer = L.tileLayer(initialConfig.url, {
        attribution: initialConfig.attribution,
        maxZoom: 19,
      }).addTo(map);
      tileLayerRef.current = initialLayer;

      // Marker Cluster Group - Geometric Balance
      const clusterGroup = L.markerClusterGroup({
        showCoverageOnHover: false,
        maxClusterRadius: 40,
        spiderfyOnMaxZoom: true,
        iconCreateFunction: (cluster) => {
          const count = cluster.getChildCount();
          return L.divIcon({
            html: `<div class="custom-cluster-icon" style="width: 40px; height: 40px;"><span>${count}</span></div>`,
            className: 'custom-cluster-marker',
            iconSize: L.point(40, 40),
          });
        },
      });

      map.addLayer(clusterGroup);
      markerClusterGroupRef.current = clusterGroup;
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // 2. Handle Tile Layer Change
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    if (tileLayerRef.current) {
      mapInstanceRef.current.removeLayer(tileLayerRef.current);
    }
    const config = TILE_CONFIGS[activeTile];
    const newLayer = L.tileLayer(config.url, {
      attribution: config.attribution,
      maxZoom: 19,
    }).addTo(mapInstanceRef.current);
    tileLayerRef.current = newLayer;
  }, [activeTile]);

  // 3. Update Markers when startups list changes
  useEffect(() => {
    if (!mapInstanceRef.current || !markerClusterGroupRef.current) return;

    const clusterGroup = markerClusterGroupRef.current;
    clusterGroup.clearLayers();
    
    // Clean up any unclustered markers added directly to the map (for boosted pins)
    markersMapRef.current.forEach((marker) => {
      if (mapInstanceRef.current && mapInstanceRef.current.hasLayer(marker)) {
        mapInstanceRef.current.removeLayer(marker);
      }
    });
    markersMapRef.current.clear();

    startups.forEach((startup) => {
      const isUnicorn = startup.type === 'Unicorn';
      const isHiring = startup.hiringNow;
      const initialLetter = startup.name.slice(0, 2).toUpperCase();
      const color = startup.brandColor || (isUnicorn ? '#8b5cf6' : '#2E6F40');
      const logoUrl = getLogoFilename(startup);

      const fallbackHtml = `<span style=&quot;color: ${color}; font-size: 11px; font-weight: 800;&quot;>${initialLetter}</span>`;
      const fallbackHtmlDirect = `<span style="color: ${color}; font-size: 11px; font-weight: 800;">${initialLetter}</span>`;
      const imgHtml = logoUrl 
        ? `<img src="${logoUrl}" alt="${startup.name.replace(/"/g, '&quot;')}" class="w-full h-full object-contain p-1 bg-white" onerror="this.onerror=null; this.outerHTML='${fallbackHtml}'" />` 
        : fallbackHtmlDirect;

      // Custom HTML Marker Icon
      const customIcon = L.divIcon({
        className: 'custom-startup-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -22],
        html: `
          <div class="marker-pin-container ${startup.isBoosted ? 'boosted' : ''}" data-startup-id="${startup.id}">
            <div class="marker-bubble ${isUnicorn ? 'unicorn' : ''} ${isHiring ? 'hiring' : ''} ${startup.isBoosted ? 'boosted' : ''}" style="border-color: ${color}; overflow: hidden;">
              ${imgHtml}
            </div>
          </div>
        `,
      });

      const marker = L.marker(startup.coordinates, { icon: customIcon });

      // Build Geometric Popup HTML
      const popupContent = `
        <div class="p-5 text-slate-900 font-sans select-none min-w-[320px]">
          <div class="flex gap-4">
            <!-- Left: Logo -->
            <div class="w-16 h-16 bg-white/50 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/50 overflow-hidden shrink-0 shadow-sm">
              ${imgHtml}
            </div>
            
            <!-- Right: Info -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <h2 class="font-bold text-lg leading-tight text-slate-900 truncate">${startup.name}</h2>
                ${
                  isHiring
                    ? `<span class="bg-emerald-50 text-emerald-600 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1"><div class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>${t('popup.hiring')}</span>`
                    : ''
                }
              </div>
              <p class="text-slate-500 text-[11px] mb-2 truncate">
                ${startup.type} · ${startup.stage} · ${startup.headcount} ${t('popup.employees')}
              </p>
              <div class="flex items-center gap-1 text-slate-400 text-[11px] mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span class="truncate">${startup.area}</span>
              </div>
              
              <!-- Tags -->
              <div class="flex gap-1.5 flex-wrap">
                ${startup.tags.slice(0, 3).map(tag => `<span class="bg-emerald-50 text-emerald-600 text-[9px] px-2 py-0.5 rounded-full font-semibold border border-emerald-100">${tag}</span>`).join('')}
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex gap-2 mt-4">
            <button
              id="popup-details-btn-${startup.id}"
              class="flex-1 py-2 bg-indigo-600/90 backdrop-blur-sm text-white rounded-lg text-center text-xs font-bold hover:bg-indigo-700 transition-colors cursor-pointer shadow-sm"
            >
              ${t('popup.viewProfile')}
            </button>
            <a
              href="${startup.careersUrl || startup.websiteUrl}"
              target="_blank"
              rel="noreferrer noopener"
              class="flex-1 py-2 bg-white/50 backdrop-blur-sm border border-white/50 text-indigo-700 rounded-lg text-center text-xs font-bold hover:bg-white/80 transition-colors"
            >
              ${t('popup.viewJobs')} ${startup.activeJobsCount ? `(${startup.activeJobsCount})` : ''}
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, { maxWidth: 360, minWidth: 320 });

      // Popup button click listener
      marker.on('popupopen', () => {
        const btn = document.getElementById(`popup-details-btn-${startup.id}`);
        if (btn) {
          btn.onclick = () => {
            onSelectStartup(startup);
          };
        }
      });

      if (startup.isBoosted && mapInstanceRef.current) {
        marker.addTo(mapInstanceRef.current);
      } else {
        clusterGroup.addLayer(marker);
      }
      markersMapRef.current.set(startup.id, marker);
    });

    // Fit bounds smoothly if startups exist
    if (startups.length > 0 && mapInstanceRef.current) {
      const latLngs = startups.map((s) => s.coordinates);
      const bounds = L.latLngBounds(latLngs);
      if (bounds.isValid()) {
        mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
      }
    }
  }, [startups]);

  // 4. Center map when a specific startup is selected externally
  useEffect(() => {
    if (!selectedStartup || !mapInstanceRef.current) return;

    mapInstanceRef.current.flyTo(selectedStartup.coordinates, 15, {
      duration: 1.2,
      easeLinearity: 0.25,
    });

    const marker = markersMapRef.current.get(selectedStartup.id);
    if (marker && markerClusterGroupRef.current) {
      markerClusterGroupRef.current.zoomToShowLayer(marker, () => {
        marker.openPopup();
      });
    }
  }, [selectedStartup]);

  // Reset center when resetCenterTrigger updates
  useEffect(() => {
    if (resetCenterTrigger > 0 && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(PARIS_COORDS, 13, { duration: 1.0 });
    }
  }, [resetCenterTrigger]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#e3e8ed]">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 opacity-40 bg-grid-dots pointer-events-none z-0"></div>

      {/* Map Leaflet Container */}
      <div id="paris-leaflet-map" ref={mapContainerRef} className="absolute inset-0 z-10" />
    </div>
  );
};
