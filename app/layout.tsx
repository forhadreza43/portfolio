import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import Hero from "@/components/Hero";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import BackToTop from "@/components/animation/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Forhad Reza",
  description: "MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <ThemeProvider>
          <main className="relative w-full overflow-hidden">
          <BackToTop />
          <Toaster position="top-center" expand={false} richColors closeButton />
            {/* <Hero /> */}
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
