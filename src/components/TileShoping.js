import React from 'react'
import shoping from '../assets/Happy shopping.png'

function TileShoping() {
    return (
        <div class="card shadow-sm p-3 mb-5 bg-body rounded" style={{ height: '130px', width: '275px' }}>
            <div class="card-body p-0">
                <div className='row'>
                    <div className='col text-dark'>
                        <div  >
                            <img src={shoping} style={{ height: '90px', width: '110px' }} />
                        </div>
                    </div>
                    <div className='col text-dark'>
                        <div>
                            <p>Hire <span className='fw-bold'>mini Bus</span> & <span className='fw-bold'>Coach/Bus</span></p>
                            <button type="button" class="btn btn-outline-primary">Primary</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TileShoping