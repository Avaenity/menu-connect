//TODO: split burger and close into 2 components
import { bool, func } from 'prop-types'
import Back from '../components/svg/Back'
import { useRouter } from 'next/router'

const Burger = ({ menuOpen, setMenuOpen, isWhite, needBack }) => {

    const router = useRouter()

    return (
        <div className="burgerAndBack">
            <div className={`burger-container${isWhite ? " white" : ""}${needBack ? " inactive" : ""}`} open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>    
                <div />
                <div />
                <div />
            </div>
            <div className={`burger-container ${isWhite ? "white" : ""}${needBack ? "" : " inactive"}`}>
                <Back fill={isWhite ? "white" : "#718096"} onClick={() => router.back()}/>
            </div>

            <style jsx>{`
                .burgerAndBack {
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