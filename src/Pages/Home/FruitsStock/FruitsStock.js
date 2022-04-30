import React from 'react';
import useFruits from '../../Hooks/useFruits';
import './FruitsStock.css'

const FruitsStock = () => {
    const [fruits , setFruits] = useFruits()
    const allYearFrouits = fruits.slice(7 , 13)
    return (
        <div className='mt-5'>
            <h2 className='heading'>Fruits that we stock all year round</h2>
           
        </div>
    );
};

export default FruitsStock;