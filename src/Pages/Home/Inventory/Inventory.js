import React from 'react';
import './Inventory.css'
import useFruits from '../../Hooks/useFruits';
import Item from './Item/Item';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [fruits , setFruits] = useFruits()
    const [id , setId] = useFruits('')
    const newFruits = fruits.slice(0 , 6)

    return (
        <div className='container'>
            <h5 className='inventory'>
               <span className='text-warning'>Fruits</span>  Inventory 
            </h5>
            <div className='fruits'>
                    {
                        newFruits.map(fruit => <Item 
                            key={fruit._id}
                            fruit={fruit}
                            >
                            </Item>)
                    }
            </div>
            <div className='manage-div'>
                <Link to='/manage'>
                    <Button variant="outline-warning" className='manage-btn'>Manage Inventories
                    <img src="https://i.ibb.co/DQn3qv1/right-arrow-removebg-preview.png" className='right-arrow' alt="" />
                    </Button>
                </Link>              
            </div>
          
           
        </div>
    );
};

export default Inventory;