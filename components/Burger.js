import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
    return (
        <div className="burger" open={open} onClick={() => setOpen(!open)}>
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
                    width: 1.8rem;
                    height: 1.5rem;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    z-index: 10;
                }
                    
                .burger:focus {
                    outline: 0;
                    outline: none;
                }
                    
                .burger div {
                    width: 1.8rem;
                    height: 0.25rem;
                    background: #B5B5B5;
                    border-radius: 10px;
                    transition: all 0.3s linear;
                    position: relative;
                    transform-origin: 1px;
                }
            `}</style>
        </div>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;