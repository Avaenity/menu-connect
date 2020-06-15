import CardIllus from '../../components/CardIllus'

export default function RoomService(props) {

	return (
		<div className="main-content h-full relative">
            <div className="main-container h-full pt-16 px-10">
				<div className="hero">
					<h1 className="text-xl text-center font-sans font-semibold font-thin pb-8 uppercase">service en chambre</h1>
				</div>
				<div className="category-content overflow-scroll grid grid-flow-row grid-cols-2 gap-4">
					{
						props.categoriesServices[0]["Services en chambre"].map(function(el, index) {
							return <CardIllus key={index} item={el}/>
						})
					}
				</div>
			</div>
			<style jsx>{`
				.hero{
                    position: relative;
                    height: 10%;
                    margin: 0 -20px;
                    padding: 20px;
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
                .category-content{
                    position: relative;
                    height: 90%;
                    margin: 0 -20px;
                    padding: 20px;
                }
			`}</style>
		</div>
	)
}
