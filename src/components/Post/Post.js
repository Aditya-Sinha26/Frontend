import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import ImageCard from "../ImageCard/ImageCard";
import axios from '../../axios';
import './Post.css'
import Comments from '../Comments/Comments';

const Post = () => {
    const [post, setPost] = useState({ comments: []});
    const { id } = useParams();

    const update = () => {
        axios.post('/post/get', { postId: id, username: localStorage.getItem('username') })
            .then((res) => {
                setPost(res.data.post[0]);
            })
    }

    useEffect(() => {
        update();
    }, [])

    return (
        <div className="d-flex flex-column flex-md-row justify-content-center" style={{ marginTop: '100px' }}>
        <center>
        <div className="post12  mx-0">
            <ImageCard
                img_src={post.url} 
                author={post.author} 
                profile_img={post.profileImg}
                date={post.date}
                likes={post.totalLikes} 
                caption={post.caption}
                postId={post['_id']}
                hasLiked={post.hasLiked}/>
             </div></center>
             <Comments
                comments={post.comments}
                postId={post['_id']}
                update={update}
              />
        </div>
    );
}

export default Post;