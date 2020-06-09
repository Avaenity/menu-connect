import Menu from '../components/Menu';
import Nav from '../components/Nav';
import React, { useState } from 'react';

export default function IndexPage() {
  
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Menu open={open} setOpen={setOpen}/>
      <Nav open={open} setOpen={setOpen}/>
      <div className="hero">
        <h1 className="title text-xl">Bienvenue sur MENU-CONNECT</h1>
      </div>
      <style jsx>{`
        .hero {
          transition: filter 0.5s ease-in-out;
          filter: blur(${open ? "10px" : "0"});
        }
      `}</style>
      <style jsx global>{`
        html {
          background: linear-gradient(#FFFFFF, #F7F7F7);
          height: 100vh;
        }
      `}</style>
    </div>
  )
}
