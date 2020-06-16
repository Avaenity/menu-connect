import Burger from './BurgerAndBack'
import Search from '../components/svg/Search'
import { useRouter } from 'next/router'


export default function Nav({ menuOpen, setMenuOpen }) {

  const router = useRouter()
  
  //Toggle class to change icon color
  const pageWhiteBg = ['/[category]', '/events', '/services', '/welcome']
  const hasWhiteBg = pageWhiteBg.includes(router.pathname)

  //Toggle class to change burger to back
  const pageNeedBack = ['/services/[serviceItem]', '/events/[eventItem]']
  const hasBack = pageNeedBack.includes(router.pathname)
  

  
  

  return (
    <nav>
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} isWhite={!hasWhiteBg} needBack={hasBack}/>
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
