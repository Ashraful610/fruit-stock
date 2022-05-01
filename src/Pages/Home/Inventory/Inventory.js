import React from 'react';
import './Inventory.css'
import useFruits from '../../Hooks/useFruits';
import Item from '../../Shared/Item/Item';

const Inventory = () => {
    const [fruits , setFruits] = useFruits()
    const newFruits = fruits.slice(0 , 6)
    return (
        <div className='container'>
            <h5 className='inventory'>
               <span className='text-warning'>Fruits</span>  Inventory </h5>
            <div className='fruits'>
                    {
                        newFruits.map(fruit => <Item 
                            key={fruit._id}
                            fruit={fruit}>
                            </Item>)
                    }
            </div>
            
        </div>
    );
};

export default Inventory;