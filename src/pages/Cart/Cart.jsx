import React, { useState } from 'react';

import "./Cart.css"
import Navbar from '../../Components/Navbar/Navbar'
import SmartPhones from '../../Utils/SmartPhones';
import Accessories from '../../Utils/Accessories';


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

const Cart = () => {

  const [list, setList ] = useState(getLocalItem());
  // const [total, setTotal ] = useState(0);

  const delAllItem = () =>{
    localStorage.setItem("Lists", JSON.stringify([]));
    setList([]);
  }

  return (
    <>
    <Navbar/>

    <div className="cart p1 m1">
      <hr/>
      {
        list.map( (ele, ind) => {


          const id = parseInt(ele);

          var cheak = id%10;
          var id_num = parseInt(id/10);
          // console.log( cheak, id_num ); 

          // const T_price = (cheak === 0) ?SmartPhones[id_num].price : Accessories[id_num].price;
          // setTotal( total + (cheak === 0) ?SmartPhones[id_num].price : Accessories[id_num].price );

          return(
            <>
            <div className="cart-item" key={ind}>
              <img src={(cheak === 0) ? SmartPhones[id_num].ImgAdd : Accessories[id_num].ImgAdd} alt="" />
              <h2>{(cheak === 0) ? SmartPhones[id_num].FullName : Accessories[id_num].FullName}</h2>
              <h3>{(cheak === 0) ?SmartPhones[id_num].price : Accessories[id_num].price}</h3>
            </div>
            <hr/>
            </>
          );
        })
      }
      <hr />
      <div className="total-buy">
        <button onClick={() =>{
          delAllItem();
        }}>Buy Now</button>
        {/* <h2>Total : {total}</h2> */}
      </div>

    </div>

    </>
  )
}

export default Cart