import React,{useState,useEffect} from 'react';
import axios from '../../axios';
import InfiniteScroll from "react-infinite-scroll-component";
import RenderCard from './CardComponent';
import './Feed.css';
import ImageCard from "../ImageCard/ImageCard"
import { useRef } from 'react';

const baseUrl='https://picsum.photos/v2/list?page=';

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
                page, limit: 3
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
          loader={<span className="fa fa-spinner fa-pulse fa-3x fa-fw load" style={{color: "#010067"}}></span>}
        >
           { list.map((res,i)=>{
                return(
                    <ImageCard 
                        key={i}
                        img_src={res.post.url} 
                        author={res.user.username} 
                        profile_img={res.user.profileImg}
                        date={res.post.date}
                        likes={res.post.likes} 
                        caption={res.post.caption}
                        postId={res.post['_id']}
                    />
                );
            })}
            </InfiniteScroll>
        );
}

export default Display;