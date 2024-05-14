import Container from 'react-bootstrap/esm/Container';
import '../Css/Section-6.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
// import First from '../images/Section-6-1.jpeg'

function Testimonial(){
    return (
        <Container className='Section-6-container'>
            <Row>
               <div className='Section-6-head'>Lastest insights news</div>
            </Row>
            <Row className='Section-6-second-row'>
                <Col xl={5} lg={6} className='Section-6-col'>
                    <div className='Section-6-fst-div'>
                        <div className='Section-6-img-div'>
                        </div>
                        <div className='Section-6-content-div'>
                            <div className='Section-6-display-main'>
                                <div className='Section-6-display'>Our Creative Team</div>
                                <div className='Section-6-display'>17 June,2024</div>
                                <div className='Section-6-display'>by Stive Smithi</div>
                            </div>
                            <div className='Section-6-h2'>
                                Running remote offsites and onbordings
                            </div>
                            <div className='Section-6-h4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aliquid quaerat! Molestiae beatae placeat reiciendis quis quam recusandae ex totam, dolorem consectetur nihil porro error.
                            </div>
                            <Button variant='primary' className='Section-6-btn'>Continue</Button>
                        </div>
                    </div>
                </Col>
                <Col xl={5} lg={6} className='Section-6-col'>
                    <div className='Section-6-fst-div'>
                        <div className='Section-6-img-div-2'>
                        </div>
                        <div className='Section-6-content-div'>
                            <div className='Section-6-display-main'>
                                <div className='Section-6-display'>Create presentation</div>
                                <div className='Section-6-display'>17 June,2024</div>
                                <div className='Section-6-display'>by Thomas lews</div>
                            </div>
                            <div className='Section-6-h2'>
                                A new look & new ways to collaborate
                            </div>
                            <div className='Section-6-h4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. veritatis delectus saepe placeat reiciendis quis quam recusandae ex totam, dolorem consectetur nihil porro error.
                            </div>
                            <Button variant='primary' className='Section-6-btn'>Continue</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Testimonial