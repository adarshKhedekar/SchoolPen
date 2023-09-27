import React from 'react'
import Navbar from '../Navbar/Navbar'
import MainContent from '../MainContent/UserMainContent'
import Sidebar from '../SideBar/UserSideBar';
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
      <Navbar/>
      <MainContent/>
      <Sidebar/>
    </div>
  )
}

export default Home
