import { Link } from "react-router-dom";
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <header className={classes.header}>
            <div className='button'>
                [MC]
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li className="button mx-2">
                        <Link to='/'>Meetups</Link>
                    </li>
                    <li className="button mx-2">
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li className="button mx-2">
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;