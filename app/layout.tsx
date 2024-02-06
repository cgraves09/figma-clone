import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const WorkSans = Work_Sans({ subsets: ["latin"], variable: '--font-work-sans', weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "A Figma clone using Liveblocks and Fabric.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${WorkSans.className} bg-primary-grey-200` }>
        <Room>
        {children}

        </Room>
        </body>
    </html>
  );
}
