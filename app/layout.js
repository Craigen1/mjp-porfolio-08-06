import Navbar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./provider";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "400"] });

export const metadata = {
  title: "MJP Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
