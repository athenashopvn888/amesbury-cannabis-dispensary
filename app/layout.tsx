import type { Metadata } from "next";
import AgeGate from "./components/AgeGate";
import "./globals.css";
import { STORE } from "./lib/store";

export const metadata: Metadata = {
  metadataBase: new URL(STORE.origin),
  title: { default: "Amesbury Cannabis Dispensary | North York", template: "%s | Amesbury Cannabis Dispensary" },
  description: "Browse the current Amesbury Cannabis Dispensary menu, start a delivery order, or get directions to 1575 Lawrence Ave W in North York.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: STORE.name, title: STORE.name, description: "Cannabis menu, delivery ordering and store information for 1575 Lawrence Ave W in North York.", images: ["/brand/amesbury-og.png"] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><AgeGate />{children}</body></html>;
}
