"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/translations";

declare global {
  interface Window {
    google?: GoogleNamespace;
    __northlineGoogleMapsPromise?: Promise<GoogleNamespace>;
  }
}

type LatLngLiteral = { lat: number; lng: number };
type GooglePlace = {
  formatted_address?: string;
  geometry?: { location?: GoogleLatLng };
  name?: string;
};
type GoogleLatLng = {
  lat: () => number;
  lng: () => number;
};
type GoogleAutocomplete = {
  addListener: (eventName: "place_changed", handler: () => void) => { remove: () => void };
  getPlace: () => GooglePlace;
};
type GoogleMap = {
  setCenter: (position: LatLngLiteral) => void;
  setZoom: (zoom: number) => void;
};
type GoogleMarker = { setMap: (map: GoogleMap | null) => void };
type GoogleDirectionsRenderer = {
  setDirections: (result: GoogleDirectionsResult | null) => void;
  setMap: (map: GoogleMap | null) => void;
};
type GoogleDirectionsResult = {
  routes?: Array<{
    legs?: Array<{
      distance?: { text?: string; value?: number };
      duration?: { text?: string; value?: number };
    }>;
  }>;
};
type GoogleDirectionsStatus = string;
type GoogleNamespace = {
  maps: {
    DirectionsRenderer: new (options: Record<string, unknown>) => GoogleDirectionsRenderer;
    DirectionsService: new () => {
      route: (
        request: Record<string, unknown>,
        callback: (result: GoogleDirectionsResult | null, status: GoogleDirectionsStatus) => void
      ) => void;
    };
    LatLng: new (lat: number, lng: number) => unknown;
    LatLngBounds: new (sw: unknown, ne: unknown) => unknown;
    Map: new (element: HTMLElement, options: Record<string, unknown>) => GoogleMap;
    Marker: new (options: Record<string, unknown>) => GoogleMarker;
    TravelMode: { DRIVING: string };
    places: {
      Autocomplete: new (input: HTMLInputElement, options: Record<string, unknown>) => GoogleAutocomplete;
    };
  };
};

const C = {
  bg: "#050914",
  border: "#1E2A42",
  borderGold: "rgba(210,164,58,0.35)",
  gold: "#D2A43A",
  cream: "#F4EFE3",
  muted: "#C9C3B8",
  mutedDark: "#A09488",
};

const ICONS = {
  calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  pin: "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  route: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
};

