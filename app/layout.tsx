import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanuj Dhull | AI, Data & Software",
  description: "Explore the projects, academic journey and hands-on AI learning of Tanuj Dhull, BS Data Science student at IIT Madras.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
