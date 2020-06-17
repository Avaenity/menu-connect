import { string,bool,func } from 'prop-types';
import TabNav from './TabNav';
import Nav from './Nav';
import Menu from '../components/Menu';

import Div100vh from 'react-div-100vh'

export default function Layout(props) {
    return (
        
        //overflow hidden on 100vh prevent scrolling
		<Div100vh className="overflow-hidden">
            <Nav menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>
            <Menu 
                menuOpen={props.menuOpen}
                setMenuOpen={props.setMenuOpen}
                categoriesFoods={props.categoriesFoods}
                categoriesServices={props.categoriesServices}
                categoriesEvents={props.categoriesEvents}
                infosRestaurant={props.infosRestaurant}
            />
            {props.children}
        </Div100vh>
    )
}