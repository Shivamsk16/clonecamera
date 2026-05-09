import { Inter } from "next/font/google";

/**
 * Development substitute for Real Head OFFC (Fontwerk — commercial).
 *
 * `fallback` keeps the page legible if the Google Fonts fetch is slow or
 * blocked, and `adjustFontFallback: false` prevents Next.js from emitting an
 * extra metric-matching synthetic face that can also fail to fetch.
 */
export const siteFont = Inter({
  subsets: ["latin"],
  variable: "--real-head-offc",
  display: "swap",
  weight: ["400", "500", "600"],
  fallback: ["system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  adjustFontFallback: false,
});
