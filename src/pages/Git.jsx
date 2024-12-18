import {React, useState, useEffect} from 'react'
import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import axios from 'axios';
import api from '../components/git'

const Git = () => {
    const [repo, setRepo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [languages, setLanguages] = useState([]);
    //git repository 가져오기
    const getRepos = async() => {
        setLoading(true);
        setError(null);
        try{
            const res = await api.get("/users/Ginie-J/repos")
           //const res = await axios.get('https://api.github.com/users/Ginie-J/repos');
           setRepo(res.data);
           //언어목록 추출
           const langs = Array.from(new Set(res.data.map((repo)=>repo.language).filter(Boolean)));
           console.log(langs);
           setLanguages(langs);
        }catch(err){
            setError("repository를 가져오는 도중 에러가 발생했습니다");
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        getRepos();
    }, []);
  return (
    <Container>
        <Row>
            <Col>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error &&(
                    <Container>
                        <Tabs defaultActiveKey={"all"}>
                            <Tab eventKey={'all'} title='ALL'>
                                <Row className='pt-5'>
                                    <Col md='3'>
                                        <a href='#' className='repobox'></a>
                                    </Col>
                                    <Col md='3'></Col>
                                    <Col md='3'></Col>
                                    <Col md='3'></Col>
                                </Row>
                            </Tab>
                            <Tab eventKey={'html'} title='HTML'></Tab>
                            <Tab eventKey={'java'} title='JAVA'></Tab>
                        </Tabs>
                    </Container>
                    
                )}
                <ul>
                    {repo.map((r)=>(
                        <li key={r.id}>
                            <a href={r.html_url} target='blank'>{r.name}</a>
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
    </Container> 
  )
}

export default Git