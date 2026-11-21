import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppFloat } from "./components";

export const metadata: Metadata = {
  metadataBase: new URL("https://travokeys.co.za"),
  title: "Auto Locksmith Benoni | Car Key Cutting & Coding | Travokeys",
  description: "Travokeys Auto Locksmith in Crystal Park, Benoni. Car key cutting and coding, ECU cloning, remote repairs and vehicle diagnostics. Open 24 hours. Call 073 702 4949.",
  keywords: ["auto locksmith Benoni", "car key cutting Benoni", "car key coding Benoni", "ECU cloning Benoni", "car remote repair Benoni", "Travokeys"],
  openGraph: { title: "Travokeys | Your car key, sorted.", description: "Mobile automotive locksmith services, wherever you are.", url: "https://travokeys.co.za", siteName: "Travokeys", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-ZA"><body>{children}<WhatsAppFloat/></body></html>;
}
