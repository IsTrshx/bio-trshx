import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Análisis Umami
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://analytics.eu.umami.is/script.js";
    script.dataset.websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID; // Recupera el valor de la variable de entorno.
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>

      <Analytics />

      <NextSeo
        title="is TRSHX☁️  | いつか、私がヒトじゃなくなっても"
        titleTemplate="is TRSHX☁️ - ほとんど不眠"
        defaultTitle="is TRSHX☁️  | ほとんど不眠"
        description="¡Hola! Soy Trshx. 👋 Soy un apasionado desarrollador y creador de bots. 🤖 Me encanta sumergirme en animes, 🎥 jugar juegos online 🎮 y disfrutar de una buena partida de fútbol. ⚽️ Además, valoro mucho las interacciones y conocer nuevas personas. 🌍💬 También me gusta la fotografía profesional. 📸✨"
        openGraph={{
          url: "https://istrshx.uno/",
          title: "is TRSHX☁️ | いつか、私がヒトじゃなくなっても",
          description:
            "¡Hola! Soy Trshx. 👋 Soy un apasionado desarrollador y creador de bots. 🤖 Me encanta sumergirme en animes, 🎥 jugar juegos online 🎮 y disfrutar de una buena partida de fútbol. ⚽️ Además, valoro mucho las interacciones y conocer nuevas personas. 🌍💬 También me gusta la fotografía profesional. 📸✨",
          images: [
            {
              url: "https://istrshx.uno/og-image.png",
              alt: "Is TRSHX☁️  | いつか、私がヒトじゃなくなっても",
            },
          ],
        }}
        twitter={{
          handle: "@istrshx",
          site: "@istrshx",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Desarrollador, Creador de Bots, Entusiasta del Anime, Gamer, Futbolista, Interacción Social, Fotografía Profesional, Desarrollador Web, Desarrollador de Bots para Discord, Telegram y Whatsapp",
          },
        ]}
      />

      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
