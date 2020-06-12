export default function Item () {
    return (
        <div className="hero relative">
            <div className="item-illus bg-cover bg-center bg-no-repeat relative"></div>
            <div className="relative w-full">
                <div className="title-item absolute font-semibold z-20 text-2xl text-white">Service de pressing</div>
                <div className="illus-content rounded-lg absolute z-10 bg-white shadow-md overflow-scroll text-base px-4 py-8"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare ac purus id varius. Suspendisse aliquam mi vel est tincidunt, vel cursus quam dapibus. Maecenas lectus neque, posuere vel elit nec, iaculis gravida orci. Sed dapibus arcu ipsum, sit amet mattis sapien consectetur sit amet. Nullam nec quam quis erat dignissim rutrum quis sit amet elit. Suspendisse molestie dui in justo elementum tristique et ac quam. Nullam nec quam quis erat dignissim rutrum quis sit amet elit. Suspendisse molestie dui in justo elementum tristique et ac quam.
                </div>
            </div>
            <style jsx>{`}
                .item-illus{
                    height: 50vh;
                    background-image: url('roomservice/cleaning.jpg');
                }
                .item-illus::after{
                    position: absolute;
                    content:"";
                    height:100%;
                    width:100%;
                    bottom:0;
                    left:1;
                    z-index: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
                    border-radius: 0.375rem;
                }
                .illus-content{
                    top: -8rem;
                    width: 80%;
                    left: 50%;
                    height: 50vh;
                    transform: translate(-50%);
                }
                .title-item{
                    top: -13rem;
                    left: 50%;
                    width: 80%;
                    transform: translate(-50%);
                }
            `}</style>
        </div>
    )
}