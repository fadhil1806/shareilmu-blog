import { ThemeProvider } from "@/components/theme-provider";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    absolute: config.blog.metadata.title.absolute,
    default: config.blog.metadata.title.default,
    template: config.blog.metadata.title.template,
  },
  icons: {
    icon: 'https://k31kdl3eukazsfrf.public.blob.vercel-storage.com/logo-zq4jdflGMiKiNset7ppt1QnVry11Qj.jpg'
  },
  description: config.blog.metadata.description,
  openGraph: {
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    images: [
      signOgImageUrl({
        title: config.blog.name,
      }),
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="oiRLq23Iv8gz1hjSwJoFTb2RezpH1sN9TrSA7O9bsbA" />
        <meta name="google-adsense-account" content="ca-pub-2701752350401037"/>
        <link rel="icon" href="https://k31kdl3eukazsfrf.public.blob.vercel-storage.com/logo-zq4jdflGMiKiNset7ppt1QnVry11Qj.jpg" type="image/jpg" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-5xl m-auto",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
