import type { Metadata } from "next";
import { Inter, Montserrat, Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const bai = Bai_Jamjuree({
  subsets: ["latin"],
  variable: "--font-bai",
  weight: ["700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GBM",
  description: "GBM web design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} overflow-x-hidden min-h-screen bg-gradient-to-br from-gray-950 to-blue-950`}
    >
      <body className={` antialised`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
