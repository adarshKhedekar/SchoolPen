import React from 'react'
import logo from '../../assets/logo.png'
import {SlCalender} from 'react-icons/sl'
import {PiExamFill, PiUser} from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();
    const {option} = useParams();
  return (
    <div className='navbar'>
        {/* image */}
        <div className="image-container">
            <img src={logo} alt="main-logo" />
        </div>

        {/* navigations */}
        <div className="option-container">
            {/* adding purpule background for active link */}

            <Link className={`options ${option === undefined ? 'active' : ''}`} to='/'>
                <SlCalender/>
                <span>Quiz</span>
            </Link>
            <Link className={`options ${(option === 'exam') ? 'active': ''}`} to='/exam'>
                <PiExamFill/>
                <span>Exam</span>
            </Link>
            <Link className={`options ${(option === 'user') ? 'active' : ''}`} to='/user'>
                <PiUser/>
                <span>Assign User</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
