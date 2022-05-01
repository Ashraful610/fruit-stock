import React from 'react';
import Article from '../Article/Article';
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
            <Article></Article>
        </div>
    );
};

export default Home;