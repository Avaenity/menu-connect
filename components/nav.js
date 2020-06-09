import Link from 'next/link'
import Burger from './Burger'
import Search from '../public/svg/search.svg'


export default function Nav({ open, setOpen }) {

  return (
    <nav>
      <Burger open={open} setOpen={setOpen}/>
      <div className="search">
        <Search fill="#B5B5B5"/>
      </div>
      <style jsx>{`
                .search {
                    position: absolute;
                    top: 2rem;
                    right: 2rem;
                    width: 1.6rem;
                    height: 1.5rem;
                    cursor: pointer;
                    padding: 0;
                    z-index: 10;
                }
                    
                .search:focus {
                    outline: 0;
                    outline: none;
                }
            `}</style>
    </nav>
  )
}
