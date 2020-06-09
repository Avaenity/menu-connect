import Tapbar from './Tapbar'
export default function Layout(props) {

    return (
        <div className="Layout" >
            {props.children}
            <Tapbar />
        </div>
    )
}
