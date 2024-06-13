import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Alfa Calculator",
  description: "A simple app to play around with ALFA distribution and rewards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
