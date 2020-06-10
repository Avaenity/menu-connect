import { func,bool } from 'prop-types';
import Menu from '../components/Menu';
import Nav from '../components/Nav';


export default function IndexPage({ setMenuOpen, menuOpen }) {
  
  

  return (
    <div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
