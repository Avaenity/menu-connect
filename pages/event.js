import CardEvent from '../components/CardEvent'

export default function Event() {
  
  

    return (
      <div className="main-content">
        <div className="content-container pt-16 px-10">
          <img className="logo-banner w-24 mx-auto mb-4" src="/logo.png" />
          <div className="pb-8">
            <h2 className="text-xl font-sans font-semibold font-thin pt-6 pb-4 uppercase">juin 2020</h2>
              <CardEvent />
              <CardEvent />
              <CardEvent />
              <CardEvent />
            <h2 className="text-xl font-sans font-semibold font-thin pt-6 pb-4 uppercase">Juillet 2020</h2>
              <CardEvent />
              <CardEvent />
              <CardEvent />
              <CardEvent />
          </div>
        </div>
      </div>
    )
  }
  