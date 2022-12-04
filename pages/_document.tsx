// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/rubiks.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica:ital@1&family=Nanum+Pen+Script&display=block" rel="stylesheet"></link>
                <link rel="manifest" href="/manifest/manifest.json" />
                <link rel="apple-touch-icon" href="/manifest/icon512x512.png"></link>
                <meta name="theme-color" content="#a5b4fb" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}