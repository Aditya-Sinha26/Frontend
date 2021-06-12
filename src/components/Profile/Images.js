import "./Images.css";
import React from "react";

const images = ({posts}) => {



    return(
        <div className="container mx-auto mt-4" style={{width:"100%"}}>
            <div className="row justify-content-start mx-auto">
            {posts.map((post, index) => (
                <div key={index} className="col-4 p-0 mt-4">
                    <img className="post" src={post.url} alt="" />
                </div>
            ))}
            </div>
        </div>
    ); 
}

export default images;