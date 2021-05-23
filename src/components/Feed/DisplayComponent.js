import React,{useState,useEffect} from 'react';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import RenderCard from './CardComponent';
import './Feed.css';

const baseUrl='https://picsum.photos/v2/list?page=';

const Display=(props)=>{

    const [list,setList]=useState([]);
    //const [isLoading,setLoading]=useState(false);
    const [page,setPage]=useState(1);
    const [limit,setLimit]=useState(6);

    /*const handleScroll = () => { 
        if(window.innerHeight + window.scrollY === document.height){
            fetchMoreData();
        }
      };*/

    const fetchMoreData = () => {
        axios({
            method: 'GET',
            url: baseUrl+page+'&limit='+limit
        })
        .then(res=>{
                setList([...list,...res.data]);
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
          hasMore={true}
          loader={<span className="fa fa-spinner fa-pulse fa-3x fa-fw load" style={{color: "#010067"}}></span>}
        >
           { list.map((res,i)=>{
                return(
                    <RenderCard key={i} img_src={res.download_url} author={res.author} link={res.url}/>
                );
            })}
            </InfiniteScroll>
        );
}

export default Display;