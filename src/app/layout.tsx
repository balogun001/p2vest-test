import "aos/dist/aos.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AOSInitializer from "src/components/AOSInitializer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer",
  description: "P2vest Technology Limited - Frontend Developer Applicant Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
