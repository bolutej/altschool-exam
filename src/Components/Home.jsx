import React from 'react'
import {Link}  from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="home page"/>
        <link rel="canonical" href="/"/>
      </Helmet>
      <p className='click'>Click <Link to="/counter" description="/counter" className='link-to'>Here </Link>to view the counter app</p>
    </div>
  )
}

export default Home