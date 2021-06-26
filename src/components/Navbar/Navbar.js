import { useContext } from "react";
import {NavLink} from "react-router-dom";
import AuthContext from "../../store/context/auth";
import { logout } from "../Auth/utility";
import "./Navbar.css"

const Navbar = (props) => {

    const {state: authState, dispatch: authDispatch} = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg fixed-top justify-content-between navbar-dark bg-blue">
                {authState.isAuth && <button className="navbar-toggler" onClick={props.toggle} type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>}
                <h1 className="navbar-brand h1" href="/">Instagram</h1>
                {authState.isAuth && <div className="collapse navbar-collapse justify-content-end">
                    <div className="navbar-nav">
                        <NavLink to={`/profile/${localStorage.getItem('username')}`} 
                            className="nav-item nav-link text-light" 
                            activeClassName="bg-white text-dark rounded" >Profile</NavLink>
                        <NavLink to="/feed" 
                            className="nav-item nav-link text-light"
                            activeClassName="bg-white text-dark rounded" >Feed</NavLink>
                        <NavLink to="/search" 
                            className="nav-item nav-link text-light"
                            activeClassName="bg-white text-dark rounded" >Search</NavLink>
                        <NavLink to="/orders" 
                            className="nav-item nav-link text-light"
                            activeClassName="bg-white text-dark rounded" >Saved</NavLink>
                        <a 
                            className="nav-item nav-link text-light" 
                            onClick={(event) => logout(event, authDispatch)} 
                            href="/" type="button">Logout</a>
                    </div>
                </div>}
            </nav>
    );
}

export default Navbar;