import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navibar from './Navbar';
import '../Css/Hero.css';
import hero from '../images/hero.png'
import Services from './Section-2';
import Section3 from './Section-3';
import Customer from './Section-4';
import Pricing from './Section-5';
import Testimonial from './Section-6';
import Footer from './Footer';
function Hero() {
    return(
        <>
            <Container fluid className='Hero-container'>
                <Navibar/>
                <Row className='hero-row'>
                    <Col xl={4} lg={4} md={6} sm={10}>
                        <div className='hero-div '>
                            <div className='second-text hero-main-text space'>
                                Codext one of the best system in SAAS.
                            </div>
                            <div className='third-text space'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Officia fugiat, praesentium odit alias sit adipisci culpa.praesentium odit alias sit . 
                            </div>
                            <div className='space'>
                                <Button>Try A Live Demo</Button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={5} lg={7} md={6} sm={10}>
                        <div className='hero-second-divv'>
                            <img src={hero} alt='' />

                        </div>
                    </Col>
                </Row>

            </Container>
            <Services/>
            <Section3/>
            <Customer/>
            <Pricing/>
            <Testimonial/>
            <Footer/>
            
        </>
    );
}
export default Hero