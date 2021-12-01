import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="mnifest" href="/manifest.json" />
        <link rel="toch-icon" href="/icon.png" />
        <meta name="pwa" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
