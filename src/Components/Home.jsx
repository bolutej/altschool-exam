import React from 'react'
import {Link}  from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p className='click'>Click <Link to="/counter" description="/counter" className='link-to'>Here </Link>to view the counter app</p>
    </div>
  )
}

export default Home