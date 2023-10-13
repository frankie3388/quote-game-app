import { NavLink, Link } from 'react-router-dom';
import SearchQuote from './SearchQuote';


export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink className="nav1" to="/">Home</NavLink>
            <Link className="nav1" to="/gamepage">Game Page</Link>
            <SearchQuote />

        </nav>
    )
}