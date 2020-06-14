import Link from 'next/link'
import Burger from './Burger'
import Search from '../components/svg/Search'


export default function Nav({ menuOpen, setMenuOpen }) {

  return (
    <nav>
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="search">
      <Search fill="white"/>
      </div>
      <style jsx>{`
        .search {
            position: absolute;
            top: 2rem;
            right: 2rem;
            width: 1.3rem;
            height: 1.3rem;
            cursor: pointer;
            padding: 0;
            z-index: 10;
            transition: filter 0.5s ease-in-out;
            filter: blur(${menuOpen ? "10px" : "0"});
            //TODO  put prevent default on click on search if open is true
        }
      `}</style>
    </nav>
  )
}
