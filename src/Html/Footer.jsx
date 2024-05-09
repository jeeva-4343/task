import Container from 'react-bootstrap/esm/Container';
import '../Css/Footer.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { IoLogoXbox } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import Button from 'react-bootstrap/esm/Button';




function Footer(){
    return(
        <Container fluid className='Footer-container'>
            <Row className='Footer-row'>
                    <Col xl={3} md={6} lg={4}>
                        <div className='Footer-brand-icon-div'><IoLogoXbox size={50} className="brand-icon" />
                        <span className="brand-name text">Codext</span></div>
                        <div className='Footer-lg-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae corrupti magnam reprehenderit eveniet qui ea atque quod? illum officiis, perspiciatis, laudantium neque vitae!</div>
                        <div>
                        <CiTwitter className='Footer-icon' size={45}/>
                        <SlSocialFacebook  className='Footer-icon'size={45}/>
                        <FaInstagram  className='Footer-icon'size={45}/>
                        <SlSocialLinkedin  className='Footer-icon'size={45}/>

                        </div>
                    </Col>
                    <Col xl={2 } xs={12} md={2} lg={2}>
                        <div className='Footer-h2'>Resources</div>
                        <div className='Footer-lg-text'>Services</div>
                        <div className='Footer-lg-text'>Pricing</div>
                        <div className='Footer-lg-text'>Testimonials</div>
                        <div className='Footer-lg-text'>Blog</div>
                    </Col>
                    <Col xl={2} md={3} lg={2}>
                        <div className='Footer-h2'>Usefull links</div>
                        <div className='Footer-lg-text'>Terms of Services</div>
                        <div className='Footer-lg-text'>Privacy Policy</div>
                        <div className='Footer-lg-text'>Cookie Policy</div>
                        <div className='Footer-lg-text'>Contact Us</div>
                    </Col>
                    <Col xl={3} md={5} lg={4}>
                        <div className='Footer-h2'>Newsletter</div>
                        <div className='Footer-lg-text'>Sign up and receive the lastest news via email</div>
                        
                        <div className='Footer-last-div'>
                        <input type='text' placeholder='Email address' className='Footer-input'></input>
                        <Button className='Footer-btn'>Send</Button>
                        </div>
                    </Col>
            </Row>
            <hr className='Footer-copyright'></hr>
            <div className='Footer-copyright'>Copyright 2024 The Codext All Rights Reserved </div>
        </Container>
    );
}
export default Footer