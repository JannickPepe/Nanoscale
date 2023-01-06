
import React from "react";
import CarouselFadeExample from "../components/gallery.js";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import VRPic from '../img/bg_container1.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardGroup } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


function Home() {

    return (
      <div className="home">
        <main>


          <Container fluid>
            <Row>
              <Col>
                <Card className="bg_img bg-dark text-white">
                  <Card.Img src={require('../img/bg_container1.png')} alt="hand" />
                  <Card.ImgOverlay>
                    <Card.Text className="bg_text">
                      Anmod om en demo i dag <Button class="bg_btn" href="#">Klik her</Button>{' '}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Container>
        
          <div className="container py-4 text-center" id="container2">
            <div className="row">
              <h2 className="text-center mt-4">Hvad kan det tilbyde?</h2>
              <hr></hr>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card>
                  <main>
                    <Card.Img variant="top" src={require('../img/bg_container1.png')} alt="hand" />
                    <Card.Body>
                      <Card.Header className="card_title rounded-pill"><h5>Udviklet på DTU</h5></Card.Header>
                      <Card.Text className="py-4">
                        I 2017 startede udviklingen af en VR platform til simulering af atomare systemer på Danmarks Tekniske Universitet.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-primary">
                      <small className="card_subtext">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </main>
                </Card>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card>
                  <main>
                    <Card.Img variant="top" src={require('../img/bg_container1.png')} alt="hand" />
                    <Card.Body>
                      <Card.Header className="card_title rounded-pill"><h5>Brugt til forskning</h5></Card.Header>
                      <Card.Text className="py-4">
                      VR platformen har været testet og brugt til videnskabelige undersøgelser af nanoteknologi af forskere på forskellige afdelinger på DTU.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-primary">
                      <small className="card_subtext">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </main>
                </Card>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card>
                  <main>
                    <Card.Img variant="top" src={require('../img/bg_container1.png')} alt="hand" />
                    <Card.Body>
                      <Card.Header className="card_title rounded-pill"><h5>Tilegnet undervisning</h5></Card.Header>
                      <Card.Text className="py-4">
                      Platformen har vist stort potentiale for brug til undervisning af atomar og molekylær videnskab, helt fra folkeskoleniveau til videregående uddannelser.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-primary">
                      <small className="card_subtext">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </main>
                </Card>
              </div>

            </div>
          </div>

  
          <div className="container-fluid text-center"  data-bs-spy="scroll" id="container3">

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
                <h3 id="scrollspyHeading1">Fordele ved at benytte vores platforme</h3>
                <hr></hr>
              </div>
            </div>

            <div className="row bg-secondary p-4">
              <div className="molecules_hand col-lg-6 col-md-6 col-sm-12">
                <img className="molecules float-end" src={require('../img/molecules_hand.png')} alt="molecules"></img>
              </div>
            
              <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                <h4>Indfør håndgribelighed i læren om molekyler</h4>
                <p>Ved brug af vores VR platform får eleverne en håndgribelig og interaktiv oplevelse helt ned til det enkelte atom i molekylære systemer.</p>
              </div>
            </div>

            <div className="row p-4">
              <div className="research_head col-lg-6 col-md-6 col-sm-12 text-start mt-4">
                <h4>Gør fysik og kemi mere intuitivt & underholdende</h4>
                  <p>Vi bekæmper intuitionsbarrierer ved at anbringe eleverne i en simuleret verden
                    hvor alle elementer er forstørret en milliard gange og adlyder de tilhørende fysiske love.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="research_head float-start" src={require('../img/research_head.png')} alt="research"></img>
              </div>
            </div>

            <div className="row bg-secondary p-4">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="vrglassman float-end" src={require('../img/vr-glasses-man.png')} alt="vr-glasses"></img>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                <h4>Innovativ læring</h4>
                <p>Udnyt moderne teknologi til at skabe nærværende oplevelser, hvor atomer ikke mere er usynlige og uforudsigelige.</p>
              </div>
            </div>
          </div>
  
      
          <div className="container-fluid text-center"  data-bs-spy="scroll" id="container4">

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
                <h3 id="scrollspyHeading2">Om vores VR platforms</h3>
                <hr></hr>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                <h4>Et virtuelt laboratorie</h4>
                <p>Ved at kombinere videnskabelige simuleringsmetoder med moderne Virtual Reality teknologi, har vi udviklet den perfekte platform til at undervise naturvidenskab.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="vrglassman float-end" src={require('../img/dash_vr_simu.png')} alt="vr-glasses"></img>
              </div>
            </div>

          </div>



          <div className="container-fluid text-center"  data-bs-spy="scroll" id="container5">

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
                <h3 id="scrollspyHeading3">Overblik over funktionaliteter</h3>
                <hr></hr>
              </div>
            </div>

            <div className="row bg-secondary p-4">
              <div className="molecules_hand col-lg-6 col-md-6 col-sm-12">
                <img className="molecules float-end" src={require('../img/molecules_hand.png')} alt="molecules"></img>
              </div>
            
              <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                <h4>Byg molekyler og interager</h4>
                
                <p>Byg molekyler med dine egne hænder, atom for atom, eller benyt biblioteker til at importere strukturer. Interager med molekylerne for at opleve, hvordan kemien og fysikkens love fungerer på nanoskala.</p>
              </div>
            </div>

            <div className="row p-4">
              <div className="research_head col-lg-6 col-md-6 col-sm-12 text-start mt-4">
                <h4>Mål rigtige fysiske og kemiske egenskaber</h4>
                
                  <p>Ved brug af virtuelle værktøjer kan eleverne simulere rigtige fysiske og kemiske egenskaber (bl.a. konduktans, energibarriere, kemiske sammensætninger, molekylær dynamik og meget mere) og derved opnå en bedre forståelse for hverdagens videnskab.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="research_head float-start" src={require('../img/research_head.png')} alt="research"></img>
              </div>
            </div>

          </div>



      
          <div className="galleri_content"  data-bs-spy="scroll" id="container6">
            <Container>
              <Row>
                <Col className="text-center">
                <h3 id="scrollspyHeading4">Vores Galleri</h3>
                <hr></hr>
                </Col>
              </Row>
              <Row>
                <Col className="bg-secondary p-4">
                <h4 className="mb-4 mt-4">Overblik over de seneste billeder</h4>
                  <CarouselFadeExample/>
                </Col>
              </Row>
            </Container>
          </div>
  
        </main>
      </div>
    )
  }
  
  export default Home;


