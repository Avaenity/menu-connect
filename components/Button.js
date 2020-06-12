export default function Button () {
    return (
        <div className="button p-2 mb-8 mt-8 rounded shadow-md relative">
            <p className="text-center text-sm font-semibold uppercase">ajouter à ma commande</p>
            <div className="bulle-container absolute transform translate-x-1/2 -translate-y-1/2">
                <div className="bulle relative">
                    <div className="check-container w-6 h-6 rounded-full text-center relative">
                        <span className="check absolute"></span>
                    </div>
                </div>
            </div>
            <style jsx>{`
                
                .bulle-container{
                    top: 50%;
                    right: 1rem;
                }
                .check-container{
                    background-color: #247BA0;
                }
                .check {
                    display: absolute;
                    top: 50%;
                    left: 50%;
                    transform: rotate(45deg) translate(-120%, -25%);
                    height: 14px;
                    width: 7px;
                    border-bottom: 3px solid white;
                    border-right: 3px solid white;
                }
            `}</style>
        </div>
    )
}