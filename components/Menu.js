import { func,bool } from 'prop-types';
import Instagram from '../public/svg/Instagram.svg';
import TA from '../public/svg/TA.svg';
import Twitter from '../public/svg/Twitter.svg';
import Pinterest from '../public/svg/Pinterest.svg';
import Facebook from '../public/svg/Facebook.svg';
import MenuConnect from '../public/svg/menu-connect.svg';
import Link from 'next/link';
import DataJSON from '../data.json';

const Menu = ({ setMenuOpen, menuOpen }) => {

    const categories = [[],[],[]];
    const infoRestaurant = [];
    const rawCategories = Object.keys(DataJSON);
    function getCategories () {
        for (let i=0; i < rawCategories.length; i++){
            if (rawCategories[i].substring(0, 1) == "*" ){
                categories[0].push(rawCategories[i].substring(1))
            } else if (rawCategories[i].substring(0, 1) == "-" ){
                categories[1].push(rawCategories[i].substring(1))
            } else if (rawCategories[i].substring(0, 1) == "_" ){
                categories[2].push(rawCategories[i].substring(1))
            }
            else {
                infoRestaurant.push(DataJSON["Infos générales"][0])
            }
        }
    };
    getCategories();

    return (
        <div className="menu flex relative overflow-scroll"  open={menuOpen}>
            <a className="close" open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}></a>
            <div className="flex flex-col flex-1">
                <div className="menu-container flex flex-col justify-center flex-grow pl-8">
                    {
                        <ul className="categories mb-10 relative">
                            {categories[0].map((e, index) => (
                                <Link href="[category]" as={`/${e}`} key={index}><li className="uppercase mb-4" onClick={() => setMenuOpen(!menuOpen)}>{e}</li></Link>
                            ))}
                        </ul>
                    }
                    {
                        <ul className="categories mb-10 relative">
                            {categories[1].map((e, index) => (
                                <Link href="/roomservice" key={index}><li className="uppercase mb-4" onClick={() => setMenuOpen(!menuOpen)}>{e}</li></Link>
                            ))}
                        </ul>
                    }
                    {
                        <ul className="categories mb-10 relative">
                            {categories[2].map((e, index) => (
                                <Link href="/event" key={index}><li className="uppercase mb-4" onClick={() => setMenuOpen(!menuOpen)}>{e}</li></Link>
                            ))}
                        </ul>
                    }
                </div>
                <div className="menu-footer flex flex-row justify-between pl-8 pb-4">
                    <div className="social">
                        <div className="flex flex-row">
                            {
                                Object.keys(infoRestaurant[0]).map(function(el, key) {
                                    switch (el){
                                        case "facebook":
                                            return <a className="mr-4" href={infoRestaurant[0][el]} key={key}><Facebook width="30px"/></a>;
                                        case "pinterest":
                                            return <a className="mr-4" href={infoRestaurant[0][el]} key={key}><Pinterest width="30px"/></a>;
                                        case "twitter":
                                            return <a className="mr-4" href={infoRestaurant[0][el]} key={key}><Twitter width="30px"/></a>;
                                        case "instagram":
                                            return <a className="mr-4" href={infoRestaurant[0][el]} key={key}><Instagram width="30px"/></a>;
                                        case "tripadvisor":
                                            return <a className="mr-4" href={infoRestaurant[0][el]} key={key}><TA width="30px"/></a>;
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="menu-connect mr-8">
                        <a href="/"><MenuConnect width="60px"/></a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .close {
                    position: absolute;
                    right: 1.5rem;
                    top: 0.8rem;
                    width: 20px;
                    height: 20px;
                }
                .close:before, .close:after {
                    position: absolute;
                    left: 15px;
                    content: ' ';
                    height: 24px;
                    width: 3px;
                    border-radius: 20px;
                    background-color: #B5B5B5;
                }
                .close:before {
                    transform: rotate(45deg);
                }
                .close:after {
                    transform: rotate(-45deg);
                }

                .menu {
                    background: white;
                    height: 100vh;
                    width: 80vw;
                    text-align: left;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 11;
                    transition: transform 0.5s ease-in-out, box-shadow 1s linear;
                    box-shadow: ${menuOpen ? '1px 0px 15px rgba(181,181,181,0.6)' : 0};
                    transform: ${menuOpen ? 'translateX(0)' : 'translateX(-100%)'};
                }
                .categories::after{
                    position: absolute;
                    content: "";
                    left: 0;
                    bottom: -15px;
                    height: 1px;
                    width: 40%;
                    background-color: #B5B5B5;
                    opacity: 0.5;
                }
            `}</style>
        </div>
    )
}

Menu.propTypes = {
    menuOpen: bool.isRequired,
    setMenuOpen: func.isRequired,
};

export default Menu;