import Container from 'react-bootstrap/Container';
import '../Css/Section-3.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { RiFileCodeLine } from "react-icons/ri";
import { MdArrowForward } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import { PiFileLockDuotone } from "react-icons/pi";
import { MdOutlineContactSupport } from "react-icons/md";


function  Section3() {
    return (
        <Container fluid className='Section-3-container'>
            <Row>
                <div className='Section3-head'>We Provides Best Features <div>for Customers</div> </div>
            </Row>
            <Row className='section3-card-row justify-content-center'> {/* Center the card row */}
                <Col lg={3} xl={2} md={5} className='mb-4'> {/* Adjust the column size for responsiveness */}
                    <Card className='card-main-same'>
                        <div className='icon-circle-div'><RiFileCodeLine className='icon-circle' style={{ backgroundColor: '#f9e9e9', color: '#9e1c1a' }} size={100} /></div>
                        <div class="wave-container">
                            <Card.Body className='card-body crd-body'>
                              
                                <Card.Title className='Section-3-crd-tittle'>Clean Code</Card.Title>
                                <div className='Service-sm-text'>
                                    Some quick example text to build on the card title .
                                </div>
                                <a href='#1'><div className='icon-circle-div' ><MdArrowForward className='card-icon-circle' size={40} /></div></a>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col lg={3} xl={2} md={5} className='mb-4'>
                    <Card className='card-main-same'>
                        <div className='icon-circle-div'><BsClipboardData className='icon-circle' style={{ backgroundColor: '#f8f1e7', color: '#9a5d28' }} size={100} /></div>
                        <div class="wave-container">
                            <Card.Body className='card-body crd-body'>
                                <Card.Title className='Section-3-crd-tittle'>Data Analytic</Card.Title>
                                <div className='Service-sm-text'>
                                    Some quick example text to build on the card .
                                </div>
                                <a href='#4'><div className='icon-circle-div' ><MdArrowForward className='card-icon-circle' size={40} /></div></a>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col lg={3} xl={2} md={5} className='mb-4'>
                    <Card className='card-main-same'>
                        <div className='icon-circle-div'><PiFileLockDuotone className='icon-circle' style={{ backgroundColor: '#e7f6f6', color: '#5a939f' }} size={100} /></div>
                        <div class="wave-container">
                            <Card.Body className='card-body crd-body'>
                                <Card.Title className='Section-3-crd-tittle'>Full Secured</Card.Title>
                                <div className='Service-sm-text'>
                                    Some quick example text to build on the card title .
                                </div>
                                <a href='#5'><div className='icon-circle-div' ><MdArrowForward className='card-icon-circle' size={40} /></div></a>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col lg={3} xl={2} md={5} className='mb-4'>
                    <Card className='card-main-same'>
                        <div className='icon-circle-div'><MdOutlineContactSupport className='icon-circle' style={{ backgroundColor: '#f4e7f7', color: '#c739d7' }} size={100} /></div>
                        <div class="wave-container">
                            <Card.Body className='card-body crd-body'>
                                <Card.Title className='Section-3-crd-tittle'>24/7 Secured</Card.Title>
                                <div className='Service-sm-text'>
                                    Some quick example text to build on the card title .
                                </div>
                                <a href='2'><div className='icon-circle-div' ><MdArrowForward className='card-icon-circle' size={40} /></div></a>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default Section3;
