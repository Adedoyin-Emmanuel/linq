import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linq",
  description:
    "Linq is a powerful tool that simplifies social sharing by allowing users to quickly generate shareable links for their content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={grotesk.className}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
