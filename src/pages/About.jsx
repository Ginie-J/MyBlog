import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';



const About = () => {
  const [myskills, setMyskills] = useState();
  const fetchMyskills = async() => {
    try{
      const response = await axios.get("/api/myskills");
      setMyskills(response.data);
    }catch(error){
      console.error("데이터를 가져오는 중 문제가 발생했습니다.", error);
    }
  }
  useEffect(()=>{
    fetchMyskills();
  }, []);
  return (
    <Container>
      <Row>
        <Col md="12" className='position-relative about-box'>
          <img src="../../public/images/aboutBackground.jpg" alt="" className='backImg' />
          <div className='gray-box'></div>
            <div className='text-box'>
              <h1>Ginie.J's About</h1>
              <h3>Who is Ginie.J?</h3>
            </div>
        </Col>
        <Col md="3" className='gcolor'>
          <h2>My Skills</h2>
          {
                myskills.map((item, i)=>(
                  <div key={i} className="progress-box">
                      <h3 className="progress-title">{item.name}</h3>
                      <div className="progress">
                          <div className="progress-bar" style={{width:`${item.value}%`}}>
                              <div className="progress-value">
                                   {item.value}%
                              </div>
                          </div>
                      </div>
                  </div>  
                ))
             }
          <h2>Timeline</h2>
            {myTimeLine.map((tl)=>(
              <div key={tl.id} className='timeline-card'>
                <h6>{tl.jobtitle}</h6>
                <p>{tl.where}<span className='tl-date'>{tl.date}</span></p>
              </div>
            ))}
        </Col>
        <Col md="9">
             <div className='about-me'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed urna blandit, efficitur erat non, tristique risus. Aliquam nec rhoncus turpis. Vivamus lacinia, lacus fermentum viverra lacinia, nibh lectus fringilla risus, sed luctus risus nisi sit amet enim. Nullam erat urna, fermentum non pellentesque nec, scelerisque vitae lacus. Fusce mi lacus, elementum ac aliquet id, imperdiet sit amet ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus posuere pretium ullamcorper.
    Integer dignissim pharetra aliquet. Sed malesuada augue id tortor molestie sagittis. Duis ac augue faucibus, volutpat dolor et, suscipit nibh. Aliquam bibendum faucibus elit. Cras sed metus leo. Aliquam at leo et quam ultrices accumsan. Nam ornare iaculis fermentum. Sed rutrum scelerisque venenatis.
              </p>
             </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About