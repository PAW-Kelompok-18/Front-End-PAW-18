import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Navbar = dynamic(() => import("@/components/global/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/global/Footer"), {
  ssr: false,
});

export const metadata = {
  title: "PAW",
  description: "Tugas PAW kelompok 18",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full fixed z-50">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
