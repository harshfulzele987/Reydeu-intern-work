import React from 'react'
import calender from '../assets/Calander.png'
import passenger from '../assets/passenger 2.png'
import email from '../assets/email.png'
import flag from '../assets/flag.png'


function Card() {
    return (
        <div class="card shadow-lg p-0 mb-5 bg-body rounded text-dark" style={{ width: "450px" }} >
            <div class='d-flex justify-content-between mb-0' style={{height:'2rem'}}>
                <div class='p-3  bg-body rounded' >
                    <div class='card-title'>
                        <div class='fw-bold' style={{color:'#FF2D5C'}}>
                            one way
                        </div>
                    </div>
                </div>
                <div class=' p-3 bg-body rounded'>
                    <div class='fw-bold'>
                        Round Trip
                    </div>
                </div>
                <div class='p-3 bg-body rounded'>
                    <div class='fw-bold'>
                        Hourly
                    </div>
                </div>
            </div>

            <div class="card-body" >
                <div class='d-flex align-self-center border-bottom mb-3'>
                    <span class='fw-bold fs-6 mt-'>Form</span>
                    <input type="text" class="form-control" style={{ border: 'none', hover: 'none' }} placeholder="(airport,hotel,address)" aria-describedby="basic-addon1" />
                </div>
                <div class='d-flex align-self-center border-bottom mb-3'>
                    <span class='fw-bold fs-6 mt-1'>To</span>
                    <input type="text" class="form-control" style={{ border: 'none', hover: 'none' }} placeholder="(airport,hotel,address)" aria-describedby="basic-addon1" />
                </div>
                <div className='d-flex align-items-sm-center mb-3 border-bottom' >
                    
                    <img src={calender} style={{ height: '20px', width:'20px' }} alt='calender' />
                    <input type="text" class="form-control" style={{ border: 'none', hover: 'none' }} placeholder="PickUp date" aria-describedby="basic-addon1" />

                    <img src={calender} alt='calender' style={{ height: '20px' , width:'20px' }} />
                    <input type="text" class="form-control" style={{ border: 'none', hover: 'none' }} placeholder="PickUp date" aria-describedby="basic-addon1" />

                </div>
                <div class='d-flex align-items-sm-center border-bottom mb-3' >
                    <img src={passenger} alt='calender' style={{ height: '25px' }} />
                    <input type="text" class="form-control" style={{ border: 'none', hover: 'none' }} placeholder="Add passanger & baggaage" aria-describedby="basic-addon1" />
                </div>
                <div class='d-flex align-items-center border-bottom mb-3' >
                    <img src={email} alt='calender' style={{ height: '25px' }} />
                    <input type="text" class="form-control" style={{ border: 'none', hover: 'none' }} placeholder="(airport,hotel,address)" aria-describedby="basic-addon1" />
                </div>
                <div class='d-flex align-items-center border-bottom mb-3'>
                    <img src={flag} alt='calender' style={{ height: '20px' , width:'25px' }} />
                    <input type="text" class="form-control" style={{ border: 'none', hover: 'none' }} placeholder="Phone Number" aria-describedby="basic-addon1" />
                </div>
                <div class="form-check mb-3" >
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label" for="flexCheckChecked">
                        Checked checkbox
                    </label>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn" style={{backgroundColor: '#FF2D5C'}} type="button">Button</button>

                </div>

            </div>
        </div>
    )
}

export default Card