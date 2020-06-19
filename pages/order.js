import CardOrder from "../components/CardOrder"
import { useState, useEffect } from 'react'

export default function Order({order, setOrder, tipsSentences}) {
	
	//Get total order
	const total = order.reduce(function(prev, cur) {
		return prev + cur.prix;
	}, 0);

	//Get order without duplicates
	function getUnique(arr, comp) {
		// store the comparison  values in array
		const unique =  arr.map(e => e[comp])
			// store the indexes of the unique objects
			.map((e, i, final) => final.indexOf(e) === i && i)
			// eliminate the false indexes & return unique objects
			.filter((e) => arr[e]).map(e => arr[e]);
		return unique;
	}
	const orderUniques = getUnique(order, 'id')

	//Generate random tips
	//useEffect allowing to fix not Match SSR CSR hydratation with Math.random 
	function RandomTips() {
		const [tips, setTips] = useState(undefined);
		useEffect (() => {
			setTips(tipsSentences[Math.floor(Math.random() * ((tipsSentences.length - 1)))])
		}, [])
		return tips
	}
	

	return (
        <div className="main-content h-full relative">
            <div className="main-container h-full pt-16 px-10">
                <div className="hero">
					<h1 className="text-xl text-center font-sans font-semibold font-thin pb-4 uppercase">COMMANDE</h1>
					<div className="info-bulle flex flex-row mt-4">
						<div className="bulle relative mr-2">
							<div className="w-4 h-4 rounded-full bg-gray-500 text-center relative">
								<span className="absolute transform -translate-x-1/2 text-xs text-white font-semibold">i</span>
							</div>
						</div>
						<ul>
							<li className="text-tiny text-gray-600">Glissez à gauche pour ajouter un plat</li>
                            <li className="text-tiny text-gray-600">Glissez à droite pour le retirer </li>
						</ul>
					</div>
				</div>
                <div className="order-content mt-4 overflow-scroll">
                    {
                        <div>
                            {
                                orderUniques.map(function(el, index) {
                                    return (
                                    <div key={index}>
                                        <CardOrder order={order} setOrder={setOrder} infoItem={el}/>
                                    </div>
                                )})
                            }
                        </div>
                    }
					<div className="order-summary mb-8">
						{
							order.length < 1 
							? <div className="flex flex-col justify-center">
								<div className="pb-16">
									<p className="text-center">😦</p>
									<h2 className="text-lg italic text-center font-semibold text-gray-600">Aucune commande pour le moment</h2>
								</div>
								<div>
									<p className="text-base text-center italic text-gray-600 pb-2">Un petit secret :</p>
									<p className="text-base text-center italic text-gray-600">{RandomTips()}</p>
									<p className="text-base text-center font-semibold text-gray-600">Mais ça reste entre nous !</p>
									<p className="text-base text-center font-semibold text-gray-600">🤫</p>
								</div>
							</div>
							: <div>
									<h2 className="text-xl font-semibold text-center">Total</h2>
									<div className="text-center"><span className="price text-3xl font-semibold">{(Math.round(total * 100) / 100).toFixed(2)}</span><sup className="currency text-base font-semibold">€</sup></div>
									<p className="text-center text-tiny text-gray-600 mt-2 leading-snug"><span className="font-semibold">Gardons le contact</span><br/>Pour passer commande, faites appel à votre serveur !</p>
							</div>
						}
					</div>
                </div>
			</div>
			<style jsx>{`
				.hero{
                    position: relative;
                    height: 20%;
                    margin: 0 -20px;
                    padding: 20px;
                }
                .hero::after{
                    content:"";
                    position: absolute;
                    left: 0;
                    bottom: -18px;
                    z-index: 30;
                    width: 100%;
                    height: 20px;
                    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
                }
                .order-content{
                    position: relative;
                    height: 80%;
                    margin: 0 -20px;
                    padding: 20px;
                }
			`}</style>
		</div>
	)
}
