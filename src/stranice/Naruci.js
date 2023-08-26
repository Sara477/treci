import React from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from "react-bootstrap";

const Naruci = props => {
    return (
        <>
            <Container>
                <Row>
                    <Col>Prvi deo</Col>
                    <Col>Drugi deo</Col>
                    <Col>Treci deo</Col>
                </Row>
            </Container>
        </>
    );
};

Naruci.propTypes = {

};

export default Naruci;