import { useRouter } from 'next/router'

export default function ServiceItem (props) {

    

    const illuCard = {
        streaming: "roomservice/tv.jpg",
        taxi: "roomservice/taxi.jpg",
        minibar: "roomservice/bar.jpg",
        pressing: "roomservice/cleaning.jpg",
        health: "roomservice/health.jpg",
        roomservice: "roomservice/breakfast.jpg",
        sightseeing: "roomservice/sightseeing.jpg"
    }

    const router = useRouter()

    //Get Info Services
    var infoService = props.categoriesServices[0]["Services en chambre"].filter(function(el){
            return (el.id == Object.values(router.query)[0])
    })[0];

    //to avoid fail static build
    if (!infoService) return <p></p>

    return (
        <div className="main-content relative">
            <div className="item-illus bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url(../" + illuCard[infoService.type] + ")"}}></div>
            <div className="relative w-full">
                <div className="title-item absolute font-semibold z-20 text-2xl text-white">{infoService.nom}</div>
                <div className="illus-content rounded-lg absolute z-10 bg-white shadow-md overflow-scroll text-base px-4 py-8"> 
                        {infoService.description}
                </div>
            </div>
            <style jsx>{`}
                .item-illus{
                    height: 50vh;
                }
                .item-illus::after{
                    position: absolute;
                    content:"";
                    height:100%;
                    width:100%;
                    bottom:0;
                    left:1;
                    z-index: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
                }
                .illus-content{
                    top: -8rem;
                    width: 80%;
                    left: 50%;
                    height: 50vh;
                    transform: translate(-50%);
                }
                .title-item{
                    top: -13rem;
                    left: 50%;
                    width: 80%;
                    transform: translate(-50%);
                }
            `}</style>
        </div>
    )
}