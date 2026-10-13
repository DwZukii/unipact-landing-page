import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unipact.my"),
  icons: {
    icon: "/logo-mark.png",
  },
  verification: {
    google: "0Z9SslifMKD26rQDtAUHCo0Z_o4uS40ldkYddo9CT-w",
  },
};

// The site is light only: this keeps the browser bar and native form controls light too.
export const viewport: Viewport = {
  themeColor: "#F5F7FC",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
