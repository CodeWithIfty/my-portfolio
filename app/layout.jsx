import { Outfit } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";
import Cursor from "@/components/cursor/Cursor";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "CodeWithIfty | Welcome to my portfolio",
  description: "Next js portfolio by codewithifty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Cursor />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
