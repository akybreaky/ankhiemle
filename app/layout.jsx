
import {Outfit, Ovo} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeContext";

const outfit = Outfit({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const ovo = Ovo({
  subsets: ["latin"],weight:["400"]
});

export const metadata = {
  title: "An-Khiem Le's Portfolio",
  description: "My personal portoflio",
};


export default function RootLayout({ children }) {
    return (
      <html lang="en" className={`scroll-smooth`}>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.85"/>
        </head>
        <ThemeProvider>
        <body className="bg-white dark:bg-gray-900 text-black dark:text-white antialiased">
          <Header/>
          {children}
        </body>
        </ThemeProvider>
      </html>
    );
  }
  
