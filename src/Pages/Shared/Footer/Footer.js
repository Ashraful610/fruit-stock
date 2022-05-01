import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
             <div className="row footer m-0 gx-2 p-4">
                 <div className="col-lg-4 col-12 column">
                     <h2 className='text-white footer-heading1'>Fruits
                         <span className='text-warning'> Stock</span> 
                     </h2>
                    <p className='text-white fs-5'>We grow the fruits of our stock in our own gardens. The fruits are grown naturally without any formalin. Our results are medically tested</p>
                 </div>
                 <div className="col-lg-3 col-12 column">
                        <h2 className='text-white footer-heading2'>Our Office</h2>
                        <p className='text-white fs-5'>
                          TSC ROAD <br />
                          Ashuganj ,Brahmanbaria <br />
                          Dhaka , Bangladesh 
                        </p>
                        <p className='text-white fs-5'>
                           ashalam@610gmail.com
                           
                        </p>
                        <div className='bg-white'><hr/></div>              
                 </div>
                 <div className="col-lg-2 col-12 column ">
                     <h2 className='text-white footer-heading3'>About Us</h2>         
                     <p className='text-white fs-5'>
                         Home <br />
                         Services <br />
                         Features <br />
                         Contact Us
                     </p>
                 </div>
                 <div className="col-lg-3 col-12 column">
                     <h2 className='text-white footer-heading4'>Follow Us</h2>
                     <p className='text-white fs-5'>
                       <a href="https://web.facebook.com/?_rdc=1&_rdr"  className='text-white text-decoration-none'> 
                       Facebook
                       <img className='logo' src="https://i.ibb.co/kHmLHtP/facebook.png" alt="" />
                       </a>
                        <br />
                       <a href="https://www.instagram.com/?hl=en"  className='text-white text-decoration-none'> 
                       Instrgram
                       <img className='logo' src="https://i.ibb.co/MgVNwDk/instagram.png" alt="" />
                       </a> 
                       <br />
                       <a href="https://www.youtube.com/"  className='text-white text-decoration-none'>
                           YouTube
                           <img className='logo'  src="https://i.ibb.co/TMqB45z/youtube.png" alt="" />
                         </a>
                         <br />
                        <a href="https://twitter.com/?lang=en"  className='text-white text-decoration-none'>
                            Twitter
                            <img className='logo' src="https://i.ibb.co/mctdJC4/twitter.png" alt="" />
                        </a>
                     </p>
                 </div>
             </div>
        </div>
    );
};

export default Footer;