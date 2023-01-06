import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


function About() {
  
  
  return (
    <main>
        <Container>
    
    <Row>
      <Col className="text-center mt-4 mb-4" fluid xs={12} md={12}>
        <h2>Velkommen til 'om os' siden</h2>
        <hr></hr>
      </Col>
    </Row>

    <Row>
      <Col sm={12} md={12}>
       
      <Card className="text-center mt-4 mb-4">
      <main>
      <Card.Header><h3>Vores historie</h3></Card.Header>
    <Card.Body>
      <Card.Title>Nanoscale Solutions startede ud med:</Card.Title>
      <Card.Text>
        I år 2019 besluttede vi som består af Zan og Joe, at vi vil forbedre Kemi gennem VR
      </Card.Text>
    
    </Card.Body>
    <Card.Footer className="text-muted">CVR nummer:</Card.Footer>
          </main>
   
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
          <main>
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
          </main>

  </Card>
        </div>
      </Col>
      
    
      <Col fluid xs={12} md={6}>
        <div className="joe p-4">
        <Card className="zan text-center" style={{ }}>
          <main>
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
          </main>
    
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

    <Row>
      <Col className="text-center mb-4" xs={12} md={12} lg={6}>
      <Accordion>
    <Accordion.Item eventKey="0" >
      <Accordion.Header>Hvem har vi præsenteret vores VR program for?</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Hvad kører VR programmer på?</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
      </Col>
      <Col className="text-center" xs={12} md={12} lg={6}>
      <Accordion>
    <Accordion.Item eventKey="0" >
      <Accordion.Header>Hvornår vil det blive lanceret?</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Er vi selvfinanciret?</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
      </Col>
    </Row>
    
    

  </Container>
    </main>
    
  );
  }
  
  export default About;