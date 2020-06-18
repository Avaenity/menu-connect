export default function QttyBulle ({Qtty}) {

    return (
        <div className="bulle-container absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            <div className="bulle relative">
                <div className="qty-container w-5 h-5 rounded-full text-center relative">
                    <span className="qty absolute transform -translate-x-1/2 -translate-y-1/2 text-xs text-white font-semibold">{Qtty}</span>
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