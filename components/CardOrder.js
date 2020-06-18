import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import Plus from '../components/svg/Plus'
import Minus from '../components/svg/Minus'
import QttyBubble from '../components/QttyBulle'

export default function CardOrder({infoItem, order, setOrder}) {

    
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
                addItemToOrder()
            } else {
                removeItemToOrder()
            }
        }
    })

    //Check order on load
    const id = infoItem.id;
    const count = order.filter((obj) => obj.id === id).length;
    
    //Add to Order
    function addItemToOrder() {
        setOrder(order => [...order, infoItem]);
    }

    //Remove from order
    function removeItemToOrder() {
        // make a separate copy of the array
        var array = order; 
         // get index of object with id
        var removeIndex = array.map(function(item) { return item.id; }).indexOf(infoItem.id);
        // remove object
        if (removeIndex !== -1) {
            array.splice(removeIndex, 1);
            // set new order
            setOrder([...order]);
        }
    }

    return (
        <div className="under-card relative">
            <div className="add-order h-full absolute bg-green-500 top-0 right-0 rounded border-2 border-solid border-white"><div className="icon icon-plus absolute right-0 mr-6"><Plus fill="white" width="2rem"/></div></div>
            <div className="remove-order h-full absolute bg-red-500 top-0 left-0 rounded border-2 border-solid border-white"><div className="icon icon-minus absolute left-0 ml-6"><Minus fill="white" width="2rem"/></div></div>
            <animated.div className="card-order p-4 mb-8 rounded shadow-md flex flex-row relative bg-white" {...bind()} style={{ x , touchAction: 'pan-y' }}>
                { count > 0 ? <QttyBubble Qtty={count}/> : "" }
                <div className="dish-desc pr-4 flex-grow">
                    <p className="dish-name text-base font-semibold pb-2">{infoItem.nom}</p>
                    <p className="dish-ing text-sm italic text-gray-600">{infoItem.ingredients}</p>
                    <p className="dish-ing text-xs italic text-gray-600">{infoItem.info}</p>
                </div>
                <div className="dish-price">
                    <span className="price text-base">{infoItem.prix}</span><span className="currency">€</span>
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
            `}</style>
        </div>
    )
}