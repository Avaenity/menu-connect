import { useState, useEffect } from 'react'

import { useSpring, animated} from 'react-spring'

import '../styles/index.css'
import Layout from '../components/Layout'
import DataJSON from '../data.json';
import TabNav from '../components/TabNav'
import MenuConnect from '../components/svg/MenuConnect'

function MyApp({ Component, pageProps }) {

	const categoriesFoods = [];
	const categoriesServices = [];
	const categoriesEvents = [];
	const infosRestaurant = [];

	const tipsSentences = [
		"Si vous achetez deux verres d'Uby n°6, ça ne fait pas un Uby n°12... Mais ça n'en reste pas moins un vin formidable !",
		"La table d'à côté ne dit que du bien de notre Saumon aux citrons confits !",
		"La dernière fois qu'on a raté notre Mi-cuit au chocolat, glace au caramel beurre salé, la baguette était à 1Fr !",
		"Ici c'est satisfait, ou confiné !",
		"Une fois, nous avons dû refuser Michaël Jackson en personne. Salle bondée. Il est repassé au second service..."
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
	
	const allFoods = []
    categoriesFoods.forEach(element => {
        Object.values(element).map(function (el,i){
            el.forEach(itm => {
				allFoods.push(itm)
			});
        })
    });
	

	const [menuOpen, setMenuOpen] = useState(false);
	
	const [tabActive, setTabActive] = useState("home");
	const [order, setOrder] = useState([]);
	const [searchOpen, setSearchOpen] = useState(false);
	const [search, setSearch] = useState("");

	//Animation
	const logoReveal = useSpring({
		from: { opacity: 0, width:"10rem" },
		to: async next => {
				await next({ opacity: 1, width:"10rem", config: { duration: 2000 } })
				await next({ opacity: 0, width:"20rem", config: { duration: 400 }, delay: 1000})
		}
	})
	const textReveal = useSpring({
		from: { opacity: 0 },
		to: async next => {
				await next({ opacity: 1, config: { duration: 1000 }, delay: 1000})
				await next({ opacity: 0, config: { duration: 400 }, delay: 1000})
		}
	})

	useEffect(() => {
		setTimeout(function(){document.getElementById("splash-screen").style.transform = "translateX(-100%)"; }, 4000);
		setTimeout(function(){ document.getElementById("splash-screen").classList.add("hidden")}, 5000);
	}, []);


	return (
		<>
			<div id="splash-screen" className="splash-screen absolute top-0 left-0 w-full h-full bg-white z-30 flex flex-col justify-center">
				<animated.img className="logo-sc w-40 i6:w-32 opacity-100" src="/logo.png" style={logoReveal} />
				<animated.p className="text-sc text-2xl text-center font-semibold uppercase" style={textReveal}>Le palais des délices</animated.p>
				<MenuConnect width="4rem" className="logo-mc"/>
			</div>
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
				allFoods={allFoods}
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
				#splash-screen{
					transition: transform 1s ease-in-out;
				}
				.logo-sc{
					position: absolute;
					z-index: 10;
					top: 26%;
					left: 50%;
					transform: translateX(-50%);
				}
				.text-sc{
					position: absolute;
					bottom: 40%;
					width: 100%;
					left: 50%;
					transform: translateX(-50%);
				}
				.logo-mc{
					position: absolute;
					bottom: 15px;
					left: 50%;
					transform: translateX(-50%);
				}
			`}</style>
			</Layout>
		</>
	)
}

export default MyApp
