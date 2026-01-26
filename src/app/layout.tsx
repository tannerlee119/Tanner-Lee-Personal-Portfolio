import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ConditionalNavigation } from "@/components/conditional-navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tannerlee.dev'),
  title: "Tanner Lee - Full-Stack Developer",
  description: "Computer Science student at UW-Madison with experience building scalable web applications. Currently studying abroad at Korea University, passionate about creating innovative solutions.",
  keywords: ["Tanner Lee", "Full-Stack Developer", "Software Engineer", "React", "Node.js", "TypeScript", "UW-Madison", "Korea University"],
  authors: [{ name: "Tanner Lee" }],
  creator: "Tanner Lee",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tannerlee.dev",
    siteName: "Tanner Lee Portfolio",
    title: "Tanner Lee - Full-Stack Developer",
    description: "Computer Science student at UW-Madison with experience building scalable web applications. Currently studying abroad at Korea University.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tanner Lee - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanner Lee - Full-Stack Developer",
    description: "Computer Science student at UW-Madison with experience building scalable web applications.",
    images: ["/og-image.jpg"],
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ConditionalNavigation />
        {children}
      </body>
    </html>
  );
}
