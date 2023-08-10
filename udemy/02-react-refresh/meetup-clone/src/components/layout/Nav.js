import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <div>
                [MC]
            </div>
            <nav>
                <ul>
                    <li className="button">
                        <Link to='/'>Meetups</Link>
                    </li>
                    <li className="button">
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li className="button">
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;