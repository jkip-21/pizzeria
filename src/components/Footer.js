import React from 'react'
import Instagram from '@mui/icons-material/Instagram'
import  Twitter from '@mui/icons-material/Twitter'
import  Facebook from '@mui/icons-material/Facebook'
import  Linkedin from '@mui/icons-material/LinkedIn'
import '../styles/footer.css'

function Footer() {
  return (
    <div
    className='footer'>

    <div className='socialMedia'>
        <Instagram/>
        <Twitter/>
        <Facebook />
        <Linkedin />
    </div>
    <p>&copy; 2023 meekypizza.com</p>
    </div>
  )
}

export default Footer