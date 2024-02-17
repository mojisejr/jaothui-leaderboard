import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/ui/nav-bar";
import { inter } from "./ui/font";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Jaothui Leaderboard",
  description: "Jaothui Leaderboard v.1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Navbar />
          <div>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
