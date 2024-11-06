import { Inter } from "next/font/google";
import "./globals.css";
//import my Providers function to wrapall my elemnts
import { Providers } from "@/Providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Context",
  description: "Provide me with some context",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
