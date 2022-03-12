import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, Image, Container, Row, Col } from "react-bootstrap";
import '../../../styles/homes/carousels.css';
import {convertToRupiah} from '../../../utils/price/idr'

import thumbnail from '../../../assets/assetDemo/deadpool.svg';
import logo from '../../../assets/assetDemo/logoDeadPool.svg';

const CaraouselComponents = () => {
    const data = [
        {
            id : 1,
            title : "Dead Pool",
            logo: logo,
            thumbnail : thumbnail,
            price : 50000,
            category : "Action",
            description : `Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!`
        },
        {
            id : 1,
            title : "Dead Pool",
            logo: logo,
            thumbnail : thumbnail,
            price : 50000,
            category : "Action",
            description : `Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!`
        }
    ]
    return (
        <div style={{
            height : "50vw",
            overflow : "hidden",
            marginBottom : "20px",
        }}>
        <Carousel sx={{
            height : "35vw",
        }}
        navButtonsAlwaysInvisible={true}
     >
            {data.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
        </div>
    )
}

const Item = ({title, description, thumnail, logo, category, price}) => {
    return (
        <div id="card-carousel-dashboard" style={{
            backgroundImage : `url(${thumbnail})`,
            backgroundSize : '100%',
            height : '600px',
            backgroundRepeat: 'no-repeat'
        }}>
            <Container>
                <Row className="pt-4" style={{
                    padding: '100px'
                }}>
                    <Col>
                        <div className='mb-4'>
                            <Image src={logo}/>
                        </div>
                        <div>
                            <p className='category'>{category}</p>
                            <p className='price'>{convertToRupiah(price)}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CaraouselComponents;