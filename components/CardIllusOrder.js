import Link from 'next/link'

export default function CardIllusOrder (props) {

    const illuCard = {
        streaming: "roomservice/tv.jpg",
        taxi: "roomservice/taxi.jpg",
        minibar: "roomservice/bar.jpg",
        pressing: "roomservice/cleaning.jpg",
        health: "roomservice/health.jpg",
        roomservice: "roomservice/breakfast.jpg",
        sightseeing: "roomservice/sightseeing.jpg"
    }

    return (
        <Link href="/services/[serviceItem]" as={`/services/${props.item.id}`}>
            <div className="card-illus rounded-md shadow-md h-48">
                <div className="illus bg-gray-800 h-32 rounded-t-md bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url(" + illuCard[props.item.type] + ")"}}></div>
                <div className="card-title text-left p-4">
                    <p className="text-xs font-semibold">{props.item.nom}</p>
                </div>
                <style jsx>{`
                `}</style>
            </div>
        </Link>
    )
}