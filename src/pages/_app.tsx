import '../assets/styles/customTheme.scss';
import { Header } from '../components/header/header';
import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/layout';


export default function MyApp({ Component, pageProps } : AppProps) {



  return (
    <>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
   
   
    </>
  ) 
}

