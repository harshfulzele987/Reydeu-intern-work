import React from "react"
import logo from '../assets/Rydeu.png'

function Footer() {
  return (
    <div style={{marginTop:'3rem'}}>
            
<footer class="text-center text-lg-start text-light" style={{backgroundColor: '#161616'}}>
  
  <div class="p-4"></div>
  

  
  <section >
    <div class="container text-center text-md-start mt-5">
      
      <div class="row mt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <img src={logo}></img>
          <p style={{color:'#ffff'}}>
          Solution for all ground transfers
          </p>
          <div className="mt-lg-6">
            <p style={{color:'#ffff'}}>
                connect with us
            </p>
          </div>
        </div>
        

        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            Company
          </h6>
          <p style={{color:'#EFEFEF'}}>
            <a href="#!" class="text-reset text-decoration-none">About us</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Privacy Policy</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Term and Condition</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Imprint</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Careers/Job</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">sitemap</a>
          </p>
        </div>
        


        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Help Center
          </h6>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Contact us</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Customer FAQ</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Businees FAQ</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Supplier FAQ</a>
          </p>
        </div>
        


        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 class="text-uppercase fw-bold mb-4">
            Our Services
          </h6>
            <p>
                <a href="#!" class="text-reset text-decoration-none">Airport Transport</a>
            </p>
            <p>
                <a href="#!" class="text-reset text-decoration-none">City Transfer</a>
            </p>
            <p>
                <a href="#!" class="text-reset text-decoration-none">Hourly Transfer</a>
            </p>
            <p>
                <a href="#!" class="text-reset text-decoration-none">Businees</a>
            </p>
            <p>
                <a href="#!" class="text-reset text-decoration-none">Supplier</a>
            </p>
        </div>
        
      </div>
      
    </div>
  </section>
  

  
  <div class="text-center p-4" >
  Copyright ©️ 2020 rydeu.com All rights reserved.
    {/* <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
  </div>

</footer>

    </div>
  )
}

export default Footer

// const Footer = () =>

//     <footer className="page-footer font-small blue pt-4 bg-dark ">
//         <div className="container-fluid text-center text-md-left">
//             <div className="row">

//                 <div className="col-4 mt-md-0 mt-3">
//                     <img src={logo} ></img>
//                     <p style={{ color: '#ffff' }}>Solution for all Transfer</p>
//                 </div>

//                 <hr className="clearfix w-100 d-md-none pb-0" />
//                 <div className=" d-flex col-8">

//                     <div className="col-4">
                        
//                         {/* <ul className=" mb-4">
//                     <li className="mb-4" style={{color:"#EFEFEF"}}>About us</li>
//                     <li className="mb-4" style={{color:"#EFEFEF"}}>Privacy Plocicy</li>
//                     <li className="mb-4"style={{color:"#EFEFEF"}}>Term and condition</li>
//                     <li className="mb-4"style={{color:"#EFEFEF"}}>Imprint</li>
//                     <li className="mb-4"style={{color:"#EFEFEF"}}><span style={{color:"#EFEFEF"}} href="#!">Imprint</span></li>
//                     <li className="mb-4"style={{color:"#EFEFEF"}}><span style={{color:"#EFEFEF"}} href="#!">Careers/job</span></li>
//                     <li className="mb-4"style={{color:"#EFEFEF"}}><span style={{color:"#EFEFEF"}} href="#!">sitemap</span></li>
                
//                 </ul> */
//                         }
//                         <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//                         <h5 className="fw-normal" style={{ color: "#ffff" }}>Company</h5>
                           
//                             <p style={{color:"#EFEFEF", width:"64px"}}>
//                                 <a href="#!" class="text-reset">About us</a>
//                             </p>
//                             <p style={{color:"#EFEFEF", width:"64px"}}>
//                                 <a href="#!" class="text-reset">Privacy Plocicy</a>
//                             </p>
//                             <p style={{color:"#EFEFEF", width:"64px"}}>
//                                 <a href="#!" class="text-reset">Term and condition</a>
//                             </p>
//                             <p style={{color:"#EFEFEF", width:"64px"}}>
//                                 <a href="#!" class="text-reset">Imprint</a>
//                             </p>
//                             <p style={{color:"#EFEFEF", width:"64px"}}>
//                                 <a href="#!" class="text-reset">Careers/job</a>
//                             </p>
//                             <p style={{color:"#EFEFEF", width:"64px"}}>
//                                 <a href="#!" class="text-reset">sitemap</a>
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-md-4 mb-md-0 mb-3">
//                         <h5 className="fw-normal" style={{ color: "#ffff" }}>Help Center</h5>
//                         <ul className="list-unstyled">
//                             <li><a href="#!">Link 1</a></li>
//                             <li><a href="#!">Link 2</a></li>
//                             <li><a href="#!">Link 3</a></li>
//                             <li><a href="#!">Link 4</a></li>
//                         </ul>
//                     </div>

//                     <div className="col-md-4 mb-md-0 mb-3">
//                         <h5 className="fw-normal" style={{ color: "#ffff" }}>Over services</h5>
//                         <ul className="list-unstyled">
//                             <li><a href="#!">Link 1</a></li>
//                             <li><a href="#!">Link 2</a></li>
//                             <li><a href="#!">Link 3</a></li>
//                             <li><a href="#!">Link 4</a></li>
//                         </ul>
//                     </div>
//                 </div>

//             </div>
//         </div>

//         <div className="footer-copyright text-center py-3">© 2020 Copyright:
//             <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
//         </div>

//     </footer>

// export default Footer