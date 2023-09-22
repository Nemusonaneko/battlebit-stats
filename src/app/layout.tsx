import Providers from "@/components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Battlebit Stats",
  description: "Meow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          key="idx-url"
          rel="canonical"
          href="https://battlebit-player-stats.vercel.app/"
        />
        <meta
          key="graph-title"
          property="og:title"
          content="Battlebit Stats"
        />
        <meta key="graph-desc" property="og:description" content="Meow" />
        <meta
          key="graph-img"
          property="og:image"
          content="https://battlebit-player-stats.vercel.app/favicon.ico"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
