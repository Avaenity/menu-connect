import CardOrder from '../components/CardOrder'
import { useRouter } from 'next/router'

export default function CardOrderContainer(props) {


    const router = useRouter()
    const category = router.query["category"]

    //get items
    const items = []
    const getTypes = props.categoriesFoods.map(function(el, index) {
        if (Object.keys(el) == category){
            //items
            for (let i = 0; i < props.categoriesFoods[index][category].length; i++){
                items.push(props.categoriesFoods[index][category][i])
            }
        }
    })

    let itemfiltered =  items.filter(function(hero) {
        return hero.type == props.types;
    });

    return (
        <div className="card-container">
            {
                itemfiltered.map(function(el, i){
                    return <CardOrder infoItem={el} key={i}/>
                })
            }
            <style jsx>{`
            `}</style>
        </div>
    )
}