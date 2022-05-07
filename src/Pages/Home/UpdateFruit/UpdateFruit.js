import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import './UpdateFruit.css'

const UpdateFruit = () => {
    const {fruitId }= useParams()
    const [fruit ,setFruit] = useState({})
    const {name, price, description, img, suplier ,_id} = fruit
    let {quantity} = fruit

    const [newQuantity , setNewQuantity] = useState(0)
    const [error , setError] = useState('')
    const [sold ,setSold] = useState(0)
     
     useEffect(()=> {
        const url = `http://localhost:5000/fruits/${fruitId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setFruit(data))
    },[quantity])

    const decreaseQuantity = event => {
     quantity = quantity - 1

     if(quantity >= 0 ){  
        const newFruit = {name , img , price , quantity , description , suplier,}
        
           const url = `http://localhost:5000/fruits/${fruitId}`
           fetch( url ,{
               method:"PUT",
               headers:{
                   "content-type" : "application/json"
               },
               body:JSON.stringify(newFruit)
           })
           .then(res => res.json())
           .then(data => {
           toast.success('successfully decrease quantity')
               setFruit(data)
           })
           .catch(error => {
               setError(error)
           })
     }
    }

    const handleQuantity = event => {
        const quantity = event.target.value
        if(quantity < 0){
            setError('Please enter valid number')
        }
        else{
            setNewQuantity(quantity)
            setError('')
        }
    }


    const handleUpdateQuantity = event => {
        event.preventDefault()
        quantity += parseInt(newQuantity)
        
     const newFruit = {name , img , price , quantity , description , suplier,}
    
        const url = `http://localhost:5000/fruits/${fruitId}`
        fetch( url ,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(newFruit)
        })
        .then(res => res.json())
        .then(data => {
         toast.success('Successfully updated quantity')
            setFruit(data)
        })
        .catch(error => {
           setError(error)
        })
    }
    return (
        <div className='w-75 mx-auto update-container'>
             <div className="update-card m-4 shadow">
                <img src={img} className="update-fruit" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> Fruit :
                       <span className='text-warning'>  {name} </span>
                    </h5>
                     <h5>id: {_id}</h5>
                    <h5>Price : {price}</h5> 
                    <h5>Quantity : {quantity}</h5>
                    <h5>Sold : {sold}</h5>
                    <h5>Suplier : {suplier}</h5>
                    <p className="card-text"> 
                      <span className='fw-bold'>Descripton</span>  
                       : {description}
                    </p>
                    {
                     error && <p className='text-danger fs-5'>{error}</p>
                    }

                    <Button variant='outline-success'
                    onClick={decreaseQuantity}
                    >
                        Delivered
                  </Button>
                </div>
            </div>
            <div className='update-form m-4 shadow'>
                <h2 className='text-warning m-3'>Restock the fruit</h2>
                <input type="number" name="quantity" id=""
                onBlur={handleQuantity}
                 placeholder='increase fruit quantity'
                 className='quantity-field'/>
                 {
                     error && <p className='text-danger fs-5'>{error}</p>
                 }
                 <Button variant="outline-warning"
                 onClick={handleUpdateQuantity}>
                     Update Quantity 
                </Button>
            </div>
        </div>
    );
};

export default UpdateFruit;