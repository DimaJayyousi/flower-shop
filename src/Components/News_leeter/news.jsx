import React from 'react'
import './news.css'
const news = () => {
  return (
    <div className='news'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email address'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default news
