import { string,bool,func } from 'prop-types';
import TabNav from './TabNav'

export default function Layout(props) {

    return (
        <div className="Layout" >
            {props.children}
            <TabNav menuOpen={props.menuOpen} tabActive={props.tabActive} setTabActive={props.setTabActive}/>
        </div>
    )
}
Layout.propTypes = {
    menuOpen: bool.isRequired,
    tabActive: string.isRequired,
    setTabActive: func.isRequired
};