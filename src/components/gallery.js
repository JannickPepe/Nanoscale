import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade className='galleri'>
      <Carousel.Item className='galleri_item'>
        <img
          className="galleri_img d-block w-100"
          src={require('../img/galleri1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption className='galleri_text'>
          <h3>At Roskilde Campus</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../img/galleri2.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption className='galleri_text'>
          <h3>At Hellerup Campus</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../img/galleri3.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption className='galleri_text'>
          <h3>At GHG Campus</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;