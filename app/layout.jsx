import { Montserrat } from "next/font/google";

import "./globals.css";

import LayoutShell from "@/components/LayoutShell";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Fund",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body className={montserrat.className}>
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}