import { useRouter } from 'next/router'

import Burger from '../components/BurgerAndBack'
import Search from '../components/Search'



export default function Nav({ menuOpen, setMenuOpen, searchOpen, setSearchOpen, search, setSearch }) {

  const router = useRouter()
  
  //Toggle class to change icon color
  const pagesWhiteBg = ['/[categories]', '/[categories]/[meal]', '/events', '/services', '/welcome', '/order']
  const hasWhiteBg = pagesWhiteBg.includes(router.pathname)

  //Toggle class to change burger to back
  const pagesNeedBack = ['/services/[serviceItem]', '/events/[eventItem]', '/[categories]/[meal]']
  const hasBack = pagesNeedBack.includes(router.pathname)

  //Toggle class to display search
  const pagesNeedSearch = ['/']
  const hasSearch = pagesNeedSearch.includes(router.pathname)

  
  

  return (
    <nav>
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} isWhite={!hasWhiteBg} needBack={hasBack}/>
      <div className="search">
      {
        hasSearch 
        ? <Search hasWhiteBg={hasWhiteBg} searchOpen={searchOpen} setSearchOpen={setSearchOpen} search={search} setSearch={setSearch}/>
        : ""
      }
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
