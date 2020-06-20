import { func,bool } from 'prop-types';
import HomeBanner from '../components/HomeBanner'
import NavSlider from '../components/NavSlider'
import CardOrder from '../components/CardOrder'
import React, { useState } from 'react';


export default function IndexPage({ setMenuOpen, menuOpen, categoriesFoods, order, setOrder, searchOpen, setSearchOpen, search }) {

	//Active for NavSlider
	const [activeItem, setActiveItem] = useState("Formules")

	const categories = categoriesFoods.map(function(el, index) {
		return Object.keys(el).toString()
	})

	//Intersection Observer
	//TODO: Intersection observer for nav slider depending on card-container

	//Filter categoriesFoods by search
	const [categoriesFoodsFilteredBySearch, setCategoriesFoodsFilteredBySearch] = useState(categoriesFoods)

	const checkIfInputMatches = (input, value) => input.toLowerCase().split(" ").some(o => value.toLowerCase().includes(o))
	const filterByInput = (data, input) => {
		let finalResult = [];
		data.forEach(d => { 
			let keys = Object.keys(d);
			let values = Object.values(d);
			finalResult = [...finalResult, ...values.map((obj, index) => {
				let result = obj.filter(o => o.ingredients ? checkIfInputMatches(input, o.ingredients) : checkIfInputMatches(input, o.nom))
				return  {[keys[index]]: result}
			})]
		})
		return finalResult
	}

	

return (
	<div className="main-content">
		<div className="hero relative">
			<HomeBanner searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>
			<NavSlider categories={categories} activeItem={activeItem} setActiveItem={setActiveItem}/>
			<div className="info-bulle flex flex-row mt-4 px-8">
				<div className="bulle relative pb-8 mr-2">
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
		<div className="card-container flex flex-col px-8 overflow-scroll pt-6" id="card-container">
			{
				filterByInput(categoriesFoodsFilteredBySearch, search).map(function(el, i) {
					return (
						<div key={i}>
							<h2 className="category text-lg font-semibold mb-2 uppercase pt-2" id={Object.keys(el)}>{Object.keys(el)}</h2>
							{
								el[Object.keys(el)].map (function(itm,index){
									return <CardOrder type={Object.keys(el)} order={order} setOrder={setOrder} key={index} infoItem={itm}/>
								})
							}
						</div>
					)
				})
			}
		</div>

		<style jsx>{`
			.main-content {
			transition: filter 0.5s ease-in-out;
			filter: blur(${menuOpen ? "10px" : "0"});
			}
			.hero {
				height: 40%;
			}
			.card-container{
				height: 60%;
			}
			.hero::after{
				content:"";
				position: absolute;
				left: 0;
				bottom: -20px;
				z-index: 30;
				width: 100%;
				height: 20px;
				background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
			}
		`}</style>
	</div>
)
}

IndexPage.propTypes = {
menuOpen: bool.isRequired,
setMenuOpen: func.isRequired,
};
