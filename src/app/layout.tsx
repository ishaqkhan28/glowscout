import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/layouts/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "@/components/layouts/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <Navbar/>
        <main>
        {children}
        <SpeedInsights />
        </main>
        <Footer/>
        </body>
    </html>
  );
}
