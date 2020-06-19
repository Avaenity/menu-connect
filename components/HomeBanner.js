export default function HomeBanner({searchOpen, setSearchOpen}) {
    
    return (
        <div className={`home-banner relative h-48 bg-cover bg-cover bg-no-repeat${searchOpen ? ' search-open' : ''}`}>
            <div className="content-container absolute h-full w-full z-1 flex flex-col justify-center content-center">
                <img className="logo-banner w-20 self-center mb-2" src="/logo.png" />
                <h1 className="text-white text-2xl font-sans font-thin self-center">BIENVENUE</h1>
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
                left:0;
                z-index: 0;
                background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
            }
            .home-banner:after {
                position: absolute;
                content:"";
                height:100%;
                width:100%;
                top:0;
                left:0;
                opacity: 0;
                z-index: 1;
                background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.65) 100%);
                transition: opacity 0.4s ease-in-out;
            }
            .home-banner.search-open:after {
                opacity: 1;
            }
        `}</style>
        </div>
    )
}
