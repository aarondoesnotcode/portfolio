import "./Sidequest.css";

/**
 * Stylised "slippy-map" view of greater London for the Sidequestmaxx page.
 *
 * Everything is hand-drawn in a 1000×600 SVG viewBox to roughly approximate a
 * dark-themed real map: a thick grey Thames with the Isle of Dogs meander, a
 * scattering of neighbourhood labels (3 sizes), and small pin-style markers
 * for the sidequest activities. No real geo data or map tiles.
 *
 * Bounds (for translating real lng/lat into the viewBox):
 *   x = ((lng + 0.40) / 0.50) * 1000
 *   y = ((51.58 - lat) / 0.22) * 600
 */

const ICON_TRANSFORM = "translate(-8.5, -8.5) scale(0.71)";

const ICONS = {
  mountain: <path d="m8 3 4 8 5-5 5 15H2L8 3z" />,
  utensils: (
    <>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3" />
      <path d="M21 15v7" />
    </>
  ),
  crown: (
    <>
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7Z" />
      <path d="M5 20h14" />
    </>
  ),
  book: <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />,
  coffee: (
    <>
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <path d="M6 2v2" />
      <path d="M10 2v2" />
      <path d="M14 2v2" />
    </>
  ),
  camera: (
    <>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12a9 9 0 0 1 18 0" />
      <path d="M3 12a9 9 0 0 0 18 0" />
    </>
  ),
};

// Greater London neighbourhoods scattered around the map for context.
// `size` is one of "xl" | "lg" | "md" | "sm".
const PLACES = [
  { name: "LONDON", x: 540, y: 215, size: "xl" },
  { name: "CITY OF LONDON", x: 668, y: 175, size: "lg" },
  { name: "WESTMINSTER", x: 522, y: 252, size: "lg" },
  { name: "Greenwich", x: 820, y: 285, size: "md" },
  { name: "Hampstead", x: 415, y: 60, size: "sm" },
  { name: "Camden", x: 525, y: 105, size: "sm" },
  { name: "Hackney", x: 660, y: 100, size: "sm" },
  { name: "Stratford", x: 780, y: 95, size: "sm" },
  { name: "Notting Hill", x: 335, y: 175, size: "sm" },
  { name: "Acton", x: 270, y: 195, size: "sm" },
  { name: "Ealing", x: 190, y: 180, size: "sm" },
  { name: "Hounslow", x: 80, y: 305, size: "sm" },
  { name: "Chiswick", x: 280, y: 250, size: "sm" },
  { name: "Hammersmith", x: 365, y: 245, size: "sm" },
  { name: "Barnes", x: 320, y: 295, size: "sm" },
  { name: "Wandsworth", x: 420, y: 350, size: "sm" },
  { name: "Clapham", x: 495, y: 332, size: "sm" },
  { name: "Brixton", x: 575, y: 318, size: "sm" },
  { name: "Lewisham", x: 770, y: 328, size: "sm" },
  { name: "Catford", x: 760, y: 372, size: "sm" },
  { name: "Eltham", x: 905, y: 360, size: "sm" },
  { name: "Wimbledon", x: 385, y: 432, size: "sm" },
  { name: "Tooting", x: 470, y: 415, size: "sm" },
  { name: "Teddington", x: 140, y: 420, size: "sm" },
  { name: "Sydenham", x: 690, y: 422, size: "sm" },
  { name: "Bromley", x: 822, y: 478, size: "sm" },
  { name: "Kingston upon Thames", x: 205, y: 462, size: "sm" },
  { name: "Esher", x: 75, y: 562, size: "sm" },
  { name: "Carshalton", x: 472, y: 575, size: "sm" },
  { name: "Croydon", x: 605, y: 550, size: "sm" },
];

// Hand-drawn Thames — captures the major bends: south dip at Putney/Wandsworth,
// the Westminster sweep, then the Isle of Dogs meander before continuing east.
const THAMES_PATH =
  "M 0 280 C 60 285, 110 280, 165 282 C 220 285, 270 290, 305 298 C 335 303, 358 310, 372 316 C 390 322, 408 320, 425 312 C 448 300, 470 282, 492 262 C 518 240, 548 232, 580 232 C 614 232, 645 232, 672 228 C 698 224, 718 226, 732 232 C 748 240, 758 256, 758 272 C 760 286, 774 292, 792 288 C 810 284, 824 270, 826 254 C 826 238, 818 226, 808 220 C 822 218, 855 222, 890 226 C 925 230, 965 232, 1000 234";

