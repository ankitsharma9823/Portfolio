import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import {Toaster} from "sonner"
import Footer from "@/components/Footer";
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankit | Developer",
  description: "Portfolio of Ankit Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(
      "h-full antialiased font-mono", 
      geistSans.variable, 
      geistMono.variable, 
      jetbrainsMono.variable
    )}>

      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-1">
            {children}
            <Toaster position="bottom-right" theme="dark" />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}