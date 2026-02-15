import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ============================================== */}
        {/* GOOGLE ANALYTICS - G-9RGE4DMXY9               */}
        {/* ============================================== */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9RGE4DMXY9"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9RGE4DMXY9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* ============================================== */}
        {/* GOOGLE SEARCH CONSOLE                         */}
        {/* Replace YOUR-VERIFICATION-CODE-HERE           */}
        {/* with your real verification code              */}
        {/* ============================================== */}
        <meta name="google-site-verification" content="YOUR-VERIFICATION-CODE-HERE" />

        {/* SEO Meta Tags */}
        <meta name="description" content="Curated travel essentials for business professionals. Premium luggage, tech gear, and accessories for productive business travel." />
        <meta name="keywords" content="business travel, travel essentials, business luggage, travel tech, professional travel gear" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
