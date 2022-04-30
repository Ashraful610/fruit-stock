import React from 'react';
import './Item.css'

const Item = ({fruit}) => {
     const {name, price, description, quantity, img, suplier} = fruit
    return (
        // <div>
        //     <div>
        //         <img  src={img} alt="" />
        //     </div>
        //     <div>
        //         <h5>Fruit : {name}</h5>
        //         <h5>Price : {price}</h5>
        //         <h5>Quantity : {quantity}</h5>
        //         <h5>Suplier : {suplier}</h5>
        //         <p> 
        //             <span className='fw-bold'>
        //                 Descripton
        //             </span>  : {description}
        //         </p>
        //     </div>
        //     <div className='card-footer'>
        //         <button className='btn btn-primary'>Update</button>
        //     </div>
     
        // </div>
    
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> Fruit : {name}</h5>
                    <h5>Price : {price}</h5>
                    <h5>Quantity : {quantity}</h5>
                    <h5>Suplier : {suplier}</h5>
                    <p className="card-text"> 
                      <span className='fw-bold'>Descripton</span>  
                       : {description}
                    </p>
                </div>
                <div className='p-2'>
                   <button className='update-btn w-100 p-2'>Update</button>
                </div>
            </div>

    );
};

export default Item;