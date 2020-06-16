import { string,bool,func } from 'prop-types';
import TabNav from './TabNav';
import Nav from './Nav';
import Menu from '../components/Menu';

export default function Layout(props) {
    return (
        <div className="Layout" >
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
        </div>
    )
}