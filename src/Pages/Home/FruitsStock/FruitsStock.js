import React from 'react';
import { Carousel } from 'react-bootstrap';
import useFruits from '../../Hooks/useFruits';
import './FruitsStock.css'

const FruitsStock = () => {
   
    return (
        <div className='mt-5'>
            <h2 className='heading mb-4'>
            <span className='text-warning'>Fruits</span> that we stock all year round</h2>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100 img"
                src="https://i.ibb.co/16wQ9Rj/banana.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h2>Banana</h2>
                <h4>A banana is a fleshy and edible fruit that does not contain any seeds.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img"
                src="https://i.ibb.co/3TB898s/Coconut.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h2 className='text-white'>Coconut</h2>
                <h4 className='text-white'>The coconut is a juicy fruit full of water in it called coconut water</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img"
                src="https://i.ibb.co/L9RGdCm/Papaya.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h2 className='text-white'>Papaya</h2>
                <h4 className='text-white'>Papaya is from the family Caricaceae. Its scientific name is Carica papaya</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img"
                src="https://i.ibb.co/rttYskK/Lime.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h2 className='text-white'>Lime</h2>
                <h4 className='text-white'>Lime is a fruit, also known as lemon, a citrus fruit that contains citric acid in it.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100  img"
                src=" https://i.ibb.co/VwGbm14/anner.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h2 className='text-white'>Pomegranate</h2>
                <h4 className='text-white'>Pomegranate is a seed-bearing fruit that grows in the flowering plant from the Lythracaea family</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img"
                src="https://i.ibb.co/93VRTkc/Pear.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h2 className='text-white'>Pear</h2>
                <h4 className='text-white'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
         
        </div>
    );
};

export default FruitsStock;