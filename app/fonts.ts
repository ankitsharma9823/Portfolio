import localFont from "next/font/local";

// Roboto Delta — the single font family for the whole portfolio.
// Loaded from app/fonts/ (self-hosted, no external requests).
export const robotoDelta = localFont({
  src: [
    {
      path: "./fonts/RobotoDelta-Variable.woff2",
      weight: "100 1000",
      style: "normal",
    },
    {
      path: "./fonts/RobotoDelta-Italic-Variable.woff2",
      weight: "100 1000",
      style: "italic",
    },
  ],
  variable: "--font-delta",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
  adjustFontFallback: false,
});
