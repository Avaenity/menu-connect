import { func,bool } from 'prop-types';
import Instagram from '../public/svg/instagram.svg';
import TA from '../public/svg/tripadvisor.svg';
import MenuConnect from '../public/svg/menu-connect.svg'

const Menu = ({ setMenuOpen, menuOpen }) => {
    return (
        <div className="menu flex relative overflow-scroll"  open={menuOpen}>
            <a className="close" open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}></a>
            <div className="flex flex-col flex-1">
                <div className="menu-container flex flex-col justify-evenly flex-grow pl-8">
                    <ul>
                        <li className="uppercase">formules</li>
                        <li className="uppercase">entrées</li>
                        <li className="uppercase">plats</li>
                        <li className="uppercase">desserts</li>
                    </ul>
                    <ul>
                        <li className="uppercase">salades</li>
                        <li className="uppercase">fromages</li>
                    </ul>
                    <ul>
                        <li className="uppercase">Boissons</li>
                        <li className="uppercase">Carte des vins</li>
                    </ul>
                    <ul>
                        <li className="uppercase">service en chambre</li>
                    </ul>
                    <ul>
                        <li className="uppercase">Visites virtuelles</li>
                        <li className="uppercase">le patio ?</li>
                        <li className="uppercase">événements</li>
                    </ul>
                </div>
                <div className="menu-footer flex flex-row justify-between pl-8 pb-4">
                    <div className="social">
                        <div className="flex flex-row">
                            <a className="mr-4" href="/"><Instagram width="30px"/></a>
                            <a className="mr-2" href="/"><TA width="30px" fill="red"/></a>
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
            `}</style>
        </div>
    )
}

Menu.propTypes = {
    menuOpen: bool.isRequired,
    setMenuOpen: func.isRequired,
};

export default Menu;