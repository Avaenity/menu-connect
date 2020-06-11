import { func,bool } from 'prop-types';
import HomeBanner from '../components/HomeBanner'
import NavSlider from '../components/NavSlider'


export default function IndexPage({ setMenuOpen, menuOpen }) {
  
  

  return (
    <div className="hero">
      <HomeBanner />
      <div className="main-content px-8">
        <NavSlider />
        <h1 className="title text-xl font-semibold">Choisissez votre formule:</h1>
      </div>
      <style jsx>{`
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
