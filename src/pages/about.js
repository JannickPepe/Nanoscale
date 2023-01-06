import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import useState from 'usestate';

function About() {

  
  return (
    <Container>

      <Row>
        <Col className="text-center mt-4 mb-4" fluid xs={12} md={12}>
          <h2>Velkommen til <span style={{color:'orange'}}>om os</span> siden</h2>
          <hr></hr>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12}>
        <Card className="text-center mt-4 mb-4">
      <Card.Header><h3>Vores historie</h3></Card.Header>
      <Card.Body>
        <Card.Title>Nanoscale Solutions startede ud med:</Card.Title>
        <Card.Text>
          I år 2019 besluttede vi som består af Zan og Joe, at vi vil forbedre Kemi gennem VR
        </Card.Text>
      
      </Card.Body>
      <Card.Footer className="text-muted">CVR nummer:</Card.Footer>
    </Card>
        </Col>
      </Row>


      <Row>
        <Col className="text-center mt-4 mb-2" fluid xs={12} md={12}>
          <h3>Hvem er vi</h3>
          <hr></hr>
        </Col>
      </Row>


      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        
        <Col fluid xs={12} md={6}>
          <div className="zan p-4 mb-4">
          <Card className="zan text-center" style={{ }}>
      <Card.Img variant="top" src={require('../img/bg_container1.png')} />
      <Card.Body>
        <Card.Title>Zan Mahmoud</Card.Title>
        <Card.Text>
          Halløj, jeg er Zan som er en af grundlæggerene til Nanoscale Solutions
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: 123@live.dk</ListGroup.Item>
        <ListGroup.Item>Arb Tlf: 123456789</ListGroup.Item>
        <ListGroup.Item>Danmark - København</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">LinkedIn</Card.Link>
        <Card.Link href="#">Facebook</Card.Link>
      </Card.Body>
    </Card>
          </div>
        </Col>
        
      
        <Col fluid xs={12} md={6}>
          <div className="joe p-4">
          <Card className="zan text-center" style={{ }}>
      <Card.Img variant="top" src={require('../img/bg_container1.png')} />
      <Card.Body>
        <Card.Title>Joe</Card.Title>
        <Card.Text>
          Halløj, jeg er Joe som er en af grundlæggerene til Nanoscale Solutions
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: 123@live.dk</ListGroup.Item>
        <ListGroup.Item>Arb Tlf: 123456789</ListGroup.Item>
        <ListGroup.Item>Danmark - København</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">LinkedIn</Card.Link>
        <Card.Link href="#">Facebook</Card.Link>
      </Card.Body>
    </Card>
          </div>
        </Col>

      </Row>


      <Row>
        <Col className="text-center mt-4 mb-4" fluid xs={12} md={12}>
          <h4>Vil du vide mere?</h4>
          <hr></hr>
          
        </Col>
      </Row>

    </Container>
  );
  }
  
  export default About;