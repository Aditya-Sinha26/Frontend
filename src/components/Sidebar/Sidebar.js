import "./Sidebar.css";
import { NavLink} from "react-router-dom"
import { useContext } from "react";
import AuthContext from "../../store/context/auth";
// import { logout } from "../Auth/utility";

const Sidebar = (props) => {
    
    let classes = "container bg-blue sidebar"
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
            <button onClick={props.toggle} type="button" className="close text-white cross">
            <i class="fas fa-times"></i>
            </button>
            <p className="text-light h4 logo">Instagram</p>
            <ul className="list-group list-group-flush ">
                <NavLink to={`/profile/${localStorage.getItem('username')}`} 
                    onClick={props.toggle}
                    className="list-group-item text-decoration-none border-0 bg-blue text-light"
                    activeClassName="bg-white text-dark rounded" >Profile</NavLink>
                <NavLink to="/feed" 
                    onClick={props.toggle}
                    className="list-group-item text-decoration-none bg-blue border-0 text-light"
                    activeClassName="bg-white text-dark rounded" >Feed</NavLink>
                <NavLink to="/saved" 
                    onClick={props.toggle}
                    className="list-group-item text-decoration-none bg-blue border-0 text-light"
                    activeClassName="bg-white text-dark rounded" >Saved</NavLink>
                <a href="/" 
                    // onClick={(event) => {props.toggle();logout(event, authDispatch)}}
                    className="list-group-item text-decoration-none bg-blue text-light">Logout</a>
            </ul>
        </div>
        </>
    )
}

export default Sidebar;