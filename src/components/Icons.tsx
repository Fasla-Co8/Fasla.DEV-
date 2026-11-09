import type { SVGProps } from "react";
import { cn } from "../utils/cn";

export type IconName =
  | "arrowRight"
  | "arrowUpRight"
  | "arrowLeft"
  | "check"
  | "star"
  | "plus"
  | "minus"
  | "chevronDown"
  | "menu"
  | "close"
  | "globe"
  | "mail"
  | "phone"
  | "whatsapp"
  | "pin"
  | "clock"
  | "calendar"
  | "layers"
  | "code"
  | "route"
  | "grid"
  | "briefcase"
  | "puzzle"
  | "target"
  | "users"
  | "shield"
  | "spark"
  | "copy"
  | "server"
  | "database"
  | "device"
  | "rocket"
  | "lock"
  | "sliders"
  | "layout"
  | "plug"
  | "facebook"
  | "instagram"
  | "youtube"
  | "github"
  | "linkedin"
  | "telegram"
  | "tiktok"
  | "chart"
  | "cloud"
  | "cpu"
  | "game"
  | "pen"
  | "bug"
  | "quote"
  | "info"
  | "external";

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 20, className, ...rest }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    className: cn("shrink-0", className),
    "aria-hidden": true,
    ...rest,
  };

  switch (name) {
    case "arrowRight":
      return (
        <svg {...common}>
          <path d="M4 12h15" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "arrowLeft":
      return (
        <svg {...common}>
          <path d="M20 12H5" />
          <path d="M11 6l-6 6 6 6" />
        </svg>
      );
    case "arrowUpRight":
      return (
        <svg {...common}>
          <path d="M7 17L17 7" />
          <path d="M8 7h9v9" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M4 12l5 5L20 6" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.7 1.2 6.6L12 17.7 6.1 20.8l1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "minus":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
        </svg>
      );
    case "chevronDown":
      return (
        <svg {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" />
          <path d="M3 6l9 7 9-7" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6 3h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A18 18 0 013 5a2 2 0 012-2z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 2a8 8 0 11-4.1 14.9l-.4-.2-2.6.7.7-2.5-.2-.4A8 8 0 0112 4zm-3 4c-.2 0-.5 0-.7.3-.3.3-.9.9-.9 2s.8 2.3 1 2.5c.1.2 1.6 2.6 4 3.5 1.9.8 2.3.7 2.7.6.4 0 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3l-1.6-.8c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 01-3.3-2.9c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3 0-.5l-.7-1.6c-.1-.3-.3-.3-.5-.3H9z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" />
          <rect x="9.5" y="8.5" width="5" height="5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="6" height="6" />
          <rect x="15" y="15" width="6" height="6" />
          <path d="M9 6h5a4 4 0 014 4v5" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" />
          <path d="M9 7V4h6v3M3 12h18" />
        </svg>
      );
    case "puzzle":
      return (
        <svg {...common}>
          <path d="M4 4h7v3a2 2 0 104 0V4h5v7h-3a2 2 0 100 4h3v5h-7v-3a2 2 0 10-4 0v3H4v-7h3a2 2 0 100-4H4V4z" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" />
          <rect x="8" y="8" width="8" height="8" />
          <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="8" height="8" />
          <rect x="13" y="4" width="8" height="8" />
          <path d="M3 16h8v4H3zM13 16h8v4h-8z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M8 12l3 3 5-6" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="12" height="12" />
          <path d="M16 8V4H4v12h4" />
        </svg>
      );
    case "server":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" />
          <rect x="3" y="14" width="18" height="6" />
          <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case "device":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M12 3c4 2 6 6 6 10l-3 3H9l-3-3c0-4 2-8 6-10z" />
          <rect x="10" y="9" width="4" height="4" />
          <path d="M9 16l-2 5 4-2M15 16l2 5-4-2" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="4" y="10" width="16" height="11" />
          <path d="M8 10V7a4 4 0 018 0v3M12 14v3" />
        </svg>
      );
    case "sliders":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 17h16" />
          <rect x="7" y="4" width="4" height="6" fill="#050505" />
          <rect x="14" y="14" width="4" height="6" fill="#050505" />
        </svg>
      );
    case "layout":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" />
          <path d="M3 9h18M9 9v12" />
        </svg>
      );
    case "plug":
      return (
        <svg {...common}>
          <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 01-12 0V8zM12 17v4" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" />
          <rect x="8" y="8" width="8" height="8" />
          <path d="M17 7h.01" />
        </svg>
      );
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M22 8.2a3 3 0 00-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 002 8.2 31 31 0 001.5 12 31 31 0 002 15.8a3 3 0 002.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 002.1-2.1A31 31 0 0022.5 12 31 31 0 0022 8.2zM10 15V9l5.2 3L10 15z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M22 8.2a3 3 0 00-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 002 8.2 31 31 0 001.5 12 31 31 0 002 15.8a3 3 0 002.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 002.1-2.1A31 31 0 0022.5 12 31 31 0 0022 8.2zM10 15V9l5.2 3L10 15z" />
        </svg>
      );
    case "github":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0012 2z" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M9 5H4v7h5v7H3V5h6zm11 0h-5v7h5v7h-6V5h6z" />
        </svg>
      );
    case "info":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" />
          <path d="M12 11v6M12 7h.01" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M4 4h4v16H4zM6 2a2 2 0 100 4 2 2 2 0 000-4zM10 9h4v2c.6-1.2 2-2.3 4-2.3 3 0 4 1.9 4 5.3V20h-4v-5.4c0-1.6-.5-2.6-1.9-2.6-1.2 0-2.1.8-2.1 2.6V20h-4V9z" />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M21.9 4.4l-3.1 14.6c-.2 1-.8 1.2-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.3-4.6 8.4-7.6c.4-.3-.1-.5-.6-.2L7.2 13.2 2.7 11.8c-1-.3-1-1 .2-1.4l17.6-6.8c.8-.3 1.5.2 1.4.8z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M16.6 3c.4 2.1 1.8 3.6 4 3.9v3c-1.6 0-3-.5-4-1.3v6.6c0 3.4-2.5 5.8-5.7 5.8A5.6 5.6 0 015 15.4c0-3.2 2.6-5.7 5.9-5.6v3.1c-1.5-.3-2.9.8-2.9 2.4 0 1.4 1.1 2.5 2.6 2.5 1.6 0 2.7-1.1 2.7-2.9V3h3.3z" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 4v16h16" />
          <path d="M8 16v-5M12 16V8M16 16v-8M20 16V6" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18h10a4 4 0 000-8 6 6 0 00-11.6 1.6A3.5 3.5 0 007 18z" />
          <path d="M12 12v8M9.5 17.5L12 20l2.5-2.5" />
        </svg>
      );
    case "cpu":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" />
          <rect x="10.5" y="10.5" width="3" height="3" />
          <path d="M9 7V3M15 7V3M9 21v-4M15 21v-4M7 9H3M7 15H3M21 9h-4M21 15h-4" />
        </svg>
      );
    case "game":
      return (
        <svg {...common}>
          <rect x="2" y="7" width="20" height="11" />
          <path d="M7 11v4M5 13h4" />
          <path d="M16 11h.01M18.5 14h.01" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M12 3l5 6-5 12L7 9l5-6z" />
          <path d="M7 9h10M12 21l-2-6h4l-2 6zM12 3v6" />
        </svg>
      );
    case "bug":
      return (
        <svg {...common}>
          <rect x="8" y="7" width="8" height="12" />
          <path d="M8 11H3M8 15H3M21 11h-5M21 15h-5M9 7L5 3M15 7l4-4M12 7V4" />
        </svg>
      );
    case "external":
      return (
        <svg {...common}>
          <path d="M14 4h6v6M20 4l-9 9" />
          <path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />
        </svg>
      );
    default:
      return null;
  }
}

