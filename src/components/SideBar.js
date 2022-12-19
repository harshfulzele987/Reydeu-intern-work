import React from 'react'
import '../App.css';
import logo from '../assets/newLogo.png'
import bell from '../assets/Bell.png'
import first_car from '../assets/car_icon.png'
import full_Car from '../assets/Full_car.png'
import police_man from '../assets/police.png'
import account from '../assets/account.png'
import notes from '../assets/notes.png'


function SideBar() {
    return (
        <div>
            <body id="body-pd">
                <div class="l-navbar" id="nav-bar">
                    <nav class="nav">
                        <div>
                            <a href="#" class="nav_link active">
                                <i class='bx bx-layer nav_logo-icon'></i>
                                <span class="nav_logo-name">
                                    <img src={logo}></img>
                                </span>
                            </a>
                            <div class="nav_list">
                                <a href="#" class="nav_link active">
                                    <i class='bx bx-grid-alt nav_icon'></i>
                                    <span class="nav_name">
                                        <img src={bell}></img>
                                    </span>
                                </a>
                                <a href="#" class="nav_link">
                                    <i class='bx bx-user nav_icon'></i>
                                    <span class="nav_name">
                                        <img src={first_car}></img>
                                    </span>
                                </a>
                                <a href="#" class="nav_link">
                                    <i class='bx bx-message-square-detail nav_icon'></i>
                                    <span class="nav_name">
                                        <img src={full_Car}></img>
                                    </span>
                                </a>
                                <a href="#" class="nav_link">
                                    <i class='bx bx-bookmark nav_icon'></i>
                                    <span class="nav_name">
                                        <img src={police_man}></img>

                                    </span>
                                </a>
                                <a href="#" class="nav_link">
                                    <i class='bx bx-folder nav_icon'></i>
                                    <span class="nav_name">
                                        <img src={account}></img>

                                    </span>
                                </a>
                                <a href="#" class="nav_link">
                                    <i class='bx bx-bar-chart-alt-2 nav_icon'></i>
                                    <span class="nav_name">
                                        <img src={notes}></img>

                                    </span>
                                </a> </div>

                        </div> 
                    </nav>
                </div>
            </body>
        </div>
    )
}

export default SideBar