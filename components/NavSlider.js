import Link from 'next/link'


export default function NavSlider() {

    return (
        <nav className="navslider -mx-8">
            <div className="nav-container overflow-hidden pt-5 pb-8 px-8 overflow-scroll">
                <ul className="flex flew-col">
                    <li className="pr-6">Formules</li>
                    <li className="pr-6">Entrées</li>
                    <li className="pr-6">Plats</li>
                    <li className="pr-6">Desserts</li>
                    <li className="pr-6">Boissons</li>
                </ul>
            </div>
            <style jsx>{`
                .nav-container{
                    white-space: nowrap;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    -ms-overflow-style: -ms-autohiding-scrollbar;
                }
                .nav-container::-webkit-scrollbar{
                    display: none;
                }
            `}</style>
        </nav>
    )
}
