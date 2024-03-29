import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rankle",
  description: "Put these items in order",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="tom">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
