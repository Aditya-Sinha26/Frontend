import React, { useState } from 'react';
import {Card, CardBody,CardImg,Button} from 'reactstrap';
import './Feed.css';

const RenderCard=(props)=>{

    const [like,setLike]=useState(false);
    const [save,setSave]=useState(false);

    const handleLike=()=>{
        setLike(!like);
    }

    const handleSave=()=>{
        setSave(!save);
    }

    return(
        <div className="container mt-4">
            <div className="row justify-content-center">
                <Card className="col-md-6 detailCard mt-auto" style={{padding: 0, borderRadius:"1rem"}}>
                    <CardImg src={props.img_src} style={{borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}/>
                    <CardBody>
                        <div className="row">
                            <div className="col-1">
                                {like?
                                    <i className="fa fa-heart fa-2x img-like" aria-hidden="true" onClick={handleLike} style={{color:"red"}}></i>
                                    :
                                    <i className="fa fa-heart-o fa-2x img-like" aria-hidden="true" onClick={handleLike}></i>
                                }
                            </div>
                            <div className="col-9">
                                <center>
                                    <span style={{ fontSize: "1.5rem"}}>{' '}{props.author}</span>
                                </center>
                            </div>
                            <div className="col-2">
                                <center>
                                    {save?
                                        <button type="button" className="btn btn-dark" style={{borderBottomRightRadius: "1rem"}} onClick={handleSave}>Save</button>
                                        :
                                        <button type="button" className="btn btn-outline-dark" style={{borderBottomRightRadius: "1rem"}} onClick={handleSave}>Save</button>
                                    }
                                </center>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default RenderCard;