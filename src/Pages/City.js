import React from 'react'
import NavBar from '../components/NavBar'
import HeroImage from '../assets/Dusseldolf_cover 1.png';
import Card from '../components/Card';
import Tiles from '../components/TilesCar';
import TileShoping from '../components/TileShoping';
import pocket from '../assets/Pocket.png'
import Instru from '../assets/instrument.png'
import calender from '../assets/calanderNew.png'
import Ellipse from '../assets/Ellipse .png'
import Home from '../assets/Home.png'
import Res from '../assets/Resturent.png'
import Nappels from '../assets/neppels.png'
import Footer from '../components/Footer';

function City() {
    return <>
     <NavBar />
        <section>
            <div>
                <div style={{ height: "400px", }} class='text-light'>
                    <div className='position-relative'>
                        <div className='position-absolute'>
                        <img class="card-img" style={{ filter: 'brightness(40%)' }} src={HeroImage} alt="Card image" />

                        </div>
                        <div className='container'>
                        <div class='row'>
                            <div class='col-7'>
                                <div className='col-5 position-absolute' style={{top:'8rem'}}>
                                    <h1 class="card-title">Pirvate Transfer & taxi service in Geneva</h1>
                                    <br></br>
                                    <p class="card-text" style={{fontSize:'25px'}}>Book Airport Transfer, city trasfer and hourly disposal service wit driver</p>
                                </div>

                                <div className='d-flex position-absolute bottom-50%' style={{top:'27rem'}} >
                                    <div className='me-5' >
                                        <Tiles />
                                    </div>
                                    <div>
                                        <TileShoping />

                                    </div>
                                </div>
                            </div>
                          {/* <div className='col-1'></div> */}
                            <div class='col-4'>
                                <div style={{marginTop:'5rem'}}>
                                    <Card />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                        


                    

                </div>
            </div>
        </section>
        <section>
            <div className='d-flex align-items-center justify-content-around p-5' style={{ marginTop: '15rem', backgroundColor: "#EFEFEF" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={pocket} /><br></br>
                    <span>Book and Pay </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={Instru} /><br></br>
                    <span>Book and Pay </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={calender} /><br></br>
                    <span>Book and Pay </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={pocket} /><br></br>
                    <span>Book and Pay </span>
                </div>



            </div>

        </section>
        <div className='cntainer d-flex me-3 p-4'>
            <span className='me-5 ' style={{ color: '#B9B9B9' }}>Home</span>
            <span className='me-5' style={{ color: '#B9B9B9' }}>Cites</span>
            <span className='fw-bold'>Rome</span>

        </div>
        <section>
            <div className='row p-4'>
                <div className='col-3'>
                    <div className='d-flex align-items-center'>
                        <img style={{ marginRight: '15px' }} src={Ellipse}></img>
                        <span style={{ color: '#FF8924', fontSize: '20px' }}> At Glance</span>
                    </div>
                    <ul>
                        <li className='mb-4 mt-3' style={{ color: '#898989' }}>
                            <span>Transportation in Rome</span>
                        </li>
                        <li className='mb-4' style={{ color: '#898989' }}>
                            <span>Transportation in Rome</span>
                        </li>
                        <li className='mb-4' style={{ color: '#898989' }}>
                            <span>Transportation in Rome</span>
                        </li>

                    </ul>
                </div>
                <div className='container col-9'>
                    <div>
                        <p>
                            Nestled in the heart of Italian Peninsula, Rome is the capital of the country and one of the most populated cities in Italy. From its rich architecture to rare artefacts, this city is known to possess a history like none other. The picturesque atmosphere, the cold wind blowing and the serene atmosphere is what makes Rome a must visit place for all the travel fanatics out there.
                        </p>
                        <div className='row'>
                            <div className='col-7'>
                                <p>
                                    A perfect blend of gothic ruins, jaw dropping art and lively nights, Rome sets an exemplary example for a place about how it should entertain its travellers. The city wholeheartedly welcomes travellers from a wide array of interests, from awe inspiring monuments to living life at its best, Rome will never fail to surprise you with a new place to explore
                                </p>
                                <br>
                                </br>
                                <p>
                                    A perfect blend of gothic ruins, jaw dropping art and lively nights, Rome sets an exemplary example for a place about how it should entertain its travellers. The city wholeheartedly welcomes travellers from a wide array of interests, from awe</p>
                                <p>
                                    inspiring monuments to living life at its best, Rome will never fail to surprise you with a new place to explore.
                                </p>
                            </div>
                            <div className='col-5'>
                                <img src={Home}></img>
                            </div>
                            <p>
                                The Roman Empire has been an icon when it comes to historical importance. The Roman Empire had cut the ribbons when Augustus Caesar announced to be the first emperor of Rome in 31BC and ended with the fall of Constantinople in 1453CE. Known to be the centre of the Roman Empire, Rome attracts the majority of the crowd due to its rich history and politics.

                            </p>
                            <div className='row'>
                                <div className='col-5'>
                                    <img src={Res}></img>
                                </div>
                                <div className='col-6'>
                                    <p>
                                        Referred to as ‘An Eternal City’ in the beginning of the history, Rome is seen to be a dream for music lovers due to the Parco Della Musica which is known to be one of the largest music venues in the world. Not only music, Rome has also set itself in the most wanted places to visit in the world and is the third most visited places in the entire Europe. This place has experienced arts from different periods and became a home for some of the most renowned artists such as Borromini, Bernini, Carracci and Cortona.
                                    </p>
                                </div>

                            </div>
                            <div className='mt-4'>
                                <p>
                                    Embracing the ancient art, Rome has now decided to use its innovation to give birth to contemporary art to keep enhancing their love for art and architecture, National Museum of the 21st Century Arts is a live example of that. The Italian cuisine has somehow managed to be a king of all cuisines, from the Carciofi alla romana to the Spaghetti alla carbonara- Delicious spaghetti topped with bacon, smokey eggs and pecorino is what makes it mouth watering.

                                    Rome has a series of reasons to attract you and slip you into its warm arms to rejuvenate your soul with its authentic art, awe-inspiring architecture and mouth-watering food.

                                </p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='container p-6'>
                    <div className='row mb-3 align-item-center'>
                        <h3>
                            Other Cities
                        </h3>

                        <div className='col-3'>
                            <div className='position-relative'>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{ color: '#ffff' }}>
                                    <h3>Nappels</h3>
                                </div>
                                <img style={{ borderRadius: "14px", backgroundColor: ' rgba(0, 0, 0, 0.5)' }} src={Nappels}></img>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='position-relative'>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{ color: '#ffff' }}>
                                    <h3>Nappels</h3>
                                </div>
                                <img style={{ borderRadius: "14px", backgroundColor: ' rgba(0, 0, 0, 0.5)' }} src={Nappels}></img>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='position-relative'>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{ color: '#ffff' }}>
                                    <h3>Nappels</h3>
                                </div>
                                <img style={{ borderRadius: "14px", backgroundColor: ' rgba(0, 0, 0, 0.5)' }} src={Nappels}></img>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='position-relative'>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{ color: '#ffff' }}>
                                    <h3>Nappels</h3>
                                </div>
                                <img style={{ borderRadius: "14px", backgroundColor: ' rgba(0, 0, 0, 0.5)' }} src={Nappels}></img>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <h3>

                        </h3>

                        <div className='col-3'>
                            <div className='position-relative'>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{ color: '#ffff' }}>
                                    <h3>Nappels</h3>
                                </div>
                                <img style={{ borderRadius: "14px", backgroundColor: ' rgba(0, 0, 0, 0.5)' }} src={Nappels}></img>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='position-relative'>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{ color: '#ffff' }}>
                                    <h3>Nappels</h3>
                                </div>
                                <img style={{ borderRadius: "14px", backgroundColor: ' rgba(0, 0, 0, 0.5)' }} src={Nappels}></img>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='position-relative'>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{ color: '#ffff' }}>
                                    <h3>Nappels</h3>
                                </div>
                                <img style={{ borderRadius: "14px", backgroundColor: ' rgba(0, 0, 0, 0.5)' }} src={Nappels}></img>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='position-relative'>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{ color: '#ffff' }}>
                                    <h3>Nappels</h3>
                                </div>
                                <img style={{ borderRadius: "14px", backgroundColor: ' rgba(0, 0, 0, 0.5)' }} src={Nappels}></img>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
        <section className='mt-6'>
            <Footer></Footer>
        </section>

    </>
}

export default City



{/* <div class="card-img-overlay ">

<h1 class="card-title">Pirvate Transfer & taxi service in Geneva</h1>
<p class="card-text">Book Airport Transfer, city trasfer and hourly disposal service wit driver</p>
</div> */}