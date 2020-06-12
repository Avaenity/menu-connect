export default function CardIllus () {
    return (
        <div className="card-illus rounded-md shadow-md h-48">
            <div className="illus bg-gray-800 h-32 rounded-t-md bg-no-repeat bg-center bg-cover"></div>
            <div className="card-title text-left p-2">
                <p className="text-xs font-semibold">Télévision et service VOD</p>
            </div>
            <style jsx>{`
                .illus{
                    background-image: url("roomservice/tv.jpg")
                }
            `}</style>
        </div>
    )
}