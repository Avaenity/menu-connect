export default function HomeBanner() {

    return (
        <div className="home-banner relative h-56 bg-cover bg-cover bg-no-repeat">
            <div className="content-container absolute h-full w-full z-1 flex flex-col justify-center content-center">
                <img className="logo-banner w-24 self-center mb-2" src="/logo.png" />
                <h1 className="text-white text-3xl font-sans font-thin self-center">BIENVENUE</h1>
            </div>
            <style jsx>{`
            .home-banner {
                background-image: url("/rest-photo.jpg");
            }
            .home-banner:before {
                position: absolute;
                content:"";
                height:100%;
                width:100%;
                top:0;
                left:1;
                z-index: 0;
                background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C */
            }
        `}</style>
        </div>
    )
}
