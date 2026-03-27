import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "TA Futures | Next-Generation Trading Infrastructure",
  description: "Direct market access to Bursa Malaysia Derivatives and CME Globex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-brand selection:text-white flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          
          {/* Main Content Area */}
          <div className="flex-grow">
            {children}
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}