import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="shortcut icon"
                    href="favicon.ico"
                    type="image/x-icon"
                />
                <meta name="google-site-verification" content="swvz3Ex44maNkGpcWTj1CC9tgd-Pm99o0nng26IYxpk" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
