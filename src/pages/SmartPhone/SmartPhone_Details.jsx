import React from 'react'
import './SmartPhon_Details.css';

import Navbar from '../../Components/Navbar/Navbar';
import SmartPhones from "../../Utils/SmartPhones"
import { useParams } from 'react-router-dom';

const SmartPhone_Details = () => {

  const { id } = useParams();

  // console.log( SmartPhones[0].FullName );

  return (
    <>
    <Navbar/>
    <div className='Product_Details p1 m1'>
      <div className="left">
        <img src={SmartPhones[id].ImgAdd} alt="" />
        <button><i className="fa-solid fa-cart-shopping"></i>Add To Cart </button>
      </div>
      <div className="right">
        <h1>{SmartPhones[id].FullName}</h1>
        <h6>#JustFor SmartPhone</h6>
        <h4><span>4.5<i class="fa-solid fa-star"></i></span>   17566 Rating & 223 Reviews</h4> 
        <h5>Special Offer</h5>
        <h5>Discount 2000 rupee</h5>
        <h2><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>{SmartPhones[id].price}</h2>
        <h3>Active Offer </h3>
        <p><i className="fa-solid fa-check" style={{color: "green"}}></i><strong>Bank Offer</strong> ₹1500 off on UPI Txns upto 5 times per user</p>
        <p><i className="fa-solid fa-check" style={{color: "green"}}></i><strong>Bank Offer</strong>5% Cashback on BuyMobi Axis Bank Card</p>
        <p className='des'><strong>Description : </strong>{SmartPhones[id].Message}</p>
      </div>
    </div>
    </>
  )
}

export default SmartPhone_Details