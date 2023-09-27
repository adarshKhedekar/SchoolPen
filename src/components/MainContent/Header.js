import React from 'react'
import PropTypes from "prop-types";
import {BiBell} from 'react-icons/bi'
import userImg from '../../assets/user.png'
import './Header.css'
function Header({title}) {
  return (
    <div className='header'>
        <div className="title">
            <span>{title}</span>
        </div>
        <div className="profile-notification">
            <div className="notification"><BiBell/></div>
            <img src={userImg} alt="" />
        </div>
    </div>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
