import { useRouter } from 'next/router'

export default function EventItem (props) {

    const router = useRouter()

    //Get Info Services
    var infoEvent = props.categoriesEvents[0]["Évènements"].filter(function(el){
            return (el.id == Object.values(router.query)[0])
    })[0];

    //to avoid fail build
    if (!infoEvent) return <p></p>

    return (
        <div className="main-content relative">
            <div className="item-illus bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url(/event/" + infoEvent.image + ")"}}></div>
            <div className="relative w-full">
                <div className="title-item absolute font-semibold z-20 text-2xl text-white">{infoEvent.nom}</div>
                <div className="illus-content rounded-lg absolute z-10 bg-white shadow-md text-base">
                    <div className="border-illus-content overflow-scroll relative px-4 py-8">
                        {infoEvent.description}
                    </div>
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
                    transform: translate(-50%);
                }
                .border-illus-content{
                    height: 50vh;
                }
                .border-illus-content::after{
                    content:"";
                    position: fixed;
                    left: 0;
                    top: 0px;
                    z-index: 30;
                    width: 100%;
                    height: 20px;
                    border-radius: 0.5rem 0.5rem 0 0;
                    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
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