import App, {Container} from 'next/app';

import React from 'react';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

        const Layout = Component.Layout ? Component.Layout : React.Fragment;
        

        return (
           
                <Layout>
                <Component {...pageProps} />
                </Layout>
            
        );
    }


export default MyApp;