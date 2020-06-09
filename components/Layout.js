import { func,bool } from 'prop-types';
import Tapbar from './Tapbar'

export default function Layout(props) {

    return (
        <div className="Layout" >
            {props.children}
            <Tapbar open={props.open}/>
        </div>
    )
}
Layout.propTypes = {
    open: bool.isRequired
};