import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import CommentWrite from './CommentWrite';
import login from './login';

const View = () => {
    const {isAuthenticated, user, login, logout} = useContext(AuthContext);
    const {post} = useParams();
    const [data, setData] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/posts/${post}`)
        .then(res => {setData(res.data)})
        .catch(error => console.error(error))
    }, [post]);

    if(!data){
        return <p>loading...</p>
    }
  return (
    <Container>
        <h3>{data.title}</h3>
        <div dangerouslySetInnerHTML={{__html: data.content}}></div>
        <br />
        {
            isAuthenticated ? <CommentWrite user={user} /> : <login />
        }
    </Container>
  )
}

export default View