/* ------------------------------------------------------------------
   Technology glyphs — geometric, monochrome, sharp
------------------------------------------------------------------- */
const techGlyph = (tech: string): IconName => {
  const t = tech.toLowerCase();
  if (t.includes("react native")) return "device";
  if (t.includes("react")) return "code";
  if (t.includes("node") || t.includes("server")) return "server";
  if (t.includes("express")) return "server";
  if (t.includes("mongo") || t.includes("sql") || t.includes("database") || t.includes("data")) return "database";
  if (t.includes("firebase")) return "rocket";
  if (t.includes("flutter") || t.includes("dart")) return "layers";
  if (t.includes("kotlin") || t.includes("swift") || t.includes("android") || t.includes("ios")) return "device";
  if (t.includes("git")) return "route";
  if (t.includes("api")) return "plug";
  if (t.includes("auth") || t.includes("security")) return "shield";
  if (t.includes("test")) return "check";
  if (t.includes("responsive") || t.includes("ui") || t.includes("widget")) return "layout";
  if (t.includes("state")) return "sliders";
  if (t.includes("deploy") || t.includes("publish")) return "rocket";
  if (t.includes("html") || t.includes("css") || t.includes("javascript")) return "code";
  return "code";
};

export function TechGlyph({ tech, size = 14 }: { tech: string; size?: number }) {
  return <Icon name={techGlyph(tech)} size={size} />;
}

export function Stars({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          name="star"
          size={size}
          className={index < rating ? "text-brand" : "text-line"}
        />
      ))}
    </span>
  );
}
