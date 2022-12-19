import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <nav class=" ms-4 navbar navbar-expand-lg bg-light shadow p-3 mb-0 bg-white rounded" style={{width: '100%' , float:'right' , margin:'0 0 1em 0 ' ,zIndex:'100' , padding:'0'}}>
    <div class="container-fluid ">
      <div style={{marginRight : '100px'}}>
      <img  src={logo} alt='logo' height='30 px' width='90px'/>

      </div>
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class=" font-weight-bold nav-link active " aria-current="page" href="#">Transfer</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active font-weight-bold" aria-current="page" href="#">Bus hire</a>
          </li>
          

          
          
          
        </ul>
        <div className='d-flex justify-content-end'> 
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
       <li class="nav-item">
            <a class="nav-link active font-weight-bold" aria-current="page" href="#">Transfer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active font-weight-bold" aria-current="page" href="#">Transfer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active font-weight-bold" aria-current="page" href="#">Transfer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active font-weight-bold" aria-current="page" href="#">Transfer</a>
          </li>
       </ul>
        </div>
      
      </div>
    </div>
  </nav>
  
  )
}

export default NavBar