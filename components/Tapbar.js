import { func,bool } from 'prop-types';

import Link from 'next/link'
import Place from '../public/svg/place.svg'
import Home from '../public/svg/home.svg'
import Order from '../public/svg/order.svg'


export default function Tapbar({ open }) {

    return (
        <div className="tapbar w-full absolute bottom-0 flex flex-row justify-around h-24 bg-white">
            <Place width="2rem" fill="#B5B5B5"/>
            <Home width="2rem" fill="#B5B5B5"/>
            <Order width="1.5rem" fill="#B5B5B5"/>

            <style jsx>{`
                .tapbar{
                    box-shadow: 0px 0px 25px rgba(181,181,181,0.6);
                    transition: filter 0.5s ease-in-out;
                    filter: blur(${open ? "10px" : "0"});
                }
            `}</style>
        </div>
    )
}

Tapbar.propTypes = {
    open: bool.isRequired,
};