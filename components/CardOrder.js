export default function CardOrder(props) {

    console.log(props.infoItem)

    return (
        <div className="card p-4 mb-8 rounded shadow-md flex flex-row relative">
            <div className="bulle-container absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="bulle relative">
                    <div className="qty-container w-4 h-4 rounded-full text-center relative">
                        <span className="qty absolute transform -translate-x-1/2 text-xs text-white font-semibold">1</span>
                    </div>
                </div>
            </div>
            <div className="dish-desc flex-grow">
                <p className="dish-name text-base font-semibold pb-2">{props.infoItem.nom}</p>
                <p className="dish-ing text-xs italic text-gray-500">{props.infoItem.ingredients}</p>
            </div>
            <div className="dish-price">
                <span className="price">{props.infoItem.prix}</span><span className="currency">€</span>
            </div>
            <style jsx>{`
                .qty-container{
                    background-color: #247BA0;
                }
            `}</style>
        </div>
    )
}