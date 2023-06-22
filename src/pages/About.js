import React from 'react'
import multi from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${multi})` }}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>
            Welcome to Meek Pizza, your go-to destination for mouthwatering pizzas in Kenya! We are a vibrant and innovative startup pizza joint committed to bringing a fresh and exciting pizza experience to pizza lovers across the country. At Meek Pizza, we believe that great food should not only satisfy your cravings but also ignite your taste buds and leave you with a memorable dining experience.
        
Our journey began with a passion for creating delicious pizzas using the finest ingredients and a desire to serve our local community with an exceptional dining option. We recognized the need for a pizza joint that combines quality, affordability, and a warm, welcoming atmosphere, and thus Meek Pizza was born.

What sets us apart is our unwavering commitment to quality. We take great pride in sourcing the freshest, locally-sourced ingredients to ensure that each slice of pizza bursts with flavor. From our homemade dough, prepared daily, to our rich tomato sauce and carefully selected toppings, we pay attention to every detail to deliver a truly satisfying pizza experience.

At Meek Pizza, we believe that pizza is more than just a meal; it is a social experience that brings people together. Whether you're enjoying a slice with friends, celebrating a special occasion, or simply grabbing a quick bite, our cozy and inviting ambiance provides the perfect backdrop for your pizza adventure. Our friendly and knowledgeable staff is always ready to assist you and ensure that your visit is nothing short of fantastic.

We are passionate about supporting our local community and contributing to its growth. That's why we strive to foster strong relationships with local farmers and suppliers, promoting sustainability and helping to build a thriving food ecosystem in Kenya. By choosing Meek Pizza, you are not only indulging in delicious pizza but also supporting local businesses and farmers.

As a startup, we are constantly evolving and pushing the boundaries of pizza innovation. We believe in the power of creativity and are always experimenting with new flavors and combinations to surprise and delight our customers. From classic Margherita to unique gourmet creations, we have a pizza to satisfy every palate.

Come join us at Meek Pizza and experience pizza like never before. We are excited to serve you and become your favorite pizza destination in Kenya. Whether you dine in, take out, or order for delivery, we guarantee that every bite will be a slice of heaven. Welcome to the Meek Pizza family, where passion meets flavor!
            </p>
        </div>
    </div>
  )
}

export default About