import React from 'react'
import './Home.css'

import Navbar from '../../Components/Navbar/Navbar';
import Products from '../../Utils/Utis';
import SmartPhones from '../../Utils/SmartPhones';
import Accessories from "../../Utils/Accessories";
import Footer from '../../Components/Footer/Footer';
import Brand from '../../Utils/Brand'
import { Link } from 'react-router-dom';


const Home = () => {


  return (
    <>
        <Navbar/>

        <div className="hero">
            <div className="title p1">
                <h2>Purchase Your</h2>
                <h1>DREAM</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga cumque, libero doloremque, maxime sequi, vitae voluptate.</p>
            </div>
            <img src="./Images/Hero_IMG.jpg" alt="Hero_Img" />
        </div>
        
        <h1 className='m1 p1'>Products</h1>
        <hr/>

        <div className="product p1">
            {
                Products.map( (it, ind) => {
                    return(
                        <div className="pro" key={ind}>
                            <img src={it.Imgsrc} alt="" />
                            <p>{it.Name}</p>
                        </div>
                    );
                })
            }
        </div>
        
        
        <div className="banner1 m1">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/62d1db714bbec85e.jpg?q=50" alt="" />
        </div>
        <hr/>

        <h1 className='m1 p1'>SmartPhones & Cell Phones</h1>
        <hr/>
        <div className="SmartPhones p1 m1">
            {SmartPhones.map((element, ind) => {
                return(
                    <>
                    <Link to={`/smartphone/${(element.Id * 10) + 0}`}>
                        <div className="item" key={ind}>
                            <img src={element.ImgAdd} alt="" />
                            <h2>{element.Name}</h2>
                            <h3><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>{element.price}</h3>
                        </div>
                    </Link>
                    </>
                )
            })}
        </div>

        <div className="banner2">
            <img src="./Images/left.jpg" alt="" />
            <div className="right">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6RqtplyHphheSskh0se1QBsNmyhZPlWMkleZa1Zh3g&usqp=CAU&ec=48665701" alt="" />
            </div>
        </div>
        

        <h1 className='m1 p1'>Tablets & Accessories</h1>
        <hr/>
        <div className="SmartPhones p1 m1">
            {Accessories.map((element, ind) => {
                return(
                    <>
                    <Link to={`/smartphone/${(element.Id * 10 ) + 1}`}>
                        <div className="item" key={ind}>
                            <img src={element.ImgAdd} alt="" />
                            <h2>{element.Name}</h2>
                            <h3><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>{element.price}</h3>
                        </div>
                    </Link>
                    </>
                )
            })}
        </div>

        <h1 className='m1 p1'>Brands</h1>
        <hr/>
        <div className="brand p1 m1">
        {Brand.map((ele, ind) => {
            return(
                <div className="brand-item" key={ind}>
                    <img src={ele.Img} alt={ele.Name} />
                </div>
            );
        })}
        </div>

        <Footer/>

    </>
  )
}

export default Home;