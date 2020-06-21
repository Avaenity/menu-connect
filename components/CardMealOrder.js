
export default function CardMealOrder({ infoItem, name, onChange }) {

    

    return (
        <label className="relative">
            <div className="card-order p-4 mb-8 rounded shadow-md flex flex-row relative bg-white">
                <div className="dish-desc pr-4 flex-grow">
                    <p className="dish-name text-base font-semibold py-2">{infoItem[0].nom}</p>
                    <p className="dish-ing text-sm italic text-gray-600">{infoItem[0].ingredients}</p>
                </div>
                <input type="radio" name={name} value={infoItem[0].nom} onChange={onChange}></input>
            </div>
            <style jsx>{`
            `}</style>
        </label>
    )
}