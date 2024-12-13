import localFont from "next/font/local";
import type { Metadata } from "next";
import { Footer, Nav } from "@/components/layout";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import ProgressBar from "@/components/progressBar";
import { Suspense } from "react";

const rubikSans = localFont({
  src: "./fonts/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "GRILL HOUSE",
  description: "ЗАВЕДЕНИЕ №1 ПО МНЕНИЮ МОЕЙ МАМЫ",
  icons: {
    icon: "/favicon.ico", // путь к вашему фавикону
    apple: "/apple-touch-icon.png", // для Apple устройств (необязательно)
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${rubikSans.variable} antialiased text-black bg-white`}>
        <Provider>
          <div className="flex flex-col min-h-dvh justify-between bg-white">
            <div>
              <Nav />
              <ProgressBar />
              {children}
              <Suspense fallback={null}>{modal}</Suspense>
            </div>

            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
