import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({fruit }) => {
     const {name, price, description, quantity, img, suplier ,_id} = fruit

     const navigate = useNavigate()

     const handleFruitId = id => {
         navigate(`/updateFruit/${id}`)
     }
    return (
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> Fruit :
                       <span className='text-warning'>  {name} </span>
                    </h5>
                    <h5>Price : {price}</h5> 
                    <h5>Quantity : {quantity}</h5>
                    <h5>Suplier : {suplier}</h5>
                    <p className="card-text"> 
                      <span className='fw-bold'>Descripton</span>  
                       : {description}
                    </p>
                </div>
                <div className='p-2'>
                   <button className='update-btn w-100 p-2' 
                    onClick={()=> handleFruitId(_id)}>
                          Update
                     </button>     
                </div>
            </div>

    );
};

export default Item;