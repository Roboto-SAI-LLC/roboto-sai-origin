import { useEffect, useId, useRef, useState } from "react";
import { CLOCK_VIEWS, GEO_PLACES, TWO_CLOCK_KM, type GeoClock, type GeoPlace } from "@/lib/geo-places";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ViewId = GeoClock | "both";

export function ClockMap({ compact = false }: { compact?: boolean }) {
  const uid = useId().replace(/:/g, "");
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const markersRef = useRef<Map<string, import("leaflet").Marker>>(new Map());
  const lineRef = useRef<import("leaflet").Polyline | null>(null);
  const [view, setView] = useState<ViewId>("both");
  const [activeId, setActiveId] = useState("vilareal");
  const [ready, setReady] = useState(false);
  const { lang } = useLang();
  const active = GEO_PLACES.find((place) => place.id === activeId) ?? GEO_PLACES[0];

  useEffect(() => {
    let cancelled = false;
    let map: import("leaflet").Map | undefined;

    async function mount() {
      const leaflet = await import("leaflet");
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !mapEl.current) return;
      const L = leaflet.default;

      map = L.map(mapEl.current, {
        zoomControl: true,
        attributionControl: true,
        scrollWheelZoom: !compact,
      });
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap &copy; CARTO",
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      const pins = new Map<string, import("leaflet").Marker>();
      for (const place of GEO_PLACES) {
        const marker = L.marker([place.lat, place.lng], {
          icon: pinIcon(L, place.clock, place.id === activeId),
          title: place.name,
          keyboard: true,
        }).addTo(map);
        marker.on("click", () => setActiveId(place.id));
        pins.set(place.id, marker);
      }
      markersRef.current = pins;

      const villa = GEO_PLACES.find((p) => p.id === "vilareal")!;
      const ejido = GEO_PLACES.find((p) => p.id === "villarreales")!;
      lineRef.current = L.polyline(
        [
          [villa.lat, villa.lng],
          [ejido.lat, ejido.lng],
        ],
        {
          color: "#b45309",
          weight: 1.5,
          dashArray: "6 8",
          opacity: 0.85,
        },
      );

      mapRef.current = map;
      flyToView(map, L, view);
      setReady(true);
      requestAnimationFrame(() => map?.invalidateSize());
    }

    void mount();
    return () => {
      cancelled = true;
      map?.remove();
      mapRef.current = null;
      markersRef.current = new Map();
      lineRef.current = null;
    };
    // Mount once. View/active updates run in the next effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    void import("leaflet").then((leaflet) => {
      const L = leaflet.default;
      flyToView(map, L, view);
      if (view === "both") {
        lineRef.current?.addTo(map);
      } else {
        lineRef.current?.remove();
      }
    });
  }, [view, ready]);

  useEffect(() => {
    void import("leaflet").then((leaflet) => {
      const L = leaflet.default;
      for (const place of GEO_PLACES) {
        const marker = markersRef.current.get(place.id);
        if (!marker) continue;
        marker.setIcon(pinIcon(L, place.clock, place.id === activeId));
      }
    });
  }, [activeId, ready]);

  const labels = {
    en: {
      kicker: "Surveyed map · two clocks",
      both: "Two clocks",
      plana: "Plana 1274",
      nl: "Nuevo León, later",
      km: `${TWO_CLOCK_KM.toLocaleString("en-US")} km between Vila-real and Los Villarreales. Same name-shape. Not the same town.`,
      tiles: "Carto light tiles on OpenStreetMap. Pins are gazetteer points, not a family path.",
    },
    es: {
      kicker: "Mapa levantado · dos relojes",
      both: "Dos relojes",
      plana: "Plana 1274",
      nl: "Nuevo León, después",
      km: `${TWO_CLOCK_KM.toLocaleString("es-MX")} km entre Vila-real y Los Villarreales. Misma forma de nombre. No el mismo pueblo.`,
      tiles: "Teselas Carto sobre OpenStreetMap. Los pines son puntos de gazetero, no un camino de familia.",
    },
  }[lang];

  const views: { id: ViewId; label: string }[] = [
    { id: "1274", label: labels.plana },
    { id: "later", label: labels.nl },
    { id: "both", label: labels.both },
  ];

  function selectPlace(place: GeoPlace) {
    setActiveId(place.id);
    setView(place.clock);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={labels.kicker}>
        {views.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={view === item.id}
            onClick={() => {
              setView(item.id);
              if (item.id !== "both") {
                const first = GEO_PLACES.find((place) => place.clock === item.id);
                if (first) setActiveId(first.id);
              }
            }}
            className={cn(
              "min-h-11 rounded-md px-3.5 text-sm font-medium transition-colors duration-150",
              view === item.id ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={cn("grid gap-4", compact ? "" : "lg:grid-cols-[1fr_18rem]")}>
        <figure className="overflow-hidden rounded-xl bg-surface shadow-paper">
          <div
            ref={mapEl}
            id={`clock-map-${uid}`}
            className={cn("clock-map w-full", compact && "clock-map-compact")}
            role="img"
            aria-label={labels.kicker}
          />
          <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted">
            {labels.km} {labels.tiles}
          </figcaption>
        </figure>

        {compact ? null : (
          <aside className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
              {active.clock === "1274" ? labels.plana : labels.nl}
            </p>
            <h3 className="mt-2 font-display text-xl font-medium text-fg">{active.name}</h3>
            <p className="mt-1 text-sm text-muted">{active.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-fg">{active.dossier}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {GEO_PLACES.map((place) => (
                <li key={place.id}>
                  <button
                    type="button"
                    onClick={() => selectPlace(place)}
                    className={cn(
                      "min-h-11 rounded-md px-2.5 text-xs font-medium transition-colors duration-150",
                      place.id === active.id ? "bg-primary text-primary-fg" : "bg-wash text-fg hover:bg-border",
                    )}
                  >
                    {place.short}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}

function pinIcon(L: typeof import("leaflet"), clock: GeoClock, hot: boolean) {
  return L.divIcon({
    className: "clock-divicon",
    html: `<span class="clock-pin clock-pin-${clock}${hot ? " clock-pin-hot" : ""}"></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

function flyToView(
  map: import("leaflet").Map,
  L: typeof import("leaflet"),
  view: ViewId,
) {
  if (view === "both") {
    const villa = GEO_PLACES.find((p) => p.id === "vilareal")!;
    const ejido = GEO_PLACES.find((p) => p.id === "villarreales")!;
    map.fitBounds(
      L.latLngBounds(
        [villa.lat, villa.lng],
        [ejido.lat, ejido.lng],
      ).pad(0.35),
    );
    return;
  }
  const spec = CLOCK_VIEWS[view];
  map.setView(spec.center, spec.zoom);
}
