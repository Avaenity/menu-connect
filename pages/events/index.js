import CardEvent from '../../components/CardEvent'

export default function Event(props) {
	
	const pr = (props.categoriesEvents[0]["Évènements"])
	const date = "2020-07-10T22:00:00.000Z"
	var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
	var getMonthss= months[new Date(date).getMonth()]

	// Sort Date by Month
	var DataRawEvents = props.categoriesEvents[0]["Évènements"]
	var groupKey = 0;
	var groups = DataRawEvents.reduce(function (r, o) {
		var m = o.date.split(('-'))[1];
		(r[m])? r[m].data.push(o) : r[m] = {data: [o]};
		return r;
	}, {});
	
	var DataEvents = Object.keys(groups).map(function(k){ return groups[k]; });

	var monthsList = DataEvents.map(function (el,i){
		return (months[new Date(el.data[0].date).getMonth()])
	})

		return (
			<div className="main-content h-full relative">
				<div className="main-container h-full pt-16 px-10">
					<div className="hero">
						<img className="logo-banner w-24 mx-auto mb-4" src="/logo.png" />
					</div>
					<div className="category-content overflow-scroll">
						{
							monthsList.map(function (el,i){
								return (
									<div className="monthly-container" key={i}>
										<h2 className="text-xl font-sans font-semibold font-thin pt-2 pb-6 uppercase">{el}</h2>
										{
											DataEvents[i].data.map(function (itm,index){
												return <CardEvent info={itm}key={index}/>
											})
										}
									</div>
									
								)
							})
						}
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
                    bottom: -19px;
                    z-index: 30;
                    width: 100%;
                    height: 20px;
                    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
                }
                .category-content{
                    position: relative;
                    height: 80%;
                    margin: 0 -20px;
                    padding: 20px;
                }
				@media (max-width:740px) and (max-height:740px){
					.hero {
						padding: 10px 20px;
					}
					.card-container{
						padding: 10px 20px;
					}
				}
			`}</style>
			</div>
		)
	}
	