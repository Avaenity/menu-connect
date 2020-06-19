
import SearchIcon from '../components/svg/SearchIcon'

export default function Search ({ hasWhiteBg, searchOpen, setSearchOpen, search, setSearch }) {
    return (
        <div className="relative">
            {
                searchOpen
                    ? <div>
                        <input className={`search-input w-48 absolute border-b border-solid border-white`} value={search} onChange={e => setSearch(e.target.value)} autoFocus></input>
                        <div className="close" onClick={() => {
                            setSearchOpen(!searchOpen)
                            setSearch('') //reset search
                            }}></div>
                    </div>

                    : <SearchIcon fill={hasWhiteBg ? '#718096' : 'white'} onClick={() => setSearchOpen(!searchOpen)}/>
            }
            <style jsx>{`
                .close {
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 30px;
                    height: 30px;
                }
                .close:before, .close:after {
                    position: absolute;
                    left: 15px;
                    content: ' ';
                    height: 24px;
                    width: 3px;
                    border-radius: 20px;
                    background-color: white;
                }
                .close:before {
                    transform: rotate(45deg);
                }
                .close:after {
                    transform: rotate(-45deg);
                }
                .search-input{
                    right: 30px;
                    outline:0;
                    color: white;
                    background: transparent;
                    transform: translateY(-4px);
                }
            `}</style>
        </div>
    )
}