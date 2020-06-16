import CardOrderContainer from '../components/CardOrderContainer'
import { useRouter } from 'next/router'


export default function Category (props) {
    const router = useRouter()
    const category = router.query["category"]

    //get types
    const types = []
    const items = []
    const getTypes = props.categoriesFoods.map(function(el, index) {
        if (Object.keys(el) == category){
            //types
            let unique = [...new Set(props.categoriesFoods[index][category].map(item => item.type))];
            for (let i = 0; i < unique.length; i++){
                types.push(unique[i])
            }
        }
    })

    
    

    return (
        <div className="main-content h-full relative">
            <div className="main-container h-full pt-16 px-10">
                <div className="hero">
                    <h1 className="text-xl text-center font-sans font-semibold font-thin pb-4 uppercase">{category}</h1>
                    <div className="info-bulle flex flex-row mt-4">
                        <div className="bulle relative mr-2">
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
                <div className="category-content mt-4 overflow-scroll">

                    {
                        <div className="pb-8">
                            {
                                types.map(function(el, index) {
                                    return <div key={index} className="pb-4">
                                        <h2 className="text-lg font-semibold mb-2 uppercase">{el}</h2>
                                        <CardOrderContainer types={el} categoriesFoods={props.categoriesFoods}/>
                                    </div>
                                })
                            }
                        </div>
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
                    bottom: -20px;
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
                
            `}</style>
        </div>
    )
}