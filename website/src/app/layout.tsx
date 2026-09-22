import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AdPopup } from "@/components/AdPopup";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TEZXX Construction Chemicals & Paints",
  description: "Advanced & Innovative Technology Based Paints, Adhesives, Grouts & Construction Chemicals",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-brand-900 text-slate-50">
        {children}
        <AdPopup />
        <Toaster position="bottom-center" theme="dark" richColors />
      </body>
    </html>
  );
}
