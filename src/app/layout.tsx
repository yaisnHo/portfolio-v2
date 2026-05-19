import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Yasin Horani — Software Engineer",
  description:
    "Portfolio van Yasin Horani. Full-stack software engineer gespecialiseerd in Java, Spring Boot, React en moderne webapplicaties.",
  keywords: [
    "Yasin Horani",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "React",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Yasin Horani" }],
  creator: "Yasin Horani",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.mr-y.net",
    siteName: "Yasin Horani Portfolio",
    title: "Yasin Horani — Software Engineer",
    description:
      "Full-stack software engineer gespecialiseerd in Java, Spring Boot, React en moderne webapplicaties.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasin Horani — Software Engineer",
    description:
      "Full-stack software engineer gespecialiseerd in Java, Spring Boot, React en moderne webapplicaties.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
