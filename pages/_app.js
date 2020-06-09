import '../styles/index.css'
import Layout from '../components/Layout'
import React, { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [open, setOpen] = useState(false);

  return (
    <Layout open={open} setOpen={setOpen}>
      <Component {...pageProps} open={open} setOpen={setOpen}/>
    </Layout>
  )
}

export default MyApp
