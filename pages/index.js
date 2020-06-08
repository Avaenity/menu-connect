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
        <h1 className="title">Next.js + Tailwind CSS</h1>
      </div>
    </div>
  )
}
