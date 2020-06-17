import '../styles/index.css'
import Layout from '../components/Layout'
import React, { useState } from 'react'
import DataJSON from '../data.json';
import TabNav from '../components/TabNav'
import Div100vh from 'react-div-100vh'

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
		<Div100vh>
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
			<TabNav 
				menuOpen={menuOpen} 
				tabActive={tabActive} 
				setTabActive={setTabActive}/>
			<style jsx global>{`

				:root{
					--tabnav-height: 4rem;
				}
				html {
					background: linear-gradient(#FFFFFF, #F7F7F7);
					color: #484848;
				}
				p, li {
					font-size: 1.125rem;
				}
				.main-content{
					height: calc(100vh - var(--tabnav-height));
					overflow: hidden;
					transition: filter 0.5s ease-in-out;
					filter: blur(${menuOpen ? "10px" : "0"});
				}
			`}</style>
			</Layout>
		</Div100vh>
	)
}

export default MyApp
