import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { MenuHamburguer } from "@/components/Partials/MenuHamburguer";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from 'react-hot-toast'
import "../styles/index.scss"
import { WhatsappButton } from "@/components/Partials/WhatsappButton";
import Script from "next/script";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NexxLand - Home',
  description: 'NexxLand - Sua plataforma de compra de terrenos nos EUA',
  keywords: 'terrenos, investimento, EUA, NexxLand, imóveis, imóveis nos EUA, terrenos nos EUA, investimento nos EUA, investimento imobiliário, investimento imobiliário nos EUA, investimento em terrenos',
  manifest: '/site.webmanifest',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nexxland.vercel.app/',
    siteName: 'https://nexxland.vercel.app/',
    title: 'NexxLand',
    description: 'NexxLand - Sua plataforma de compra de terrenos nos EUA',
    images: [
      {
        url: '/img/images/seo-nexxland.png',
        width: 1200,
        height: 627,
        alt: 'NexxLand - Sua plataforma de compra de terrenos nos EUA',
      },
    ],
  },
  twitter: {
    site: '@nexxland',
  },
  icons: {
    icon: [
      {
        url: '/app/favicon.ico',
        href: '/app/favicon.ico',
      },
      {
        url: '/favicon-32x32.png',
        href: '/favicon-32x32.png',
      },
      {
        url: '/android-chrome-192x192.png',
        href: '/android-chrome-192x192.png',
      },
      {
        url: '/android-chrome-512x512.png',
        href: '/android-chrome-512x512.png',
      },
    ],
  },
};

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-ET5K6TKNCS`}/>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ET5K6TKNCS');
          `,
          }} />

        <link
          rel="stylesheet"
          href={`https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css`}
        />
        <script
          async
          src={`https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js`}
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
        <MenuHamburguer />
        <Toaster
          toastOptions={{
            className: 'bg-zinc-500 text-white',
            style: {
              zIndex: 999999,
            },
          }}
        />
      </body>
    </html>
  );
}
