import Link from 'next/link'

export default function CardEvent (props) {

    var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    //TODO: {new Date(props.info.date).getUTCDate()+1} +1 because json from spreadsheet took of a day
    
    return (
        <Link href="/events/[eventItem]" as={`/events/${props.info.id}`}>
            <div className="card-event rounded-md bg-cover bg-center bg-no-repeat flex flex-col h-40 mb-6 relative" style={{backgroundImage: "url(/event/" + props.info.image + ")"}}>
                <div className="card-content absolute z-10 pr-10">
                    <div className="event-date text-white text-xs uppercase mb-2 relative">
                        {new Date(props.info.date).getUTCDate()+1} {months[new Date(props.info.date).getMonth()]}
                    </div>
                    <div className="title-event text-white font-semibold">
                        {props.info.nom}
                    </div>
                </div>
                
                <style jsx>{`
                    .card-event{
                        background-image: url("/event/event1.jpg")
                    }
                    .card-event::after{
                        position: absolute;
                        content:"";
                        height:100%;
                        width:100%;
                        top:0;
                        left:1;
                        z-index: 0;
                        background: linear-gradient(to top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
                        border-radius: 0.375rem;
                    }
                    .card-content{
                        bottom: 1rem;
                        left: 1rem;
                    }
                    .event-date::after{
                        position: absolute;
                        content: '';
                        bottom: -5px;
                        left: 0;
                        width: 20%;
                        height: 1px;
                        background-color: white;
                    }
                `}
                </style>
            </div>
        </Link>
    )
}