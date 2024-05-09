import Container from 'react-bootstrap/esm/Container';
import '../Css/Section-4.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdOutlineToggleOff } from "react-icons/md";


function Customer(){
    return(
        <Container fluid className='Section-4-Container'>
            <Row className='Section-2-First-row'>
                <div className='Section-4-head'>Choose your best pricing plan</div>
                <div className='Section-4-Sub-head'>Added for Monthly  <MdOutlineToggleOff size={70} className='Section-4-tab-icon' />Yearly</div>
            </Row>
            <Row className='Section-2-Second-row justify-content-center'> {/* Center the columns */}
            <Col lg={3}  xl={3} md={4} sm={8}  className='mb-4 Section-4-col'>
                
                    <Card style={{ width: '16rem' }} className='Section-4-card'>
                    <div class="wave-containerr">
                        <Card.Body className='Section-4-crd-body'>
                            <div className='Section-4-crd-head'>Start-up</div>
                            <hr></hr>
                            <div className='Section-4-mo'>$30<span className='Section-4-mo2'>/mo</span></div>
                            
                            <Card.Text className='Section-4-txt'>
                            Easy Customizable  Commercia license 5 user license Hotline support 24/7
                            </Card.Text>
                            <Button variant="primary" className='Section-4-btn'>TRY THIS PACKAGE</Button>
                        </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col lg={3}  xl={3} md={4} sm={8} className='mb-4 Section-4-col'>
                
                    <Card style={{ width: '16rem' }} className='Section-4-card'>
                    <div class="wave-containerr">
                        <Card.Body className='Section-4-crd-body'>
                            <div className='Section-4-crd-head'>Start-up</div>
                            <hr></hr>
                            <div className='Section-4-mo'>$30<span className='Section-4-mo2'>/mo</span></div>
                            
                            <Card.Text className='Section-4-txt'>
                            Easy Customizable  Commercia license 5 user license Hotline support 24/7
                            </Card.Text>
                            <Button variant="primary" className='Section-4-btn'>TRY THIS PACKAGE</Button>
                        </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col lg={3}  xl={3} md={4} sm={8} className='mb-4 Section-4-col'>
                    <Card style={{ width: '16rem' }}  className='Section-4-card'>
                    <div class="wave-containerr">
                        <Card.Body className='Section-4-crd-body'>
                            <div className='Section-4-crd-head'>Premium</div>
                            <hr></hr>
                            <div className='Section-4-mo'>$49<span className='Section-4-mo2'>/mo</span></div>
                            <Card.Text className='Section-4-txt'>
                            Easy Customizable Commercia license 10 user license Hotline support 24/7
                            </Card.Text>
                            <Button variant="primary" className='Section-4-btn'>TRY THIS PACKAGE</Button>
                        </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default Customer;
