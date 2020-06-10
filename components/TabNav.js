import { string,bool,func } from 'prop-types';

import Link from 'next/link'
import Place from '../public/svg/place.svg'
import Home from '../public/svg/home.svg'
import Order from '../public/svg/order.svg'


export default function TabNav({ menuOpen, tabActive, setTabActive }) {

    function isActive (tabName) {
        return tabName == tabActive
    } 

    return (
        <div className="tapbar w-full absolute bottom-0 flex flex-row justify-around h-24 bg-white">
            <a className={`svg relative flex flex-col justify-center ${isActive('place') ? "active" : ""}`} data-name="place" onClick={(e) => setTabActive(e.currentTarget.dataset.name)}>
            {/* TODO find a way to pass data-name in isActive() */}
                <Place fill={`${isActive('place') ? "#247BA0" : "#B5B5B5"}`} width={`${isActive('place') ? "2.5rem" : "2rem"}`}/>
            </a>
            <a className={`svg relative flex flex-col justify-center ${isActive('home') ? "active" : ""}`} data-name="home" onClick={(e) => setTabActive(e.currentTarget.dataset.name)}>
            {/* TODO find a way to pass data-name in isActive() */}
                <Home fill={`${isActive('home') ? "#247BA0" : "#B5B5B5"}`} width={`${isActive('home') ? "2.5rem" : "2rem"}`}/>
            </a>
            <a className={`svg relative flex flex-col justify-center ${isActive('order') ? "active" : ""}`} data-name="order" onClick={(e) => setTabActive(e.currentTarget.dataset.name)}>
            {/* TODO find a way to pass data-name in isActive() */}
                <Order fill={`${isActive('order') ? "#247BA0" : "#B5B5B5"}`} width={`${isActive('order') ? "2rem" : "1.5rem"}`}/>
            </a>

            <style jsx>{`
                .tapbar{
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