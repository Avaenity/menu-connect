import { info } from "autoprefixer"

export default function CardMealOrder({ allFoods, idItem }) {

    //Get infoItem by ID
    const infoItem = allFoods.filter(function(itm){
        return itm.id == idItem;
    });

    console.log(infoItem)

    return (
        <div className="relative">
            <div className="card-order p-4 mb-8 rounded shadow-md flex flex-row relative bg-white">
                <div className="dish-desc pr-4 flex-grow">
                    <p className="dish-name text-base font-semibold py-2">{infoItem[0].nom}</p>
                    <p className="dish-ing text-sm italic text-gray-600">{infoItem[0].ingredients}</p>
                </div>
                <div className="dish-price flex flex-col justify-center">
                        <p><span className="price text-base">{infoItem[0].prix}</span><span className="currency">€</span></p>
                </div>
            </div>
            <style jsx>{`
            `}</style>
        </div>
    )
}