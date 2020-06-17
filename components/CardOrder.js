import { motion } from "framer-motion"

export default function CardOrder(props) {

    return (
        <motion.div className="card-order p-4 mb-8 rounded shadow-md flex flex-row relative" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} dragDirectionLock onDrag={(event, info) => console.log(info.point.x, info.point.y)}>
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
            <style jsx>{`
                .qty-container{
                    background-color: #247BA0;
                }
                .qty{
                    top: 50%;
                    left: 50%;
                }
            `}</style>
        </motion.div>
    )
}