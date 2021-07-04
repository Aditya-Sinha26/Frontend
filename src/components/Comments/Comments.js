import { useState } from 'react';
import './Comments.css';
import axios from '../../axios';

const Comments = (props) => {
    const [comment, setComment] = useState('');

    const addComment = (event) =>{
        event.preventDefault();
        axios.post('/comment/add', { postId: props.postId, data: comment, hostId: localStorage.getItem('username') })
        .then(() => {
            setComment('')
            props.update()
        })
    }

    const parseDate = (data) =>{
        const date = new Date(data);
        const time = date.toLocaleTimeString('en-US')
        const index = date.getMonth();
        var month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        var str = month[index] +' '+ date.getDate() +', '+ date.getFullYear()+' '+time;
        return str;
      }
    
    return (
        <center style={{maxHeight: '587px'}}>
        <div className="comments round d-flex justify-content-between flex-column text-start bg-white p-4 shadow">
            <div>
            {props.comments.map(comment => (
                <>
                    <span className="fw-bold">{comment.author}</span>
                    <span className="ml-2">{comment.comment}</span>
                    <p className="fw-light" style={{fontSize: '12px'}}>{parseDate(comment.time)}</p>
                </>
            ))}</div>
            <div className="d-flex mx-auto mt-3 flex-row">
                <input 
                    type="text" 
                    class="form-control my-0" 
                    placeholder="Add a Comment..."
                    value={comment}
                    onChange={(event) => setComment(event.target.value)} /> 
                <button 
                    className="btn btn-primary mx-2 my-0"
                    onClick={(event) => addComment(event)}>Post</button>       
            </div>
        </div></center>
    )
}

export default Comments;