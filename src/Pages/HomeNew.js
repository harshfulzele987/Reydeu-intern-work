import React from 'react'
import NavBar from '../components/NavBar'
import BgImage from '../assets/Rectangle.png'
import Question from '../assets/Question.png'
import Location from '../assets/Location.png';
import WhatsApp from '../assets/whatsapp.png'
import Telegram from '../assets/Telegram.png'

function HomeNew() {
  return (
    <div>
            <NavBar />
            <div className='position-relative'>
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
                <div class="card shadow p-6" style={{ width: '840px' ,height: '7rem' }}>
                    <div className='row p-3'>
                        <div className='col-sm-2'>
                            <img src={Location}></img>
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

            <div className='container position-relative' style={{ bottom: '-2rem', left: '10rem', marginTop: '4rem' }}>
            <div class="card shadow p-6" style={{ width: '840px' ,height: '7rem' }}>
                    <div className='row p-3'>
                        <div className='col-sm-2'>
                            <img src={Location}></img>
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

            <div className='container position-relative' style={{ bottom: '-2rem', left: '10rem', marginTop: '4rem', marginBottom: '4rem' }}>
            <div class="card shadow p-6" style={{ width: '840px' ,height: '7rem' }}>
                    <div className='row p-3'>
                        <div className='col-sm-2'>
                            <img src={Location}></img>
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

  )
}

export default HomeNew