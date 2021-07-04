import "./Images.css";
import React from "react";
import { useHistory } from "react-router-dom";

const Images = ({posts}) => {
    const history = useHistory()


    return(
        <div className="container mx-auto mt-4" style={{width:"100%"}}>
            <div className="row justify-content-start mx-auto">
            {posts.map((post, index) => (
                <div key={index} onClick={() => history.push(`/post/${post["_id"]}`)} className="col-4 p-0 mt-4">
                    <img className="post" src={post.url} alt="" />
                </div>
            ))}
            </div>
        </div>
    ); 
}

export default Images;