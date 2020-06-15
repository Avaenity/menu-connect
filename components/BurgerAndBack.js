import { bool, func } from 'prop-types';

const Burger = ({ menuOpen, setMenuOpen, isWhite, hasBack }) => {
    return (
        <div className="burger" open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`burger-container${isWhite ? " white" : ""}${hasBack ? "" : " inactive"}`}>    
                <div />
                <div />
                <div />
            </div>
            <div className={`burger-container ${isWhite ? "white" : ""}${hasBack ? " inactive" : ""}`}>

            </div>

            <style jsx>{`
                .burger {
                    position: absolute;
                    top: 2rem;
                    left: 2rem;
                    border: none;
                    z-index: 10;
                }

                .burger-container{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    width: 3rem;
                    height: 3rem;
                    padding: 0.8rem 0.6rem;
                    background: transparent;
                }
                .burger-container.inactive{
                    display: none;
                    opcaity: 0;
                }
                    
                .burger-container div {
                    width: 100%;
                    height: 4px;
                    border-radius: 10px;
                    transition: all 0.3s linear;
                    position: relative;
                    transform-origin: 1px;
                    background-color: #718096;
                }
                .burger-container.white div{
                    background-color: white;
                }
            `}</style>
        </div>
    )
}

Burger.propTypes = {
    menuOpen: bool.isRequired,
    setMenuOpen: func.isRequired,
};

export default Burger;