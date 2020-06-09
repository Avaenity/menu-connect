import { func,bool } from 'prop-types';

const Menu = ({ setOpen, open }) => {
    return (
        <div className="menu">
            <div className="flex flex-col justify-center relative">
                <a href="#" className="close" open={open} onClick={() => setOpen(!open)}></a>
            </div>
            <style jsx>{`
                .close {
                    position: absolute;
                    right: 2rem;
                    top: 1.70rem;
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
                    box-shadow: ${open ? '1px 0px 15px grey' : 0};
                    transform: ${ open ? 'translateX(0)' : 'translateX(-100%)'};
                }
            `}</style>
        </div>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Menu;