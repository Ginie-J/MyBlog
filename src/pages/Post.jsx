import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { boxShadow, padding16, borders } from '../style/style'

const Post = () => {
  const [posts, setPosts] = useState([]);
    useEffect(()=>{
      axios.get('/api/posts')
            .then(response => {
              setPosts(response.data);
            })
            .catch(error=>console.error(error))
    }, []);
   
  //이미지 태그 제거
  const removeImgTags = (content) =>{
    return content.replace(/<img[^>]*>/g, '');
  }
  
  //날짜 형식 포맷
  const formatDate = (dt)=>{
    const date = new Date(dt);
    return format(date, 'yyyy년 MM월 dd일 EEEE a h:m', {locale: ko});
  }
  const formatDate2 = (dt)=>{
    const date = new Date(dt);
    return format(date, "MM월 dd일 EEEE a h", { locale: ko });
  
  }
  return (
    <Container style={{...boxShadow, ...padding16, ...borders}}>
       <Row className='mt-4'>
       {
        posts.map((post, index)=>(
          <Col md="12" key={index}>
            {
              post.firstImg && (
                <Link to={`/view/${post.post}`}>
                  <Image src={`upload/images/${post.ntime}/${post.firstImg}`} fluid alt={post.title} />
                </Link>
              )
            }
            <div className='post-text-box'>
              <div className='post-event'>
                <span className='bold mx-4'> <FcLike /> {post.empathy} </span>
                <span className='bold text-danger mx-4'><FcApproval /> {post.hit} </span>
                <span> <FcCalendar /> {formatDate(post.createDate)}</span>
              </div>
            </div>
            <Link to={`/view/${post.post}`}><h3>{post.title}</h3></Link>
            <div dangerouslySetInnerHTML={{__html: removeImgTags(post.content)}}></div>
          </Col>
          ))
      }
        </Row>
    </Container>
  )
}

export default Post