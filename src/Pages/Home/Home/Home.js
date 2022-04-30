import React from 'react';
import Banner from '../Banner/Banner';
import FruitsStock from '../FruitsStock/FruitsStock';
import Inventory from '../Inventory/Inventory';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <Inventory></Inventory>
            <FruitsStock></FruitsStock>
        </div>
    );
};

export default Home;