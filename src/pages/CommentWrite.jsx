import axios from 'axios';
import React, { useContext, useState} from 'react'
import {AuthContext} from '../context/AuthContext'
import Wysiwyg2 from '../components/Wysiwyg2'
import { Container, Row, Col } from 'react-bootstrap';

const CommentWrite = ({postId, post}) => {
  const {user} = useContext(AuthContext);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentData = {
      postId: postId,
      username: user.name, 
      useremail: user.email,
      social: user.social,
      comment
    }
    console.log(commentData);
    try{
      await axios.post('http://localhost:8080/api/posts/comment', commentData, {
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      alert("정상적으로 코멘트가 저장되었습니다.");
    }catch(error){
      console.error('에러가 발생했습니다.', error);
      alert("댓글을 쓰는 도중 에러가 발생했습니다.");
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <Row className="mt-5">
        <Col md="2" className="text-end">이름</Col>
        <Col md="10">
           {user.name}
        </Col>    

        <Col md='2' className="mt-3 text-end">내용</Col>
        <Col md="10" className="mt-3 coment-wysiwyg">
           <Wysiwyg2 content={comment}
                    setContent={setComment}
           />         
        </Col> 
      </Row>
      <div className="text-center mt-5">
          <button type="submit" className="btn btn-primary">저장</button>
      </div>
      </form>
    </Container>
  )
}

export default CommentWrite