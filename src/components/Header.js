import { Carousel } from 'react-bootstrap';
import React from "react";
import gbr1 from './gbr1.jpg';
import gbr2 from './gbr2.jpg';
import gbr3 from './gbr3.jpg';

const header = () => {
    return(
        <Carousel variant="light">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={gbr1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5 className="fs-2">Sociale Markt</h5>
            <p> Tempat Belanja Kebutuhan Digital Social Media Anda </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={gbr2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5 className="fs-2">Enjoyable, Safety, and Trusted</h5>
            <p>Belanja disini dijamin Anda Puas, Aman, dan Terpercaya </p>
            </Carousel.Caption>
        </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={gbr3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5 className="fs-2">Jangan Ragu Untuk Belanja dan Coba Sekarang</h5>
            <p>Dengan harga yang murah dan aman dikantong, serta hasil yang memuaskan</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default header 