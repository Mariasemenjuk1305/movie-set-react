import {Link} from "react-router-dom"

function NavBar(){
    return(
        <div className="navbar">
            <div className="logo">
                <Link to="/">Movies Set</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-links">Home</Link>
                <Link to="/favorite" className="nav-links">My Favorite</Link>
            </div>
        </div>
    )
}

export default NavBar