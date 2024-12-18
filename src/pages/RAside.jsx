import React from 'react'
import { Card, CardBody, CardText, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { boxShadow, padding16, borders } from '../style/style'
import { RiKakaoTalkFill, RiInstagramFill, RiFacebookBoxFill, RiTwitterXFill } from 'react-icons/ri'


const RAside = () => {
  return (
    <>
        <Card style={[...boxShadow, ...padding16, ...borders]}>
            <CardBody>
                <CardTitle>Ginie.J</CardTitle>
                <CardText>qqqqqqqqqqqqqqqqqqqqqqqqqqqqq</CardText>
            </CardBody>
            <Row>
                <Col md={{span:6, offset:6}}>
                    <Link to="about" className='btn btn-outline-success' variant='outline-success'>자세히보기</Link>
                </Col>
            </Row>
        </Card>
        <Card style={[...boxShadow, ...padding16, ...borders]}>
            <CardTitle className="text-center">            
                <RiKakaoTalkFill className="mx-2" />
                <RiInstagramFill className="mx-2" />
                <RiFacebookBoxFill className="mx-2" onClick={facebook} />
                <RiTwitterXFill className="mx-2" />
            </CardTitle>
        </Card>
        <Card style={[...boxShadow, ...padding16, ...borders]}>
            <h4>Category</h4>
            <ul className="list-style">
                <li><Link to="post">posting</Link></li>
                <li><Link to="about">about</Link></li>
                <li><Link to="git">git</Link></li>
                <li><Link to="contact">contact</Link></li>
            </ul>
        </Card>
        <Card style={[...boxShadow, ...padding16]}>해시태그</Card>
    </>
  )
}

export default RAside