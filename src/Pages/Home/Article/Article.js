import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center'>Why choose our
                <span className='text-warning'> fruits </span> 
            </h1>
            <div className='fruits-article mt-5'>
                    <div className='shadow '>
                        <div>
                            <img src="https://i.ibb.co/mRgTLRP/garden.jpg" alt="" />  
                           <h3 className='text-center text-dark mt-3'>Own fruits orchard</h3>
                        </div>               
                        <div className='p-4'>                 
                            <p className='orchard'>We grow the fruits of our stock in our own gardens. The fruits are grown naturally without any formalin. Our results are medically tested</p>
                        </div>                     
                    </div>
                    <div className='shadow'>
                        <div>
                           <img src="https://i.ibb.co/vz8k82t/healthy.jpg" alt="" />
                           <h3 className='text-center mt-3 text-dark'>Healthy fruits for health</h3>
                        </div>                 
                        <div className='p-4'>
                            <p className='orchard'>Some of the healthiest fruits include pineapple, apples, blueberries, and mangos. Eating fruit improves heart health, reduces inflammation, and boosts your immune system</p>
                        </div>                
                    </div>
                    <div className='shadow'>
                        <div>
                            <img className='img-size ' src="https://i.ibb.co/mvGFkzr/stock.jpg" alt="" />
                            <h3 className='text-center text-dark mt-3 '>why we stock fruits</h3>
                        </div>                  
                        <div className='p-4'>                         
                            <p className='orchard'>We stock fruits to give people good and nutritious fruits. We stock the fruits without any formalin. Our main purpose is to help people</p>
                        </div>                   
                    </div>
            </div>
        </div>
    );
};

export default Article;