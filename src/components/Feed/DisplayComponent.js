import React,{useState,useEffect} from 'react';
import axios from '../../axios';
import InfiniteScroll from "react-infinite-scroll-component";
import './Feed.css';
import ImageCard from "../ImageCard/ImageCard"
import { useRef } from 'react';

const Display=(props)=>{

    const [list,setList]=useState([]);
    //const [isLoading,setLoading]=useState(false);
    const [page,setPage]=useState(1);
    const hasMore = useRef(true);
    /*const handleScroll = () => { 
        if(window.innerHeight + window.scrollY === document.height){
            fetchMoreData();
        }
      };*/

    const fetchMoreData = () => {
        axios({
            method: 'Post',
            url: '/post/',
            data: {
                page, limit: 3, username: localStorage.getItem('username')
            }
        })
        .then(res=>{
                if(res.data.posts.length < 3){
                    hasMore.current = false
                }
                setList([...list,...res.data.posts]);
                setPage(page+1);
        })
        .catch(err=>{
            console.log(err.data);
        })
    }

    useEffect(()=>{
        fetchMoreData();
    },[]);


        return(
            <InfiniteScroll
          dataLength={list.length}
          next={fetchMoreData}
          hasMore={hasMore.current}
        >
           { list.map((res,i)=>{
                return(
                    <ImageCard 
                        key={i}
                        img_src={res.url} 
                        author={res.author} 
                        profile_img={res.profileImg}
                        date={res.date}
                        likes={res.totalLikes} 
                        caption={res.caption}
                        postId={res['_id']}
                        hasLiked={res.hasLiked}
                    />
                );
            })}
            {hasMore.current && <div class="spinner-grow text-primary" role="status">
            </div>}
            </InfiniteScroll>
        );
}

export default Display;