import { func,bool } from 'prop-types';


export default function IndexPage({ setMenuOpen, menuOpen }) {
  
  

  return (
    <div className="hero">
      <div className="home-banner relative h-64 bg-cover bg-cover bg-no-repeat">
        <div className="content-container absolute h-full w-full z-1 flex flex-col justify-center content-center">
          <img className="logo-banner w-24 self-center mb-2" src="/logo.png" />
          <h1 className="text-white text-3xl font-sans font-thin self-center">BIENVENUE</h1>
        </div>
      </div>
      <div className="main-content">
        <h1 className="title text-xl">Bienvenue sur MENU-CONNECT</h1>
      </div>
      <style jsx>{`
        .home-banner {
          background-image: url("/rest-photo.jpg");
        }
        .home-banner:before {
            position: absolute;
            content:"";
            height:100%;
            width:100%;
            top:0;
            left:1;
            z-index: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C */
        }
        .hero {
          transition: filter 0.5s ease-in-out;
          filter: blur(${menuOpen ? "10px" : "0"});
        }
      `}</style>
    </div>
  )
}

IndexPage.propTypes = {
  menuOpen: bool.isRequired,
  setMenuOpen: func.isRequired,
};
