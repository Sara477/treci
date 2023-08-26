import React from 'react';
import PropTypes from 'prop-types';
import sara from '../slike/sara.jpeg';
import {Col, Container, Row} from "react-bootstrap";

const About = props => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>O meni</h1>
                        <p>Zovem se Sara Nenadic i ovaj sajt je pravljen za potrebe domacih zadata iz predmeta Internet tehnologije!</p>
                    </Col>
                    <Col>
                        <img src={sara} alt="Sara Nenadic" className="img img-thumbnail"/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

About.propTypes = {

};

export default About;