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
                <meta name="google-site-verification" content="z1R4nJ9K4dZ7tix-52NBpttN1fq9wulqlJjsB7XgC8c" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
