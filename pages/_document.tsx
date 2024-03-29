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
                
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
