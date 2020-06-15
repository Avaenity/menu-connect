import { string,bool,func } from 'prop-types';

import Link from 'next/link'
import Place from '../components/svg/Place'
import Home from '../components/svg/Home'
import Order from '../components/svg/Order'


export default function TabNav({ menuOpen, tabActive, setTabActive }) {

    function isActive (tabName) {
        return tabName == tabActive
    } 

    return (
        <div className="tabnav w-full fixed bottom-0 flex flex-row justify-around bg-white">
            <Link href="/welcome">
                <div className={`svg relative flex flex-col justify-center ${isActive('place') ? "active" : ""}`} data-name="place" onClick={(e) => setTabActive(e.currentTarget.dataset.name)}>
                {/* TODO find a way to pass data-name in isActive() */}
                    <Place fill={`${isActive('place') ? "#247BA0" : "#718096"}`} width={`${isActive('place') ? "35px" : "25px"}`}/>
                </div>
            </Link>
            <Link href="/">
                <div className={`svg relative flex flex-col justify-center ${isActive('home') ? "active" : ""}`} data-name="home" onClick={(e) => setTabActive(e.currentTarget.dataset.name)}>
                {/* TODO find a way to pass data-name in isActive() */}
                    <Home fill={`${isActive('home') ? "#247BA0" : "#718096"}`} width={`${isActive('home') ? "35px" : "25px"}`}/>
                </div>
            </Link>
            <Link href="/order">
                <div className={`svg relative flex flex-col justify-center ${isActive('order') ? "active" : ""}`} data-name="order" onClick={(e) => setTabActive(e.currentTarget.dataset.name)}>
                {/* TODO find a way to pass data-name in isActive() */}
                    <Order fill={`${isActive('order') ? "#247BA0" : "#718096"}`} width={`${isActive('order') ? "30px" : "20px"}`}/>
                </div>
            </Link>

            <style jsx>{`
                .tabnav{
                    height: var(--tabnav-height);
                    box-shadow: 0px 0px 25px rgba(181,181,181,0.6);
                    transition: filter 0.5s ease-in-out;
                    filter: blur(${menuOpen ? "10px" : "0"});
                }
                .svg::after{
                    position: absolute;
                    content: '';
                    top: 0;
                    opacity: 0;
                    left: 50%;
                    width: 0px;
                    height: 4px;
                    border-radius: 5px 5px;
                    background-color: #247BA0;
                    transform: translate(-50%, -50%);
                    transition: width 0.3s ease-in-out;
                }
                .svg.active::after{
                    width: 35px;
                    opacity: 1;
                }
                
            `}</style>
        </div>
    )
}

TabNav.propTypes = {
    menuOpen: bool.isRequired,
    tabActive: string.isRequired,
    setTabActive: func.isRequired
};