import Link from 'next/link';
import React, { useState } from 'react';

export default function NavSlider() {

    const [activeItem, setActiveItem] = useState("Formules")
    
    return (
        <nav className="navslider -mx-8">
            <div className="nav-container overflow-hidden pt-5 pb-8 px-8 overflow-scroll">
                <ul className="flex flew-col">
                    <li className={`nav-item mr-10 relative ${activeItem == "Formules" ? "active font-semibold" : "text-gray-500"}`} name="Formules" onClick={() => { setActiveItem("Formules") }}>Formules</li>
                    <li className={`nav-item mr-10 relative ${activeItem == "Entrées" ? "active font-semibold" : "text-gray-500"}`} name="Entrées" onClick={() => { setActiveItem("Entrées") }}>Entrées</li>
                    <li className={`nav-item mr-10 relative ${activeItem == "Plats" ? "active font-semibold" : "text-gray-500"}`} name="Plats" onClick={() => { setActiveItem("Plats") }}>Plats</li>
                    <li className={`nav-item mr-10 relative ${activeItem == "Desserts" ? "active font-semibold" : "text-gray-500"}`} name="Desserts" onClick={() => { setActiveItem("Desserts") }}>Desserts</li>
                    <li className={`nav-item mr-10 relative ${activeItem == "Boissons" ? "active font-semibold" : "text-gray-500"}`} name="Boissons" onClick={() => { setActiveItem("Boissons") }}>Boissons</li>
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
                .nav-item {
                    text-shadow: 2px 2px 4px rgba(150, 150, 150, 0.3);
                }
                .nav-item.active{
                    text-shadow: none;
                }
                .nav-item.active:after{
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    content: '';
                    height: 2px;
                    width: 100%;
                    background-color: #247BA0;
                    text-shadow: none;
                }
                //TODO: create slide on active
            `}</style>
        </nav>
    )
}
