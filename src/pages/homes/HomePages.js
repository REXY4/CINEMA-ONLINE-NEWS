import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CaraouselComponents from '../../components/homes/carousels/CarouselComponents';
import ListFilmComponent from '../../components/homes/lists/ListFilmComponents';

function HomePages() {
  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <CaraouselComponents />
        </Col>
      </Row>
      <Row>
        <Col>
          <ListFilmComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePages;
