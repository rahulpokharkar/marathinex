import type { Metadata } from "next";
import { Archivo_Black, Barlow_Condensed, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "MarathiNEX | A home for Marathi cinema",
  description:
    "A shared space for the people, ideas, and craft shaping Marathi cinema.",
};

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${barlowCondensed.variable} ${archivoBlack.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
