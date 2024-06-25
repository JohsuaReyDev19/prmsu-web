import React from 'react'
import './Ourlocation.css'
const Ourlocation = () => {
  return (
    <div className='gmap location'>
            <h1>Our Location</h1>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.767874785557!2d119.92331097489492!3d15.657344584964038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33940fe4d393eac9%3A0xef107ce4facf7bc3!2sPRMSU%20CANDELARIA%20CAMPUS!5e0!3m2!1sen!2sph!4v1719296431809!5m2!1sen!2sph" className='map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Ourlocation
