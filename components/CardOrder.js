import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import Plus from '../components/svg/Plus'
import Minus from '../components/svg/Minus'

export default function CardOrder(props) {

    // inspired from https://use-gesture.netlify.app/docs/hooks#start-and-end-handlers + https://use-gesture.netlify.app/docs/state#cancel
    // useGesture handle multiple state
    const [{ x }, set] = useSpring(() => ({ x: 0}))
    const bind = useGesture({
        onDrag: (({ down, movement: [mx], cancel }) => {
            if (mx > 100 || mx < -100) cancel()
            set({ x: down ? mx : 0, immediate: down })
        }),
        onDragEnd: ({movement: [mx]}) => {
            if (mx < 0){
                console.log ("+1"+props.infoItem.id)
            } else {
                console.log ("-1"+props.infoItem.id)
            }
        }
    })
    

    return (
        <div className="under-card relative">
            <div className="add-order h-full absolute bg-green-500 top-0 right-0 rounded border-2 border-solid border-white"><div className="icon icon-plus absolute right-0 mr-6"><Plus fill="white" width="2rem"/></div></div>
            <div className="remove-order h-full absolute bg-red-500 top-0 left-0 rounded border-2 border-solid border-white"><div className="icon icon-minus absolute left-0 ml-6"><Minus fill="white" width="2rem"/></div></div>
            <animated.div className="card-order p-4 mb-8 rounded shadow-md flex flex-row relative bg-white" {...bind()} style={{ x , touchAction: 'pan-y' }}>
                <div className="bulle-container absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="bulle relative">
                        <div className="qty-container w-5 h-5 rounded-full text-center relative">
                            <span className="qty absolute transform -translate-x-1/2 -translate-y-1/2 text-xs text-white font-semibold">1</span>
                        </div>
                    </div>
                </div>
                <div className="dish-desc pr-4 flex-grow">
                    <p className="dish-name text-base font-semibold pb-2">{props.infoItem.nom}</p>
                    <p className="dish-ing text-sm italic text-gray-600">{props.infoItem.ingredients}</p>
                </div>
                <div className="dish-price">
                    <span className="price text-base">{props.infoItem.prix}</span><span className="currency">€</span>
                </div>
            </animated.div>
            <style jsx>{`
                .add-order,
                .remove-order{
                    width: 50%;
                }
                .icon {
                    top: 50%;
                    transform: translateY(-50%);
                }
                .qty-container{
                    background-color: #247BA0;
                }
                .qty{
                    top: 50%;
                    left: 50%;
                }
            `}</style>
        </div>
    )
}