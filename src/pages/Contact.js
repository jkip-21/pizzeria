import React from 'react'
import left from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'


function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${left})` }}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter full name..' type='text'/>

                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter email...' type='email'/>

                <label htmlFor='description'>Full Name</label>
                <textarea rows={6} placeholder='Enter description' name='description' required></textarea>

            <button type='submit'>Send Description</button>
                            </form>
        </div>
    </div>
  )
}

export default Contact