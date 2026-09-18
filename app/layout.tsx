import { FloatingNav } from '@/components/FloatingNav';
import Footer from '@/components/Footer';
import BackToTop from '@/components/animation/BackToTop';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { navItems } from '@/data/navItem';
import type { Metadata } from 'next';
import {
   Arizonia,
   Caveat,
   Geist,
   Geist_Mono,
   Italianno,
   Poppins,
   The_Nautigal
} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
});

const poppins = Poppins({
   variable: '--font-poppins',
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
});

const caveat = Caveat({
   variable: '--font-caveat',
   subsets: ['latin'],
});

const italianno = Italianno({
   variable: '--font-italianno',
   subsets: ['latin'],
   weight: ['400'],
});

const arizonia = Arizonia({
   variable: '--font-arizonia',
   subsets: ['latin'],
   weight: ['400'],
});

const nautigal = The_Nautigal({
   variable: '--font-nautigal',
   subsets: ['latin'],
   weight: ['400', '700'],
});

export const metadata: Metadata = {
   title: 'Engr. Md. Forhad Reza',
   description: 'MERN Stack Developer',
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
            className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${italianno.variable} ${arizonia.variable} ${nautigal.variable} antialiased`}
         >
            <ThemeProvider>
               <div className="relative w-full overflow-hidden">
                  <BackToTop />
                  <Toaster
                     position="top-center"
                     expand={false}
                     richColors
                     closeButton
                  />
                  {/* <Hero /> */}
                  <div className="relative z-20 overflow-hidden bg-clip-text w-11/12 max-w-7xl mx-auto">
                     <FloatingNav navItems={navItems} />
                     {children}
                     <Footer />
                  </div>
               </div>
            </ThemeProvider>
         </body>
      </html>
   );
}