const GRONINGEN_CENTER: LatLngLiteral = { lat: 53.2194, lng: 6.5665 };
const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function Icon({ d, size = 18, color = C.gold, sw = 1.8 }: { d: string; size?: number; color?: string; sw?: number }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={sw} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

function loadGoogleMaps(apiKey: string): Promise<GoogleNamespace> {
  if (window.google?.maps?.places) {
    return Promise.resolve(window.google);
  }

  if (window.__northlineGoogleMapsPromise) {
    return window.__northlineGoogleMapsPromise;
  }

  window.__northlineGoogleMapsPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>("script[data-northline-google-maps='true']");
    if (existingScript) {
      existingScript.addEventListener("load", () => window.google ? resolve(window.google) : reject(new Error("Google Maps failed to initialize")));
      existingScript.addEventListener("error", () => reject(new Error("Google Maps script failed to load")));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&language=nl&region=NL`;
    script.async = true;
    script.defer = true;
    script.dataset.northlineGoogleMaps = "true";
    script.addEventListener("load", () => window.google ? resolve(window.google) : reject(new Error("Google Maps failed to initialize")));
    script.addEventListener("error", () => reject(new Error("Google Maps script failed to load")));
    document.head.appendChild(script);
  });

  return window.__northlineGoogleMapsPromise;
}

function placeLabel(place: GooglePlace) {
  return place.formatted_address || place.name || "";
}

function placeLocation(place: GooglePlace): LatLngLiteral | null {
  const location = place.geometry?.location;
  if (!location) return null;
  return { lat: location.lat(), lng: location.lng() };
}

function formatDuration(seconds: number, lang: Lang) {
  const minutes = Math.max(1, Math.round(seconds / 60));
  if (minutes < 60) return lang === "nl" ? `${minutes} min` : `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours}u ${rest}m` : `${hours}u`;
}

function MapPanel({
  apiKey,
  lang,
  pickup,
  destination,
  onRouteMeta,
}: {
  apiKey?: string;
  lang: Lang;
  pickup: LatLngLiteral | null;
  destination: LatLngLiteral | null;
  onRouteMeta: (meta: { distance: string; duration: string } | null) => void;
}) {
  const mapElementRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<GoogleMap | null>(null);
  const pickupMarkerRef = useRef<GoogleMarker | null>(null);
  const destinationMarkerRef = useRef<GoogleMarker | null>(null);
  const directionsRendererRef = useRef<GoogleDirectionsRenderer | null>(null);
  const [loadState, setLoadState] = useState<"missing-key" | "loading" | "ready" | "error">(apiKey ? "loading" : "missing-key");

  useEffect(() => {
    if (!apiKey || !mapElementRef.current) return;
    let cancelled = false;

    loadGoogleMaps(apiKey)
      .then((google) => {
        if (cancelled || !mapElementRef.current) return;

        const map = new google.maps.Map(mapElementRef.current, {
          center: GRONINGEN_CENTER,
          clickableIcons: true,
          fullscreenControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          zoom: 11,
        });

        const directionsRenderer = new google.maps.DirectionsRenderer({
          map,
          preserveViewport: false,
          suppressMarkers: true,
        });

        mapRef.current = map;
        directionsRendererRef.current = directionsRenderer;
        setLoadState("ready");
      })
      .catch(() => {
        if (!cancelled) setLoadState("error");
      });

    return () => {
      cancelled = true;
      pickupMarkerRef.current?.setMap(null);
      destinationMarkerRef.current?.setMap(null);
      directionsRendererRef.current?.setMap(null);
    };
  }, [apiKey]);

  useEffect(() => {
    if (!apiKey || loadState !== "ready" || !window.google || !mapRef.current) return;

    pickupMarkerRef.current?.setMap(null);
    destinationMarkerRef.current?.setMap(null);
    directionsRendererRef.current?.setDirections(null);
    onRouteMeta(null);

    if (pickup) {
      pickupMarkerRef.current = new window.google.maps.Marker({
        map: mapRef.current,
        position: pickup,
        title: lang === "nl" ? "Ophaallocatie" : "Pickup location",
      });
    }

    if (destination) {
      destinationMarkerRef.current = new window.google.maps.Marker({
        map: mapRef.current,
        position: destination,
        title: lang === "nl" ? "Bestemming" : "Destination",
      });
    }

    if (!pickup || !destination) {
      const focus = pickup || destination || GRONINGEN_CENTER;
      mapRef.current.setCenter(focus);
      mapRef.current.setZoom(pickup || destination ? 13 : 11);
      return;
    }

    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        destination,
        origin: pickup,
        region: "NL",
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status !== "OK" || !result) return;
        directionsRendererRef.current?.setDirections(result);

        const legs = result.routes?.[0]?.legs ?? [];
        const distanceMeters = legs.reduce((total, leg) => total + (leg.distance?.value ?? 0), 0);
        const durationSeconds = legs.reduce((total, leg) => total + (leg.duration?.value ?? 0), 0);
        onRouteMeta({
          distance: distanceMeters ? `${(distanceMeters / 1000).toFixed(1)} km` : legs[0]?.distance?.text ?? "",
          duration: durationSeconds ? formatDuration(durationSeconds, lang) : legs[0]?.duration?.text ?? "",
        });
      }
    );
  }, [apiKey, destination, lang, loadState, onRouteMeta, pickup]);

  return (
    <div className="flex h-full min-h-[320px] flex-col overflow-hidden rounded-xl border" style={{ borderColor: "rgba(210,164,58,0.24)", backgroundColor: "#0B1020" }}>
      <div className="flex items-center justify-between gap-3 border-b px-4 py-3" style={{ borderColor: "rgba(244,239,227,0.08)" }}>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: C.gold }}>
            {lang === "nl" ? "Google Maps route" : "Google Maps route"}
          </p>
          <p className="text-xs" style={{ color: C.mutedDark }}>
            {lang === "nl" ? "Autocomplete en route via Google Maps" : "Autocomplete and routing via Google Maps"}
          </p>
        </div>
        <Icon d={ICONS.route} size={20} />
      </div>

      <div className="relative min-h-[260px] flex-1 bg-white">
        {apiKey && <div ref={mapElementRef} className="absolute inset-0" aria-label="Google Maps" />}

        {loadState === "missing-key" && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#111827] p-6 text-center">
            <div className="max-w-sm">
              <p className="text-sm font-bold" style={{ color: C.cream }}>
                {lang === "nl" ? "Google Maps API key ontbreekt" : "Google Maps API key missing"}
              </p>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: C.muted }}>
                {lang === "nl"
                  ? "Voeg NEXT_PUBLIC_GOOGLE_MAPS_API_KEY toe om echte kaarttegels, Places Autocomplete en routeberekening te laden."
                  : "Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to load real map tiles, Places Autocomplete and route calculation."}
              </p>
            </div>
          </div>
        )}

        {loadState === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center bg-white text-sm font-semibold text-gray-700">
            {lang === "nl" ? "Google Maps laden..." : "Loading Google Maps..."}
          </div>
        )}

        {loadState === "error" && (
          <div className="absolute inset-0 flex items-center justify-center bg-white p-6 text-center text-sm font-semibold text-gray-700">
            {lang === "nl" ? "Google Maps kon niet worden geladen." : "Google Maps could not be loaded."}
          </div>
        )}
      </div>
    </div>
  );
}

function GoogleLocationInput({
  apiKey,
  field,
  label,
  lang,
  onPlace,
  placeholder,
}: {
  apiKey?: string;
  field: "pickup" | "destination";
  label: string;
  lang: Lang;
  onPlace: (place: GooglePlace) => void;
  placeholder: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!apiKey || !inputRef.current) return;
    let listener: { remove: () => void } | undefined;
    let cancelled = false;

    loadGoogleMaps(apiKey).then((google) => {
      if (cancelled || !inputRef.current) return;

      const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(52.95, 6.25),
        new google.maps.LatLng(53.36, 7.08)
      );

      const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
        bounds,
        componentRestrictions: { country: "nl" },
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
      });

      listener = autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        onPlace(place);
        const label = placeLabel(place);
        if (label && inputRef.current) inputRef.current.value = label;
      });
    });

    return () => {
      cancelled = true;
      listener?.remove();
    };
  }, [apiKey, onPlace]);

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: C.mutedDark }}>
        {label}
      </span>
      <span className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon d={ICONS.pin} size={16} />
        </span>
        <input
          ref={inputRef}
          name={field}
          type="text"
          required
          autoComplete="off"
          disabled={!apiKey}
          placeholder={!apiKey ? (lang === "nl" ? "Google Maps API key nodig" : "Google Maps API key required") : placeholder}
          className="w-full rounded-lg border py-3 pl-10 pr-3 text-[15px] transition-colors disabled:cursor-not-allowed disabled:opacity-70"
          style={{ backgroundColor: "rgba(244,239,227,0.06)", borderColor: "rgba(210,164,58,0.22)", color: C.cream }}
        />
      </span>
    </label>
  );
}

export default function QuickBookingSection({ lang }: { lang: Lang }) {
  const [pickupLocation, setPickupLocation] = useState<LatLngLiteral | null>(null);
  const [destinationLocation, setDestinationLocation] = useState<LatLngLiteral | null>(null);
  const [routeMeta, setRouteMeta] = useState<{ distance: string; duration: string } | null>(null);
  const handlePickupPlace = useCallback((place: GooglePlace) => {
    setPickupLocation(placeLocation(place));
  }, []);
  const handleDestinationPlace = useCallback((place: GooglePlace) => {
    setDestinationLocation(placeLocation(place));
  }, []);

  return (
    <section id="quick-booking" className="px-4 py-8 md:px-6 md:py-10" style={{ backgroundColor: "#060810", borderBottom: `1px solid ${C.border}` }}>
      <div className="mx-auto max-w-6xl">
        <div
          className="grid gap-6 rounded-xl p-4 sm:p-5 md:p-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch"
          style={{
            background: "linear-gradient(135deg, rgba(8,13,28,0.96), rgba(5,9,20,0.92))",
            border: `1px solid ${C.borderGold}`,
            boxShadow: "0 22px 70px rgba(0,0,0,0.30), inset 0 1px 0 rgba(244,239,227,0.04)",
          }}
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.gold }}>
                {lang === "nl" ? "Direct aanvragen" : "Instant request"}
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight leading-tight md:text-3xl" style={{ color: C.cream }}>
                {lang === "nl" ? "Vraag uw rit in seconden aan" : "Request your ride in seconds"}
              </h2>
              <p className="max-w-xl text-sm leading-relaxed md:text-[15px]" style={{ color: C.muted, fontWeight: 420 }}>
                {lang === "nl"
                  ? "Kies uw locaties via Google Places, bekijk de route op de kaart en stel uw Northline-demoaanvraag samen."
                  : "Choose locations with Google Places, preview the route on the map and compose your Northline demo request."}
              </p>
            </div>

            <form action="/book" method="get" className="grid gap-3 max-md:pr-[72px] md:grid-cols-2" aria-label={lang === "nl" ? "Snelle ritaanvraag" : "Quick ride request"}>
              <GoogleLocationInput
                apiKey={GOOGLE_MAPS_KEY}
                field="pickup"
                label={lang === "nl" ? "Ophaallocatie" : "Pickup location"}
                lang={lang}
                onPlace={handlePickupPlace}
                placeholder={lang === "nl" ? "Typ adres, hotel of station" : "Type address, hotel or station"}
              />

              <GoogleLocationInput
                apiKey={GOOGLE_MAPS_KEY}
                field="destination"
                label={lang === "nl" ? "Bestemming" : "Destination"}
                lang={lang}
                onPlace={handleDestinationPlace}
                placeholder={lang === "nl" ? "Waar wilt u naartoe?" : "Where would you like to go?"}
              />

              <label className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: C.mutedDark }}>
                  {lang === "nl" ? "Datum" : "Date"}
                </span>
                <span className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Icon d={ICONS.calendar} size={16} />
                  </span>
                  <input name="date" type="date" required className="w-full rounded-lg border py-3 pl-10 pr-3 text-[15px]" style={{ backgroundColor: "rgba(244,239,227,0.06)", borderColor: "rgba(210,164,58,0.22)", color: C.cream }} />
                </span>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: C.mutedDark }}>
                  {lang === "nl" ? "Tijd" : "Time"}
                </span>
                <span className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Icon d={ICONS.clock} size={16} />
                  </span>
                  <input name="time" type="time" required className="w-full rounded-lg border py-3 pl-10 pr-3 text-[15px]" style={{ backgroundColor: "rgba(244,239,227,0.06)", borderColor: "rgba(210,164,58,0.22)", color: C.cream }} />
                </span>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: C.mutedDark }}>
                  {lang === "nl" ? "Type rit" : "Ride type"}
                </span>
                <select name="rideType" className="w-full rounded-lg border px-3 py-3 text-[15px]" style={{ backgroundColor: "rgba(244,239,227,0.06)", borderColor: "rgba(210,164,58,0.22)", color: C.cream }} defaultValue="">
                  <option value="" style={{ color: C.bg }}>{lang === "nl" ? "Optioneel" : "Optional"}</option>
                  <option value="lokale-rit" style={{ color: C.bg }}>{lang === "nl" ? "Lokale rit" : "Local ride"}</option>
                  <option value="luchthaven" style={{ color: C.bg }}>{lang === "nl" ? "Luchthaven" : "Airport"}</option>
                  <option value="zakelijk" style={{ color: C.bg }}>{lang === "nl" ? "Zakelijk" : "Business"}</option>
                  <option value="anders" style={{ color: C.bg }}>{lang === "nl" ? "Anders" : "Other"}</option>
                </select>
              </label>

              <div className="flex items-end">
                <button type="submit" id="quick-booking-submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-extrabold transition-all hover:scale-[1.02] active:scale-[0.98]" style={{ backgroundColor: C.gold, color: C.bg, minHeight: 50, boxShadow: "0 12px 28px rgba(210,164,58,0.24)" }}>
                  <Icon d={ICONS.calendar} size={17} color={C.bg} sw={2.5} />
                  {lang === "nl" ? "Rit aanvragen" : "Request your ride"}
                </button>
              </div>
            </form>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border px-3 py-2" style={{ borderColor: "rgba(244,239,227,0.08)", backgroundColor: "rgba(244,239,227,0.04)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: C.mutedDark }}>{lang === "nl" ? "Afstand" : "Distance"}</p>
                <p className="text-sm font-extrabold" style={{ color: C.cream }}>{routeMeta?.distance || "--"}</p>
              </div>
              <div className="rounded-lg border px-3 py-2" style={{ borderColor: "rgba(244,239,227,0.08)", backgroundColor: "rgba(244,239,227,0.04)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: C.mutedDark }}>{lang === "nl" ? "Reistijd" : "Travel time"}</p>
                <p className="text-sm font-extrabold" style={{ color: C.cream }}>{routeMeta?.duration || "--"}</p>
              </div>
            </div>
          </div>

          <MapPanel
            apiKey={GOOGLE_MAPS_KEY}
            lang={lang}
            pickup={pickupLocation}
            destination={destinationLocation}
            onRouteMeta={setRouteMeta}
          />
        </div>
      </div>
    </section>
  );
}
