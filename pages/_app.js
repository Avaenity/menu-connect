import '../styles/index.css'
import Layout from '../components/Layout'
import React, { useState } from 'react'
import DataJSON from '../data.json';

function MyApp({ Component, pageProps }) {

	const categoriesFoods = [];
	const categoriesServices = [];
	const categoriesEvents = [];
	const infosRestaurant = [];

	function getCategories () {
		for (let [key, value] of Object.entries(DataJSON)) {
			if (key.substring(0, 1) == "*" ){
				var obj = {}
				obj[key.substring(1)] = value
				categoriesFoods.push(obj)
			} else if (key.substring(0, 1) == "-" ){
				var obj = {}
				obj[key.substring(1)] = value
				categoriesServices.push(obj)
			} else if (key.substring(0, 1) == "_" ){
				var obj = {}
				obj[key.substring(1)] = value
				categoriesEvents.push(obj)
			} else {
				infosRestaurant.push(value[0])
			}
		}
	};
	getCategories();
	
	

	const [menuOpen, setMenuOpen] = useState(false);
	const [tabActive, setTabActive] = useState("home");

	return (
		<Layout
			menuOpen={menuOpen}
			setMenuOpen={setMenuOpen}
			tabActive={tabActive}
			setTabActive={setTabActive}
			categoriesFoods={categoriesFoods}
			categoriesServices={categoriesServices}
			categoriesEvents={categoriesEvents}
			infosRestaurant={infosRestaurant}
		>
		<Component {...pageProps} 
			menuOpen={menuOpen} 
			setMenuOpen={setMenuOpen} 
			categoriesFoods={categoriesFoods}
			categoriesServices={categoriesServices}
			categoriesEvents={categoriesEvents}
			infosRestaurant={infosRestaurant}/>
		<style jsx global>{`
			html {
			background: linear-gradient(#FFFFFF, #F7F7F7);
			height: 100vh;
			color: #484848;
			}
			p, li {
			font-size: 1.125rem;
			}
			.hero{
			height: 100vh;
			padding-bottom: 6rem;
			overflow: scroll;
			}
		`}</style>
		</Layout>
	)
}

export default MyApp
