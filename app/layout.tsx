import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import {Toaster} from "sonner"
import Footer from "@/components/Footer";
import { robotoDelta } from "./fonts";

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
      "h-full antialiased",
      robotoDelta.variable
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