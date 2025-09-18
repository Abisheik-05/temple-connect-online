import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface MapboxMapProps {
  width?: string;
  height?: string;
  className?: string;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ 
  width = "100%", 
  height = "400px", 
  className = "" 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [needsToken, setNeedsToken] = useState(true);
  const [tokenError, setTokenError] = useState<string>('');

  // Srisailam Temple coordinates
  const TEMPLE_COORDINATES: [number, number] = [78.8675, 16.0755];

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: TEMPLE_COORDINATES,
        zoom: 12,
      });

      // Add marker for temple location
      new mapboxgl.Marker({
        color: '#ff6b35' // Primary color from theme
      })
        .setLngLat(TEMPLE_COORDINATES)
        .setPopup(
          new mapboxgl.Popup().setHTML(`
            <div class="p-2">
              <h3 class="font-bold text-sm mb-1">Sri Srisaila Devasthanam</h3>
              <p class="text-xs text-gray-600">Srisailam, Kurnool District<br/>Andhra Pradesh - 518102</p>
            </div>
          `)
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setNeedsToken(false);
      setTokenError('');
    } catch (error) {
      setTokenError('Invalid Mapbox token. Please check your token and try again.');
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setNeedsToken(false);
    }
  };

  if (needsToken) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Temple Location Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              To display the temple location map, please enter your Mapbox public token.
              You can get one free at{' '}
              <a 
                href="https://mapbox.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
            
            <form onSubmit={handleTokenSubmit} className="space-y-3">
              <div>
                <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
                <Input
                  id="mapbox-token"
                  type="text"
                  placeholder="pk.eyJ1IjoiWW91clVzZXJuYW1lIiwiYSI6IlVuaXF1ZUlEIn0..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                />
              </div>
              {tokenError && (
                <p className="text-sm text-destructive">{tokenError}</p>
              )}
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90"
              >
                Load Map
              </button>
            </form>
            
            <div className="mt-4 p-3 bg-muted rounded-md">
              <p className="text-sm text-muted-foreground">
                <strong>Temple Address:</strong><br />
                Sri Srisaila Devasthanam<br />
                Srisailam, Kurnool District<br />
                Andhra Pradesh - 518102, India<br />
                <strong>Coordinates:</strong> 16.0755° N, 78.8675° E
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div 
      ref={mapContainer} 
      className={`rounded-lg shadow-lg ${className}`}
      style={{ width, height }}
    />
  );
};

export default MapboxMap;