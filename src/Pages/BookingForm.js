import React from 'react'
import SideBar from '../components/SideBar'
import backArrow from '../assets/back_arrow.png'
import hand from '../assets/hand.png'
import info_icon from '../assets/information.png'
function BookingForm() {
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className='container p-4'>
                <div className='d-flex align-items-center'>
                    <img style={{ marginRight: '1rem' }} src={backArrow}></img>
                    <h5>Requests</h5>
                </div>
            </div>
            <div className=' container card'>
                <div className='card-body'>
                    <span className=''> Offer Ancillary </span>
                    <div className=' border-bottom border-top '>
                        <div className=' d-flex  mb-3 mt-3'>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '3rem' }}>
                                <img src={hand}></img>
                                <span>porter service</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '3rem' }}>
                                <img src={hand}></img>
                                <span>porter service</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '3rem' }}>
                                <img src={hand}></img>
                                <span>porter service</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '3rem' }}>
                                <img src={hand}></img>
                                <span>porter service</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '3rem' }}>
                                <img src={hand}></img>
                                <span>porter service</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '3rem' }}>
                                <img src={hand}></img>
                                <span>porter service</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '3rem' }}>
                                <img src={hand}></img>
                                <span>porter service</span>
                            </div>

                        </div>


                    </div>
                    <div>
                        <div className='mb-3 mt-4'>
                            <span> Offer price</span>
                        </div>
                        <div>
                            <div className='mb-3'>
                                <span>Type Booking</span>
                            </div>
                            < div className='row'>
                                <div className='col-5 border-end'>

                                    <div className='card'>
                                        <div className='card-header'>
                                            Both
                                        </div>
                                        <div className='card-body'>
                                            <div className='d-flex '>
                                                <span className='car card-subtitl fw-bold me-2'>Pre-payment </span>
                                                <p className='text-muted fs-6'>full amount paid on website</p>
                                            </div>
                                            <div className='d-flex '>
                                                <span className='car card-subtitl fw-bold me-2'>Payment on Pickup </span>
                                                <p className='text-muted fs-6'>full amount paid on website</p>
                                            </div>
                                            <div className='d-flex '>
                                                <span className='car card-subtitl fw-bold me-2'>Both</span>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='col-md-3'>
                                    <div className='card' style={{ border: 'none' }}  >
                                        <div className='card-body  text-dark border-bottom' style={{ background: '#ECF4FC', border: 'none' }}>
                                            <div className='d-flex'>
                                                <span className='me-auto '>You get</span>
                                                <span className='fw-bold text-muted'>$425</span>

                                            </div>
                                            <div className='d-flex'>
                                                <span className='me-auto'>Rydeu Commison 15%</span>
                                                <span className='fw-bold text-muted'>  $75</span>

                                            </div>
                                        </div>
                                        <div className='d-flex'>
                                            <span className='me-auto fw-bold ms-3'>Total</span>
                                            <span className='fw-bold text-success'>$75</span>

                                        </div>
                                        <div className='d-flex  mt-3'>
                                            <img className='me-3' src={info_icon}
                                                style={{ height: '15px', width: '15px' }}></img>
                                            <p>Customer pays the full amount on the website while booking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='card' style={{ border: 'none' }}  >
                                        <div className='card-body  text-dark border-bottom' style={{ background: '#ECF4FC', border: 'none' }}>
                                            <div className='d-flex'>
                                                <span className='me-auto '>You get</span>
                                                <span className='fw-bold text-muted'>$425</span>

                                            </div>
                                            <div className='d-flex'>
                                                <span className='me-auto'>Rydeu Commison 15%</span>
                                                <span className='fw-bold text-muted'>  $75</span>

                                            </div>
                                        </div>
                                        <div className='d-flex'>
                                            <span className='me-auto fw-bold ms-3'>Total</span>
                                            <span className='fw-bold text-success'>$75</span>

                                        </div>
                                        <div className='d-flex mt-3'>
                                            <img className='me-3' src={info_icon}
                                                style={{ height: '15px', width: '15px' }}></img>
                                            <p>Customer pays only the commission amount on the website to reserve the booking. Balance amount is paid to the driver during pickup.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>


                </div>
                <div class="d-grid gap-2 col-2 mx-auto mt-4 mb-4" >

                    <button class="btn text-light"  style={{background:'#FF2D5C'}}type="button">Button</button>
                </div>

            </div>
        </div>
    )
}

export default BookingForm