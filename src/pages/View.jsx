import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react'
import { Container, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import CommentWrite from './CommentWrite';
import login from './login';

const View = () => {
    const {isAuthenticated, user, login, logout} = useContext(AuthContext);
    const {post} = useParams();
    const [data, setData] = useState();
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/posts/${post}`)
        .then(res => {
            setData(res.data);
            console.dir(res.data);
        })
        .catch(error => console.error(error))
    }, [post]);

    useEffect(()=>{
        //data 로드 완료 후
        if(data && data.id){
            axios.get(`http://localhost:8080/api/posts/comment/${data.id}`)
            .then(res => {
                setComments(res.data);
                console.dir(res.data);
            })
            .catch(error => console.error(error));
        }
    }, [data]);

    if(!data){
        return <p>loading...</p>
    }
  return (
    <Container>
        <h3>{data.title}</h3>
        <div dangerouslySetInnerHTML={{__html: data.content}}></div>
        <br />
        <ListGroup>
        {
            comments.map((ct, index)=>(
                <ListGroup.Item key={index}>
                    {ct.comment}[{ct.username}]
                    <br />
                    {ct.createDate}
                    <button>삭제</button>
                </ListGroup.Item>
            ))
        }
        </ListGroup>
        {
            isAuthenticated ? <CommentWrite postId={data.id} post={post} /> : <login />
        }
    </Container>
  )
}

export default View