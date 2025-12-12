import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programação gratuitos",
  description: "Os melhores cursos de programação gratuitos com a melhor experiência de aprendizado e foco.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${nunito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
