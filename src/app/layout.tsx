import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import { NavigationProvider } from "@/providers/navigation-provider";

import { instrumentSerif, manrope } from "./fonts";
import "./globals.css";
import { CartProvider } from "@/providers/cart-provider";

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
        <NavigationProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
