import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { AlchemyProvider } from "@/context/alchemy-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ingredient Alchemy Recipes",
  description:
    "Discover personalized recipe suggestions tailored to your available ingredients and culinary preferences on our interactive recipe blog. With our innovative OpenAI-powered technology, find creative and delicious dishes perfect for any vibe or craving. Explore a vast database of recipes, from comforting classics to adventurous new flavors, and unleash your inner chef today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-yellow-50`}>
        <NavBar />
        <main className="relative flex flex-col items-center p-5">
          <AlchemyProvider>{children}</AlchemyProvider>
        </main>
      </body>
    </html>
  );
}
