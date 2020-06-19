import '../styles/index.css'
import Layout from '../components/Layout'
import { useState } from 'react'
import DataJSON from '../data.json';
import TabNav from '../components/TabNav'

function MyApp({ Component, pageProps }) {

	const categoriesFoods = [];
	const categoriesServices = [];
	const categoriesEvents = [];
	const infosRestaurant = [];

	const tipsSentences = [
		"Si vous achetez deux verres d'Uby n°6, ça ne fait pas un Uby n°12... Mais ça n'en reste pas moins un vin formidable!",
		"La table d'à côté ne dit que du bien de notre Saumon aux citrons confits!",
		"La dernière fois qu'on a raté notre Mi-cuit au chocolat, glace au caramel beurre salé, la baguette était à 1Fr!",
		"Ici c'est satisfait, ou confiné!",
		"Une fois, nous avons dû refuser Michaël Jackson en personne. Salle bondée. Il est repassé au second service...",
	]
	

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
	const [order, setOrder] = useState([]);
	const [searchOpen, setSearchOpen] = useState(false);
	const [search, setSearch] = useState("");


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
				searchOpen={searchOpen}
				setSearchOpen={setSearchOpen}
				search={search}
				setSearch={setSearch}
			>
			<Component {...pageProps} 
				menuOpen={menuOpen} 
				setMenuOpen={setMenuOpen} 
				categoriesFoods={categoriesFoods}
				categoriesServices={categoriesServices}
				categoriesEvents={categoriesEvents}
				infosRestaurant={infosRestaurant}
				order={order}
				setOrder={setOrder}
				tipsSentences={tipsSentences}
				searchOpen={searchOpen}
				setSearchOpen={setSearchOpen}
				search={search}
				/>
			<TabNav 
				menuOpen={menuOpen} 
				tabActive={tabActive} 
				setTabActive={setTabActive}
				order={order}
				/>
			<style jsx global>{`

				:root{
					--tabnav-height: 4.5rem;
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
	)
}

export default MyApp
