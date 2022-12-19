import React from 'react'
import car_first from '../assets/first_car.png'
import car_second from '../assets/second_car.png';

function Tiles() {
    return (
        <div class="card shadow-sm p-3 mb-5 bg-body rounded" style={{ height: '130px', width: '275px' }}>
            <div class="card-body p-0">
                <div className='row'>

                    <div className='col text-dark'>
                        <div  >
                            <img src={car_second}  style={{ height: '55px', width: '85px' }}/>

                        </div>
                        <div >
                            <img src={car_first} style={{ height: "45px", width: '65px', position: 'absolute', top: '35px' }} />
                        </div>


                    </div>
                    <div className='col text-dark'>
                        <div style={{}}>
                            <p>Hire <span className='fw-bold'>mini Bus</span> & <span className='fw-bold'>Coach/Bus</span></p>
                            <button type="button" class="btn btn-outline-primary">Primary</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiles