import Head from 'next/head';

function MyHead() {

  const title = 'Artisans';

  
    return (
  
    
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" /> 
      <link href="https://fonts.googleapis.com/css2?family=Marck+Script&display=swap" rel="stylesheet"></link>
      <link rel="icon" type="image/svg" sizes="32x32" href="/filled3.svg" />
      <link rel="icon" type="image/svg" sizes="16x16" href="/filled3.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/filled3.svg" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/filled3.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
      
    )
  
}

export default MyHead
