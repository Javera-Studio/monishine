import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Great_Vibes, Italiana } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Monishine Hamburg | Premium Beauty & Glow Studio",
    template: "%s | Monishine",
  },
  description:
    "Monishine — Premium Beauty Studio in Hamburg. Lash Extensions, Brows, Micro-Needling und persönliche Beratung in warmer, eleganter Studioatmosphäre. Jetzt Termin buchen.",
  authors: [{ name: "Monishine" }],
  metadataBase: new URL("https://monishine.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://monishine.vercel.app/",
    siteName: "Monishine Beauty Studio",
    title: "Monishine Hamburg | Premium Beauty & Glow Studio",
    description:
      "Monishine — Premium Beauty Studio in Hamburg. Lash Extensions, Brows, Micro-Needling und persönliche Beratung in warmer, eleganter Studioatmosphäre. Jetzt Termin buchen.",
    locale: "de_DE",
    images: [{ url: "/images/IMG_0578.jpeg", width: 1200, height: 630, alt: "Monishine Beauty Studio Hamburg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monishine Hamburg | Premium Beauty & Glow Studio",
    description:
      "Monishine — Premium Beauty Studio in Hamburg. Lash Extensions, Brows, Micro-Needling und persönliche Beratung. Jetzt Termin buchen.",
    images: ["/images/IMG_0578.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable} ${italiana.variable}`}
    >
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
