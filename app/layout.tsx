import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat_init = Montserrat({ 
  subsets: ["latin"],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Style_Me",
  description: "For Fashion Designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat_init.variable}>

      </body>
    </html>
  );
}
