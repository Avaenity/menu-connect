import { func,bool } from 'prop-types';
import HomeBanner from '../components/HomeBanner'
import NavSlider from '../components/NavSlider'
import Card from '../components/Card'


export default function IndexPage({ setMenuOpen, menuOpen, categoriesFoods }) {


	const categories = categoriesFoods.map(function(el, index) {
		return Object.keys(el).toString()
	})

return (
	<div className="main-content">
		<div className="hero relative">
			<HomeBanner />
			<NavSlider categories={categories}/>
		</div>
		<div className="card-container flex flex-col px-8 overflow-scroll pt-6" id="card-container">
			{
				categoriesFoods.map(function(el, i) {
					return (
						<div key={i} className="pb-4">
							<h2 className="category text-lg font-semibold mb-2 uppercase pt-2" id={Object.keys(el)}>{Object.keys(el)}</h2>
							{
								el[Object.keys(el)].map (function(itm,index){
									return <Card key={index} infoItem={itm}/>
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
				bottom: -19px;
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
