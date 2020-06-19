
import SearchIcon from './svg/SearchIcon'

export default function Search ({ hasWhiteBg }) {
    return (
        <div className="">
            <SearchIcon fill={hasWhiteBg ? '#718096' : 'white'}/>
        </div>
    )
}