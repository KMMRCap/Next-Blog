import Head from 'next/head';
import React from 'react';
import Header from './Header';

const MainLayout = (props) => {
    return (
        <>
            <Head>
                <title>Hokusai tribute</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="This is a test blog app" />
                <meta name="keywords" content="Hokusai, art, paint" />
                <meta name="author" content="KMMRCap" />
            </Head>
            <Header />
            <div className="container">
                {props.children}
            </div>
        </>
    );
}

export default MainLayout;