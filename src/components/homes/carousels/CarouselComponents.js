import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Image, Container, Row, Col, Button,
} from 'react-bootstrap';
import '../../../styles/homes/carousels.css';
import { convertToRupiah } from '../../../utils/price/idr';

import thumbnail from '../../../assets/assetDemo/deadpool.svg';
import logo from '../../../assets/assetDemo/logoDeadPool.svg';

function CaraouselComponents() {
  const data = [
    {
      id: 1,
      title: 'Dead Pool',
      logo,
      thumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
  ];
  return (
    <div style={{
      height: '37vw',
      overflow: 'hidden',
    }}
    >
      <Carousel
        sx={{
          height: '35vw',
        }}
        navButtonsAlwaysInvisible
      >
        {data.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item({
  title, description, thumnail, logo, category, price,
}) {
  return (
    <div
      id="card-carousel-dashboard"
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Row
          className="pt-4"
          style={{
            padding: '80px',
          }}
        >
          <Col>
            <div className="mb-4 mt-5">
              <Image src={logo} />
            </div>
            <div>
              <p className="category">{category}</p>
              <p className="price">{convertToRupiah(price)}</p>
              <p>{description}</p>
            </div>
            <div>
              <Button variant="danger" id="button-buy">Buy</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CaraouselComponents;
