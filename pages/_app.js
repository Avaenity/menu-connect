import '../styles/index.css'
import Layout from '../components/Layout'
import React, { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [tabActive, setTabActive] = useState("home");

  return (
    <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen} tabActive={tabActive} setTabActive={setTabActive}>
      <Component {...pageProps} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <style jsx global>{`
        html {
          background: linear-gradient(#FFFFFF, #F7F7F7);
          height: 100vh;
        }
        p, li {
          font-size: 1.125rem;
        }
      `}</style>
    </Layout>
  )
}

export default MyApp
