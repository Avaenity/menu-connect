import Link from 'next/link';
import React, { useState } from 'react';

export default function NavSlider(props) {

    const [activeItem, setActiveItem] = useState("Formules")
    console.log(props.categories)
    
    return (
        <nav className="navslider">
            <div className="nav-container overflow-hidden pt-5 pb-8 px-8 overflow-scroll relative">
                <ul className="flex flew-col">
                    {
                        props.categories.map(function (el,i){
                            return (
                                <li className="nav-item pr-10" name={el} onClick={() => { setActiveItem(el) }} key={i}>
                                    <a className={`item relative ${activeItem == el ? "active font-semibold" : "text-gray-600"}`}>
                                        {el}
                                    </a>
                                </li>
                            )
                        })
                    }
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
                
                .item {
                    text-shadow: 2px 2px 4px rgba(150, 150, 150, 0.3);
                }
                .item.active{
                    text-shadow: none;
                }
                .item.active:after{
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
