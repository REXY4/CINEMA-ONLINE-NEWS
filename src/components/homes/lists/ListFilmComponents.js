import React from 'react';
import {
  Col, Container, Row, Image,
} from 'react-bootstrap';

import spidermanThumbnail from '../../../assets/assetDemo/spiderman.svg';

function ListFilmComponent() {
  const data = [
    {
      id: 1,
      title: 'Spiderman',
      logo: 'Spiderman',
      thumbnail: spidermanThumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
    {
      id: 1,
      title: 'Spiderman',
      logo: 'Spiderman',
      thumbnail: spidermanThumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
    {
      id: 1,
      title: 'Spiderman',
      logo: 'Spiderman',
      thumbnail: spidermanThumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
    {
      id: 1,
      title: 'Spiderman',
      logo: 'Spiderman',
      thumbnail: spidermanThumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
    {
      id: 1,
      title: 'Spiderman',
      logo: 'Spiderman',
      thumbnail: spidermanThumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
    {
      id: 1,
      title: 'Spiderman',
      logo: 'Spiderman',
      thumbnail: spidermanThumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
    {
      id: 1,
      title: 'Spiderman',
      logo: 'Spiderman',
      thumbnail: spidermanThumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
    {
      id: 1,
      title: 'Spiderman',
      logo: 'Spiderman',
      thumbnail: spidermanThumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
    {
      id: 1,
      title: 'Spiderman',
      logo: 'Spiderman',
      thumbnail: spidermanThumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
    {
      id: 1,
      title: 'Spiderman',
      logo: 'Spiderman',
      thumbnail: spidermanThumbnail,
      price: 50000,
      category: 'Action',
      description: 'Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!',
    },
  ];
  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <h1>List Film</h1>
        </Col>
      </Row>
      <Row>
        {data.map((item, i) => (
          <Col key={i} className="col-md-2 mb-4">
            <Image src={item.thumbnail} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListFilmComponent;
