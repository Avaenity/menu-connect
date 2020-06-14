import CardOrderContainer from '../components/CardOrderContainer'
import { useRouter } from 'next/router'


export default function Category (props) {
    const router = useRouter()
    const category = router.query["category"]

    //get types
    const types = []
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
        <div className="hero relative">
            <div className="container pt-16 px-10">
                <h1 className="text-xl text-center font-sans font-semibold font-thin pb-4 uppercase">{category}</h1>
                <div className="info-bulle flex flex-row mt-4">
                    <div className="bulle relative mr-2">
                        <div className="w-4 h-4 rounded-full bg-gray-500 text-center relative">
                        <span className="absolute transform -translate-x-1/2 text-xs text-white font-semibold">i</span>
                        </div>
                    </div>
                    <ul>
                        <li className="text-xs text-gray-500">Glissez à gauche pour ajouter un plat</li>
                        <li className="text-xs text-gray-500">Glissez à droite pour le retirer </li>
                    </ul>
                </div>
                <div className="order-content mt-4 flex flex-col">
                    {
                        types.map(function(el, index) {
                            return <div key={index}>
                                <h2 className="text-base font-semibold mb-2 uppercase">{el}</h2>
                                <CardOrderContainer types={el} categoriesFoods={props.categoriesFoods}/>
                            </div>
                        })
                    }
                </div>
            </div>
            <style jsx>{`
                
            `}</style>
        </div>
    )
}