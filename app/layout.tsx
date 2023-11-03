import Footer from "../components/Layout/footer";
import Header from "../components/Layout/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import NextAuthProvider from "../components/Providers/nextAuthProvider";

export const metadata = {
  metadataBase: new URL("https://postgres-prisma.vercel.app"),
  title: "Resume Builder",
  description: "An AI based resume builder",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
