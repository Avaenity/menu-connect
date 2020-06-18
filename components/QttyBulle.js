export default function QttyBulle ({Qtty, size}) {

    return (
        <div className="bulle-container absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            <div className="bulle relative">
                <div className={`qty-container rounded-full border border-solid border-white text-center relative ${size == "small" ? 'w-4 h-4' : 'w-5 h-5'}`}>
                    <span className={`qty absolute transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold ${size == "small" ? 'text-2xs' : 'text-xs'}`}>{Qtty}</span>
                </div>
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
        </div>
    )

}