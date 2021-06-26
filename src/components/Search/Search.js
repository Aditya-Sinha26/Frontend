import Avatar from '@material-ui/core/Avatar';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

const Search = (props) => {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const timer = setTimeout(() => {
            axios.post('/user/find', { query: search })
                .then(res => setUsers(res.data))
                .catch(err => console.log(err))
        }, 300);
        return () => clearTimeout(timer);
    }, [search])

    return (
        <div style={{marginTop: '100px'}}>
            <input type="search" placeholder="Search" style={{maxWidth: '500px'}} onChange={(event) => setSearch(event.target.value)} className="mx-auto form-control" id="inputPassword" />
            <div className="mx-auto " style={{maxWidth: '500px'}}>
                {users.map(user => (
                    <div
                        className="d-flex p-4 bg-white my-3 rounded shadow"
                        onClick={() => history.push(`/profile/${user.username}`)}
                    >
                        <Avatar aria-label="recipe" src={user.profileImg}>
                            {user.name[0]}
                        </Avatar>
                        <span className="ml-5" style={{lineHeight:"0.8"}}>
                        <p style={{fontSize:"18px",fontWeight:"bold",textAlign:"left"}}>{user.username}</p>
                        <p style={{textAlign:"left"}}>{user.name}</p>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;