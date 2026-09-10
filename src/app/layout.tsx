import type { Metadata } from "next";

import { instrumentSerif, manrope } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormLab",
  description: "Wear what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}