import React from 'react'
import "./About.css";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <>
    <Navbar/>
      <main>
      <section class="hero-section p1">
        <div class="container">
          <h1>About Us</h1>
        </div>
      </section>
      <section class="about-us-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>Our Story</h2>
              <p>We started our journey in 2010 with a vision to create a platform where people can easily buy and sell products online. Over the years, we have grown to become one of the leading e-commerce sites in the world, serving millions of customers every day.</p>
              <p>We are passionate about delivering the best online shopping experience to our customers. Our platform offers a wide range of products from various categories including electronics, fashion, home & garden, and more. We work closely with our sellers to ensure that the products sold on our platform meet our high standards of quality and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default About