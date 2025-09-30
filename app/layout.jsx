import { DM_Sans, Barlow } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Lambertucci Construction | Your premier partner in construction",
  description: "Your premier partner in construction, delivering excellence and integrity from foundation to finish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${barlow.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
