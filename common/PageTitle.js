import React from 'react';
import Head from 'next/head';

const PageTitle = ({ title }) => {
    return (
        <Head>
            <title>{title} - PalpiteBox</title>
            <link rel="shortcut icon" href="icon.png" />
        </Head>
    )
}

export default PageTitle;