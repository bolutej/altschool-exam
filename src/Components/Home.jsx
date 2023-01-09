import React from 'react'
import {Link}  from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div >
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="home page"/>
        <link rel="canonical" href="/"/>
      </Helmet>
      <div className='click'>
      <h3>This is a react based counter app which has the functionalities like addition, subtraction and resetting value also editing values</h3>
        <h4>Click <Link to="/counter" description="/counter" className='link-to'>Here </Link>to view the counter app </h4></div>
    </div>
  )
}

export default Home