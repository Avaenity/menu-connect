import CardOrder from "../components/CardOrder"
import Button from "../components/Button"

export default function Order() {
		
	return (
		<div className="hero">
			<div className="container pt-16 px-10">
				<h1 className="text-xl text-center font-sans font-semibold font-thin pb-4">COMMANDE</h1>
				<div className="info-bulle flex flex-row mt-4">
					<div className="bulle relative mr-2">
						<div className="w-4 h-4 rounded-full bg-gray-500 text-center relative">
							<span className="absolute transform -translate-x-1/2 text-xs text-white font-semibold">i</span>
						</div>
					</div>
					<ul>
						<li className="text-xs text-gray-500">Glissez à gauche pour ajouter un plat</li>
						<li className="text-xs text-gray-500">Glissez à droite pour le retirer </li>
					</ul>
				</div>
				<div className="order-content mt-4 flex flex-col">
				</div>
				<div className="order-summary mb-8">
					<h2 className="text-xl font-semibold text-center">Total</h2>
					<div className="text-center"><span className="price text-3xl font-semibold">40,50</span><sup className="currency text-base font-semibold">€</sup></div>
					<p className="text-center text-sm text-gray-500 mt-2 leading-snug"><span className="font-semibold">Gardons le contact</span><br/>Pour passer commande, faites appel à votre serveur!</p>
				</div>
			</div>
		</div>
	)
}
