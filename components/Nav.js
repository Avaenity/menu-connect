import Link from 'next/link'
import Burger from './Burger'
import Search from '../components/svg/Search'
import { useRouter } from 'next/router'


export default function Nav({ menuOpen, setMenuOpen }) {

  const router = useRouter()
  
  //Toggle class to change icon color
  const pageWhiteBg = ['/[category]', '/event', '/roomservice', '/welcome']
  const hasWhiteBg = pageWhiteBg.includes(router.pathname)

  
  

  return (
    <nav>
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} isWhite={!hasWhiteBg}/>
      <div className="search">
      <Search fill={hasWhiteBg ? '#B5B5B5' : 'white'}/>
      </div>
      <style jsx>{`
        .search {
            position: absolute;
            top: 2rem;
            right: 2rem;
            width: 1.3rem;
            height: 1.3rem;
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
