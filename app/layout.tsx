import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MeasurementProvider } from "./measure/_components/MeasurementsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Measure",
  description: "For Fashion Designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MeasurementProvider>
          {children}
        </MeasurementProvider>
      </body>
    </html>
  );
}
