import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Landing",
  description: "made by GREKUL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
