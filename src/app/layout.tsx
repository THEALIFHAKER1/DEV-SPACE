import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEV SPACE",
  description: "THEALIFHAKER1 Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-5`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
