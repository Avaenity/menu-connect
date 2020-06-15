import Burger from './Burger'
import Search from '../components/svg/Search'
import { useRouter } from 'next/router'


export default function Nav({ menuOpen, setMenuOpen }) {

  const router = useRouter()
  
  //Toggle class to change icon color
  const pageWhiteBg = ['/[category]', '/event', '/services', '/welcome',]
  const hasWhiteBg = pageWhiteBg.includes(router.pathname)

  
  

  return (
    <nav>
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} isWhite={!hasWhiteBg}/>
      <div className="search">
      <Search fill={hasWhiteBg ? '#718096' : 'white'}/>
      </div>
      <style jsx>{`
        .search {
            position: absolute;
            top: 2rem;
            right: 2rem;
            width: 3rem;
            padding: 0.7rem;
            z-index: 10;
            transition: filter 0.5s ease-in-out;
            filter: blur(${menuOpen ? "10px" : "0"});
            //TODO  put prevent default on click on search if open is true
        }
      `}</style>
    </nav>
  )
}
