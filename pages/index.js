import { func,bool } from 'prop-types';
import HomeBanner from '../components/HomeBanner'
import NavSlider from '../components/NavSlider'
import Card from '../components/Card'


export default function IndexPage({ setMenuOpen, menuOpen }) {
  
  

  return (
    <div className="main-content">
      <HomeBanner />
      <div className="px-8">
        <NavSlider />
        <h2 className="title text-xl font-semibold mb-4">Choisissez votre formule:</h2>
        <div className="card-container flex flex-col">
          <Card/>
          <Card/>
          <Card/>
        </div>
        
      </div>
      <style jsx>{`
        .main-content {
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
