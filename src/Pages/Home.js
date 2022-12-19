import React from 'react'
import NavBar from '../components/NavBar'
import BgImage from '../assets/Rectangle.png'
import Question from '../assets/Question.png'
import Location from '../assets/Location.png';
import WhatsApp from '../assets/whatsapp.png'
import Telegram from '../assets/Telegram.png'

function Home() {
    return (
        <div>
            <NavBar />
            <div className='position-relative object-fit-cover' >
                <div className='position-absolute top-50 start-50 translate-middle'>
                    <h1>Hello, How can we help you?</h1>
                    <h4 className='ms-5'>Find Travel Guid, FAQ, Chat,</h4>
                </div>
                <div className=' container position-absolute top-100 start-50 translate-middle'>
                    <div className='row p-4 position-absolute' style={{ top: '-10rem', left: '10rem' }}>
                        <div className='col-sm-6'>
                            <div class="card shadow " style={{ width: '400px' }}>
                                <div className='row p-4'>
                                    <div className='col-sm-3'>
                                        <img src={Question}></img>
                                    </div>
                                    <div className='col-sm-9'>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold mb-2'>FAQ</span>
                                            <span>Lorem ipsum doolor sit amet</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="card shadow" style={{ width: '400px' }}>
                                <div className='row p-4'>
                                    <div className='col-sm-3'>
                                        <img src={Question}></img>
                                    </div>
                                    <div className='col-sm-9'>
                                        <div className='d-flex flex-column'>
                                            <span className='fw-bold mb-2'>FAQ</span>
                                            <span>Lorem ipsum doolor sit amet</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <img src={BgImage}></img>
            </div>
            <div className='container position-relative' style={{ bottom: '-2rem', left: '10rem' }}>
                <div class="card shadow p-6" style={{ width: '840px', height: '14rem' }}>
                    <div className='row p-3'>
                        <div className='col-sm-1'>
                            <img src={Location}></img>
                        </div>
                        <div className='col-sm-10'>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold mb-2'>FAQ</span>
                                <span>Lorem ipsum doolor sit amet</span>
                            </div>
                        </div>

                    </div>
                    <div className=' d-flex container' style={{ marginLeft: '14rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginRight: '4rem' }}>
                            <img src={WhatsApp}></img>
                            <span>WhatsApp</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginRight: '4rem' }}>
                            <img src={Telegram}></img>
                            <span>WhatsApp</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginRight: '4rem' }}>
                            <img src={WhatsApp}></img>
                            <span>WhatsApp</span>
                        </div>
                    </div>

                </div>

            </div>

            <div className='container position-relative' style={{ bottom: '-2rem', left: '10rem', marginTop: '4rem' }}>
                <div class="card shadow" style={{ width: '840px', height: '14rem' }}>
                    <div className='row p-3'>
                        <div className='col-sm-1'>
                            <img src={Location}></img>
                        </div>
                        <div className='col-sm-10'>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold mb-2'>FAQ</span>
                                <span>Lorem ipsum doolor sit amet</span>
                            </div>
                        </div>

                    </div>
                    <div className=' d-flex container' style={{ marginLeft: '14rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginRight: '4rem' }}>
                            <img src={WhatsApp}></img>
                            <span>WhatsApp</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginRight: '4rem' }}>
                            <img src={Telegram}></img>
                            <span>WhatsApp</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginRight: '4rem' }}>
                            <img src={WhatsApp}></img>
                            <span>WhatsApp</span>
                        </div>
                    </div>

                </div>

            </div>

            <div className='container position-relative' style={{ bottom: '-2rem', left: '10rem', marginTop: '4rem' }}>
                <div class="card shadow" style={{ width: '840px' }}>
                    <div className='row p-3'>
                        <div className='col-sm-1'>
                            <img src={Location}></img>
                        </div>
                        <div className='col-sm-10'>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold mb-2'>FAQ</span>
                                <span>Lorem ipsum doolor sit amet</span>
                            </div>
                        </div>

                    </div>
                    <div className='container' style={{ padding: '4rem' }}>

                        <form>
                            <div className='row'>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>

                                </div>

                            </div>

                            <div className='row'>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>

                                </div>

                            </div>

                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Comments</label>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary mt-5 align-items-center ">Submit</button>
                            </div>
                        </form>
                    </div>


                </div>

            </div>

        </div>




    )
}

export default Home