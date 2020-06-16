export default function Welcome() {
	
	//TODO: create stuff to grab html from GSheet

	return (
		<div className="main-content h-full relative">
			<div className="main-container h-full pt-16 px-10">
				<div className="hero">
					<img className="logo-banner w-24 mx-auto mb-4" src="/logo.png" />
				</div>
				<div className="category-content overflow-scroll">
					<div className="pb-8">
						<h2 className="text-xl font-sans font-semibold font-thin pb-4">BIENVENUE CHEZ LE PATIO</h2>
						<p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque leo in libero dictum elementum. Proin et pulvinar eros. Integer sed lacinia augue. Nunc mattis elit et quam tristique interdum. Donec maximus hendrerit tellus eget porttitor. Aliquam sit amet leo id ante lobortis ornare. Aenean porttitor, elit vel eleifend volutpat, tellus lacus cursus odio, et efficitur nunc massa ut nunc.</p>
					</div>
					<div className="pb-8">
						<h2 className="text-xl font-sans font-semibold font-thin pb-4">NOS VALEURS</h2>
						<img className="logo-banner mb-16" src="/rest-photo2.jpg" />
						<p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque leo in libero dictum elementum. Proin et pulvinar eros. Integer sed lacinia augue. Nunc mattis elit et quam tristique interdum. Donec maximus hendrerit tellus eget porttitor. Aliquam sit amet leo id ante lobortis ornare. Aenean porttitor, elit vel eleifend volutpat, tellus lacus cursus odio, et efficitur nunc massa ut nunc.</p>
					</div>
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
			`}</style>
		</div>
	)
}
