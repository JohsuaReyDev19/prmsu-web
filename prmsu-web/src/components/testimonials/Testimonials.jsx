import React from 'react'
import './Testimonials.css'
import pic1 from '../../assets/pics1.jpg';
import pic2 from '../../assets/pics2.jpg';
import pic3 from '../../assets/pics3.jpg';
import pic4 from '../../assets/pics4.jpg';

const Testimonials = () => {
  return (
    <div className='Testimonials'>
      <h1>Testimonials</h1>
      <div className='why-prmsu'>
        <div className='unorder-list'>
        <h2>
        WHY CHOSE PRMSU <br />
        <span>CANDELARIA CAMPUS?</span>
        </h2>
        <br/>
        <ul>
            <li>Presedent Ramon Magsaysay State University has attained ISO 9001:2015 recertification.</li>
            <li>The Bachelor of Science in Information Technology program has also been granted COPOC Level accreditation by the Commision on Higher Education</li>
            <li>PRMSU, being a state university, is more affordable, has better resources and facilities, and promotes a stronger sense of community and inclusivity than non-state university.</li>
            <li>Since PRMSU is a state University , tution and other school fees are paid by the goverment, making students "Iskolar ng Bayan"</li>
        </ul>
        </div>
        <div className='gallery'>
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
            <img src={pic4} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Testimonials
