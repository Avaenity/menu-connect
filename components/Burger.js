import { bool, func } from 'prop-types';

const Burger = ({ menuOpen, setMenuOpen, isWhite }) => {
    return (
        <div className={`burger ${isWhite ? "white" : ""}`} open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <div />
            <div />
            <div />

            <style jsx>{`
                .burger {
                    position: absolute;
                    top: 2rem;
                    left: 2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    width: 1.5rem;
                    height: 1.3rem;
                    background: transparent;
                    border: none;
                    padding: 0;
                    z-index: 10;
                }
                    
                .burger div {
                    width: 1.5rem;
                    height: 0.2rem;
                    border-radius: 10px;
                    transition: all 0.3s linear;
                    position: relative;
                    transform-origin: 1px;
                    background-color: #B5B5B5;
                }
                .burger.white div{
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