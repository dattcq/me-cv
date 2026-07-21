import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV - Trương Công Quốc Đạt",
  description: "Trương Công Quốc Đạt - Flutter Developer Portfolio & CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  );
}
