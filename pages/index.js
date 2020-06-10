import { func,bool } from 'prop-types';


export default function IndexPage({ setMenuOpen, menuOpen }) {
  
  

  return (
    <div>
      <div className="hero">
        <h1 className="title text-xl">Bienvenue sur MENU-CONNECT</h1>
      </div>
      <style jsx>{`
        .hero {
          transition: filter 0.5s ease-in-out;
          filter: blur(${menuOpen ? "10px" : "0"});
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

IndexPage.propTypes = {
  menuOpen: bool.isRequired,
  setMenuOpen: func.isRequired,
};
