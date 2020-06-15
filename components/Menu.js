import Instagram from '../components/svg/Instagram';
import TA from '../components/svg/TA';
import Twitter from '../components/svg/Twitter';
import Pinterest from '../components/svg/Pinterest';
import Facebook from '../components/svg/Facebook';
import MenuConnect from '../components/svg/MenuConnect';
import Link from 'next/link';

const Menu = (props) => {

    return (
        <div className="menu flex relative overflow-scroll"  open={props.menuOpen}>
            <div className="close" open={props.menuOpen} onClick={() => props.setMenuOpen(!props.menuOpen)}></div>
            <div className="flex flex-col flex-1">
                <div className="menu-container flex flex-col justify-center flex-grow pl-8">
                    {
                        <ul className="categories mb-10 relative">
                            {props.categoriesFoods.map((e, index) => (
                                <Link href="/[category]" as={`/${Object.keys(e)[0]}`} key={index}><li className="uppercase mb-4" onClick={() => props.setMenuOpen(!props.menuOpen)}>{Object.keys(e)[0]}</li></Link>
                            ))}
                        </ul>
                    }
                    {
                        <ul className="categories mb-10 relative">
                            {props.categoriesServices.map((e, index) => (
                                <Link href="/roomservice" key={index}><li className="uppercase mb-4" onClick={() => props.setMenuOpen(!props.menuOpen)}>{Object.keys(e)[0]}</li></Link>
                            ))}
                        </ul>
                    }
                    {
                        <ul className="categories mb-10 relative">
                            {props.categoriesEvents.map((e, index) => (
                                <Link href="/event" key={index}><li className="uppercase mb-4" onClick={() => props.setMenuOpen(!props.menuOpen)}>{Object.keys(e)[0]}</li></Link>
                            ))}
                        </ul>
                    }
                </div>
                <div className="menu-footer flex flex-row justify-between pl-8 pb-4">
                    <div className="social">
                        <div className="flex flex-row">
                            {
                                Object.keys(props.infosRestaurant[0]).map(function(el, key) {
                                    switch (el){
                                        case "facebook":
                                            return <a className="mr-4" href={props.infosRestaurant[0][el]} key={key}><Facebook width="30px"/></a>;
                                        case "pinterest":
                                            return <a className="mr-4" href={props.infosRestaurant[0][el]} key={key}><Pinterest width="30px"/></a>;
                                        case "twitter":
                                            return <a className="mr-4" href={props.infosRestaurant[0][el]} key={key}><Twitter width="30px"/></a>;
                                        case "instagram":
                                            return <a className="mr-4" href={props.infosRestaurant[0][el]} key={key}><Instagram width="30px"/></a>;
                                        case "tripadvisor":
                                            return <a className="mr-4" href={props.infosRestaurant[0][el]} key={key}><TA width="30px"/></a>;
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
                    right: 2rem;
                    top: 2rem;
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
                    background-color: #718096;
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
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 11;
                    transition: transform 0.5s ease-in-out, box-shadow 1s linear;
                    box-shadow: ${props.menuOpen ? '1px 0px 15px rgba(181,181,181,0.6)' : 0};
                    transform: ${props.menuOpen ? 'translateX(0)' : 'translateX(-100%)'};
                }
                .categories::after{
                    position: absolute;
                    content: "";
                    left: 0;
                    bottom: -15px;
                    height: 1px;
                    width: 40%;
                    background-color: #718096;
                    opacity: 0.5;
                }
            `}</style>
        </div>
    )
}

export default Menu;