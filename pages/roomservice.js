import CardIllus from '../components/CardIllus'

export default function RoomService() {
	
	

	return (
		<div className="main-content">
			<div className="container pt-16 px-10">
				<h1 className="text-xl text-center font-sans font-semibold font-thin pb-8 uppercase">service en chambre</h1>
				<div className="grid grid-flow-row grid-cols-2 gap-4">
					<CardIllus />
					<CardIllus />
					<CardIllus />
					<CardIllus />
					<CardIllus />
					<CardIllus />
					<CardIllus />
				</div>
			</div>
			<style jsx>{`
			
			`}</style>
		</div>
	)
}
