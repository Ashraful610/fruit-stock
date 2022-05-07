import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './AddNewItem.css'

const AddNewItem = () => {
    const [name , setName] = useState({value:'' , error:''})
    const [price , setPrice] = useState({value:0 , error:''})
    const [img , setImg] = useState({value:'' , error:''})
    const [quantity , setQuantity] = useState({value:'' , error:''})
    const [suplier , setSuplier] = useState({value:'' , error:''})
    const [description , setDescription] = useState({value:'' , error:''})

    const handleName = event => {
        const name = event.target.value
        if(name){
            setName({value:name , error:''})
        }
        else{
            setName({value:'' , error:'fruit name is required'})
        }
    }

    const handlePrice = event => {
        const price = event.target.value
        if(price <0){
            setPrice({value:'' ,error:'fruit price must be positive number'})
        }
        else if(!price){
            setPrice({value:'' , error:'fruit price is required'})
        }
        else{
            setPrice({value:price , error:''})
        }
    }

    const handleImg = event => {
        const img = event.target.value
        if(!img){
            setImg({value:'' , error:'photo is required'})
        }
        else{
            setImg({value:img , error:''})
        }
    }

    const handleQuantity = event => {
        const quantity = event.target.value
        if(!quantity){
            setQuantity({value:'', error:'quantity is required'})
        }
        else if(quantity < 0){
                setQuantity({value:'' , error:'quantity is must be positive number'})
        }
        else{
            setQuantity({value:quantity , error:''})
        }
    }

    const handleSuplier = event => {
        const suplier = event.target.value
        if(suplier){
            setSuplier({value:suplier , error:''})
        }
        else{
            setSuplier({value:'' , error:'suplier is required'})
        }
    }

    const handleDescription = event => {
        const description = event.target.value
        if(description){
            setDescription({value:description  , error:''})
        }
        else{
            setDescription({value:'' , error:'description is required'})
        }
    }
    const handleNewFruit = event => {
        event.preventDefault()
        const fruit = {name:name.value , price:price.value , img:img.value , quantity:quantity.value , suplier:suplier.value , description:description.value}
        
        fetch('http://localhost:5000/fruit',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(fruit)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('successfully add a new fruit')
        })
    }
    return (
        <div className='add-fruit-div '>
            <h2 className='text-white'>Add New Fruit in Stock</h2>
            <form onSubmit={handleNewFruit}>
                 
               <label htmlFor="name" className='text-white mb-2'>
                   Fruit Name
                </label><br />
                <input type="text" name="" placeholder='fruit name' id="" className='input-field add-fruit mb-2'
                onBlur={handleName}/><br />
                {
                    name?.error && <p className='error'>{name.error}</p>
                }

                <label htmlFor="price" className='text-white mb-2'>
                    Fruit Price
                </label><br />
                <input type="number" name="" placeholder='fruit pirce' id=""
                 className='input-field add-fruit mb-2'
                 onBlur={handlePrice}/><br />
                {
                    price?.error && <p className='error'>{price.error}</p>
                }

                <label htmlFor="photo" className='text-white mb-2'>
                  Fruit Photo
                </label><br />
                <input type="text" name="" placeholder='fruit photo url' id=""
                 className='input-field add-fruit mb-2' 
                 onBlur={handleImg}/><br />
                {
                    img?.error && <p className='error'>{img.error}</p>
                }

                <label htmlFor="quantity" className='text-white mb-2'>
                    Fruit Quantity
                </label><br />
                <input type="number" name="" placeholder='fruit quantity' id=""
                 className='input-field add-fruit mb-2' 
                 onBlur={handleQuantity}/><br />
                {
                    quantity?.error && <p className='error'>{quantity.error}</p>
                }

                <label htmlFor="suplier" className='text-white mb-2 '>
                    Fruit Suplier
                </label><br />
                <input type="text" name="" placeholder='fruit suplier' id=""
                 className='input-field mb-2 add-fruit' 
                 onBlur={handleSuplier}/><br />
                {
                    suplier?.error && <p className='error'>{suplier.error}</p>
                }

                <label htmlFor="description" className='text-white mb-2'>
                    Fruit Description
                </label><br />
                <textarea type="text" name="" placeholder='fruit description' id=""
                 className='input-field add-fruit description mb-2'
                 onBlur={handleDescription}/><br />
                 
                {
                    description?.error && <p className='error'>{description.error}</p>
                }
                <input type="submit" value="Add New Fruit" className='newFruit' />
            </form>
        </div>
    );
};

export default AddNewItem;