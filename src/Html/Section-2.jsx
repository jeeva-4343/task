import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import digital2 from '../images/Section-2.png';
import '../Css/Section-2.css';
import { TiArrowForward } from "react-icons/ti";

function Services() {
    return (
        <Container fluid className="Service-container">
            <Row className='service-row'>
                <Col lg={6} md={10} xs={12} className='order-md-0 order-lg-1'>
                    <div className="Service-second-div">
                        <Row>
                            <div className="Service-lg-text">It's helpful for operating system</div>
                        </Row>
                        <Row>
                            <Col xs={1} lg={1} className="Section-2-icon-margin">
                                <TiArrowForward size={35} color="orange" />
                            </Col>
                            <Col>
                                <div className="Service-md-text">Ultra fast & Secure</div>
                                <div className="Service-sm-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam necessitatis corrupti aliquid non repellat consequatur sequi!</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={1} lg={1} className="Section-2-icon-margin">
                                <TiArrowForward size={35} color="green"/>
                            </Col>
                            <Col>
                                <div className="Service-md-text">Allow Customization</div>
                                <div className="Service-sm-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam necessitatis corrupti aliquid non repellat consequatur sequi!</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={1} lg={1} className="Section-2-icon-margin">
                                <TiArrowForward size={35} color="blue"/>
                            </Col>
                            <Col>
                                <div className="Service-md-text">Smart Contract</div>
                                <div className="Service-sm-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam necessitatis corrupti aliquid non repellat consequatur sequi!</div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={6} md={10} xs={12} className='order-md-1 order-lg-0 Section-2-img'>
                    <div className='hero-second-div service-img'>
                        <img src={digital2} alt='' className="img-fluid" /> {/* Add img-fluid class for responsive image */}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;
