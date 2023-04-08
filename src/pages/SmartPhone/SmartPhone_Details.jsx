import React, { useEffect, useState } from 'react'
import './SmartPhon_Details.css';

import Navbar from '../../Components/Navbar/Navbar';
import SmartPhones from "../../Utils/SmartPhones"
import Accessories from "../../Utils/Accessories"
import { useParams } from 'react-router-dom';

// Retriving data from local sstorage
const getLocalItem = () => {
  let item = localStorage.getItem("Lists");
  console.log( item );
  if( item ){
    return JSON.parse(localStorage.getItem("Lists"));
  }
  else{
    return [];
  }
}

const SmartPhone_Details = () => {

  const [list, setList ] = useState(getLocalItem());
  // console.log(list);
  const { id } = useParams();

  // storing it to local Storage
  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(list))
  }, [list]);

  // console.log( SmartPhones[0].FullName );
  var cheak = id%10;
  var id_num = parseInt(id/10);
  // console.log( cheak, id_num ); 

  return (
    <>
    <Navbar/>
    <div className='Product_Details p1 m1'>
      <div className="left">
        <img src={(cheak === 0) ? SmartPhones[id_num].ImgAdd : Accessories[id_num].ImgAdd} alt="" />
        <button onClick={() => {
          setList([ ...list, id]);
        }}><i className="fa-solid fa-cart-shopping"></i>Add To Cart </button>
      </div>
      <div className="right">
        <h1>{(cheak === 0) ? SmartPhones[id_num].FullName : Accessories[id_num].FullName}</h1>
        <h6>#JustFor SmartPhone</h6>
        <h4><span>4.5<i class="fa-solid fa-star"></i></span>   17566 Rating & 223 Reviews</h4> 
        <h5>Special Offer</h5>
        <h5>Discount 2000 rupee</h5>
        <h2><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>{(cheak === 0) ?SmartPhones[id_num].price : Accessories[id_num].price}</h2>
        <h3>Active Offer </h3>
        <p><i className="fa-solid fa-check" style={{color: "green"}}></i><strong>Bank Offer</strong> ₹1500 off on UPI Txns upto 5 times per user</p>
        <p><i className="fa-solid fa-check" style={{color: "green"}}></i><strong>Bank Offer</strong>5% Cashback on BuyMobi Axis Bank Card</p>
        <p className='des'><strong>Description : </strong>{(cheak === 0) ?SmartPhones[id_num].Message:Accessories[id_num].Message}</p>
      </div>
    </div>
    </>
  )
}

export default SmartPhone_Details;