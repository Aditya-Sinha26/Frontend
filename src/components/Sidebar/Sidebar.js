import "./Sidebar.css";
import { NavLink} from "react-router-dom"
import { useContext } from "react";
import AuthContext from "../../store/context/auth";
// import { logout } from "../Auth/utility";

const Sidebar = (props) => {
    
    let classes = "container bg-primary sidebar"
    if(props.show){
        classes = classes + " slide";
    }

    let backdrop = "backdrop";

    if(props.show){
        backdrop = backdrop + " show";
    }


    return(
        <>
        <div className={backdrop} onClick={props.toggle} />
        <div className={classes}>
            <button onClick={props.toggle} type="button" className="close cross">
                <span className="text-white">&times;</span>
            </button>
            <p className="text-light h4 logo">Zwiggy</p>
            <ul className="list-group list-group-flush ">
                <NavLink to="stores" 
                    onClick={props.toggle}
                    className="list-group-item bg-primary text-light"
                    activeClassName="bg-warning text-dark rounded" >Stores</NavLink>
                <NavLink to="cart" 
                    onClick={props.toggle}
                    className="list-group-item bg-primary text-light"
                    activeClassName="bg-warning text-dark rounded" >Cart</NavLink>
                <NavLink to="orders" 
                    onClick={props.toggle}
                    className="list-group-item bg-primary text-light"
                    activeClassName="bg-warning text-dark rounded" >Orders</NavLink>
                <a href="/" 
                    // onClick={(event) => {props.toggle();logout(event, authDispatch)}}
                    className="list-group-item bg-primary text-light">Logout</a>
            </ul>
        </div>
        </>
    )
}

export default Sidebar;