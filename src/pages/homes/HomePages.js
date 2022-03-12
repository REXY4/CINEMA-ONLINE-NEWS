import React from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import CaraouselComponents from '../../components/homes/carousels/CarouselComponents';


const HomePages = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CaraouselComponents/> 
        </Col>
      </Row>
    </Container>
  ); 
};

export default HomePages;