const MARKERS = [
  // Each marker sits at an approximate central-London spot.
  { id: "hike", x: 458, y: 38, label: "Hike", place: "Hampstead Heath", icon: ICONS.mountain, labelPos: "right" },
  { id: "brunch", x: 350, y: 200, label: "Brunch", place: "Notting Hill", icon: ICONS.utensils, labelPos: "left" },
  { id: "chess", x: 470, y: 230, label: "Chess", place: "Hyde Park", icon: ICONS.crown, labelPos: "bottom" },
  { id: "read", x: 575, y: 200, label: "Read", place: "Bloomsbury", icon: ICONS.book, labelPos: "bottom" },
  { id: "coffee", x: 668, y: 138, label: "Coffee", place: "Shoreditch", icon: ICONS.coffee, labelPos: "right" },
  { id: "photo", x: 700, y: 222, label: "Photo", place: "Tower Bridge", icon: ICONS.camera, labelPos: "right" },
  { id: "music", x: 596, y: 240, label: "Music", place: "South Bank", icon: ICONS.music, labelPos: "right" },
  { id: "pickleball", x: 800, y: 305, label: "Pickleball", place: "Greenwich", icon: ICONS.ball, labelPos: "bottom" },
];

const LABEL_OFFSETS = {
  bottom: { dx: 0, dy: 28, anchor: "middle" },
  right: { dx: 18, dy: 4, anchor: "start" },
  left: { dx: -18, dy: 4, anchor: "end" },
};

function MapMarker({ x, y, label, place, icon, labelPos = "bottom" }) {
  const offset = LABEL_OFFSETS[labelPos] ?? LABEL_OFFSETS.bottom;
  return (
    <g
      className="sq-map__marker"
      transform={`translate(${x}, ${y})`}
      tabIndex={0}
      role="group"
    >
      <title>{`${label} — ${place}`}</title>
      <circle r="22" className="sq-map__marker-halo" />
      <circle r="13" className="sq-map__marker-disc" />
      <g className="sq-map__marker-icon" transform={ICON_TRANSFORM}>
        {icon}
      </g>
      <text
        className="sq-map__marker-label"
        x={offset.dx}
        y={offset.dy}
        textAnchor={offset.anchor}
      >
        {label}
      </text>
    </g>
  );
}

function PlaceLabel({ name, x, y, size }) {
  return (
    <text
      x={x}
      y={y}
      className={`sq-map__place sq-map__place--${size}`}
      textAnchor="middle"
    >
      {name}
    </text>
  );
}

function SidequestMap() {
  return (
    <div className="sidequest-map">
      <div className="sidequest-map__heading">
        <span className="sidequest-map__title">London Sidequests</span>
        <span className="sidequest-map__caption">
          A few places worth getting lost in
        </span>
      </div>
      <svg
        viewBox="0 0 1000 600"
        className="sidequest-map__svg"
        role="img"
        aria-label={`Stylised dark map of greater London with ${MARKERS.length} sidequest markers.`}
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          className="sq-map__background"
          x="0"
          y="0"
          width="1000"
          height="600"
        />

        <path className="sq-map__thames" d={THAMES_PATH} />
        <path className="sq-map__thames-edge" d={THAMES_PATH} />

        <g className="sq-map__places" aria-hidden="true">
          {PLACES.map((p) => (
            <PlaceLabel key={p.name} {...p} />
          ))}
        </g>

        <g
          className="sq-map__compass"
          transform="translate(50, 56)"
          aria-hidden="true"
        >
          <circle r="22" />
          <path d="M0 -14 L4 0 L0 14 L-4 0 Z" />
          <text textAnchor="middle" y="-26">
            N
          </text>
        </g>

        {MARKERS.map((m) => (
          <MapMarker key={m.id} {...m} />
        ))}
      </svg>
    </div>
  );
}

export default SidequestMap;
