import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Aesthetic Page",
  description: "Página aesthetic con escrito en cursiva y playlist de Spotify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={dancingScript.className}>{children}</body>
    </html>
  );
}

