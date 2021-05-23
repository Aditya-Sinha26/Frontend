import { useContext } from "react";
import {NavLink} from "react-router-dom";
import AuthContext from "../../store/context/auth";
// import { logout } from "../Auth/utility";
import "./Navbar.css"

const Navbar = (props) => {

    const {state:authState} = useContext(AuthContext);

    return (<nav className="navbar navbar-expand-lg fixed-top justify-content-between navbar-dark bg-blue">
                {authState.userId && <button className="navbar-toggler" onClick={props.toggle} type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>}
                <h1 className="navbar-brand h1" href="/">Zwiggy</h1>
                {authState.userId && <div className="collapse navbar-collapse justify-content-end">
                    <div className="navbar-nav">
                        <NavLink to="/profile" 
                            className="nav-item nav-link text-light" 
                            activeClassName="bg-white text-dark rounded" >Profile</NavLink>
                        <NavLink to="/feed" 
                            className="nav-item nav-link text-light"
                            activeClassName="bg-white text-dark rounded" >Feed</NavLink>
                        <NavLink to="/orders" 
                            className="nav-item nav-link text-light"
                            activeClassName="bg-warning text-dark rounded" >Orders</NavLink>
                        <a 
                            className="nav-item nav-link text-light" 
                            // onClick={(event) => logout(event, authDispatch)} 
                            href="/" type="button">Logout</a>
                    </div>
                </div>}
            </nav>);
}

export default Navbar;