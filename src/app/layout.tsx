import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Trương Công Quốc Đạt - Flutter Mobile Developer Portfolio & CV",
    template: "%s | Trương Công Quốc Đạt",
  },
  description:
    "Trương Công Quốc Đạt - Flutter Mobile Developer với 3+ năm kinh nghiệm phát triển ứng dụng di động chuẩn Enterprise, Clean Architecture, GetX, BLoC, Riverpod và tích hợp hardware/native modules.",
  keywords: [
    "Flutter Developer",
    "Mobile Developer",
    "Trương Công Quốc Đạt",
    "Clean Architecture",
    "GetX",
    "BLoC",
    "Riverpod",
    "Dart",
    "React",
    "Next.js",
    "Portfolio",
    "CV",
  ],
  authors: [{ name: "Trương Công Quốc Đạt", url: "https://github.com/dattcq" }],
  creator: "Trương Công Quốc Đạt",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://github.com/dattcq/me-cv",
    title: "Trương Công Quốc Đạt - Flutter Mobile Developer Portfolio",
    description:
      "Enterprise Flutter Mobile Developer Specializing in Clean Architecture, Hardware Integration (eKYC, NFC), and AI-driven efficiency.",
    siteName: "Trương Công Quốc Đạt CV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trương Công Quốc Đạt - Flutter Mobile Developer",
    description:
      "Enterprise Flutter Mobile Developer Specializing in Clean Architecture & Native Hardware Integration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
