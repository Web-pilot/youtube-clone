import React from 'react'
import Card from './components/card/Card'
import Sidebar from './components/sidebar/Sidebar'
import "./Home.css";

const Home = () => {
  return (
    <div className='container' id='home'>
        <Card />
        <Sidebar />
    </div>
  )
}

export default Home