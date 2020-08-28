import App, {Container} from 'next/app';
import React from 'react';
import '../styles/globals.css'
import { AuthProvider } from '../context/auth';

import Router from 'next/router'


function MyApp({ Component, pageProps }) {

        const Layout = Component.Layout ? Component.Layout : React.Fragment;
        

        return (
          
          <AuthProvider>
                <Layout>
                <Component {...pageProps} />
                </Layout>
          </AuthProvider>
            
        );
    }


export default MyApp;