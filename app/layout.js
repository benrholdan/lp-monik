import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://www.jubanaturalhair.com'),
  title: {
    default: 'Juba Natural Hair | Guia Completo para Cabelos Cacheados nos EUA',
    template: '%s | Juba Natural Hair',
  },
  description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos. Rotinas personalizadas, produtos acessíveis e protocolos para clima norte-americano.',
  keywords: ['cabelo cacheado EUA', 'cabelo crespo Estados Unidos', 'cuidar cabelo cacheado', 'produtos cabelo cacheado America', 'cronograma capilar', 'método curly girl', 'finalização cachos', 'transição capilar'],
  authors: [{ name: 'Monik Santos' }],
  creator: 'Monik Santos',
  publisher: 'Juba Natural Hair',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.jubanaturalhair.com',
    title: 'Juba Natural Hair | Guia Completo para Cabelos Cacheados nos EUA',
    description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos.',
    siteName: 'Juba Natural Hair',
    images: [
      {
        url: 'https://www.jubanaturalhair.com/images/og-image.png',
        width: 1613,
        height: 859,
        alt: 'Juba Natural Hair - Guia para Cabelos Cacheados nos EUA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juba Natural Hair | Guia Completo para Cabelos Cacheados nos EUA',
    description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos.',
    images: ['https://www.jubanaturalhair.com/images/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P64DLVBZ');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P64DLVBZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
            (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1483966329773569');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1483966329773569&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
