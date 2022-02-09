import React from 'react';
import '../../Contact/Body/ContactBody.css'
import map from '../../../images/pngwing 1.png'
import contactcover from '../../../images/contact-cover.2.png'

const Contactbody = () => {
    return (
        <div className='body-cont'>
            <div className='body1'>
                <div className='body1-text'>
                    <h2>We Have Branches All Over The World</h2>
                    <p>The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th century, which gave some indications about how small things do behave, produced an icreasing confusion which was Heisenberg, and Born.</p>
                </div>
                <img src={map}></img>
            </div>
            <div className='body2'>
                <img src={contactcover}></img>
                <form>
                    <h3 style={{textAlign :"center"}}>Book Appointment</h3>
                    <label>Name*</label>
                    <input type='text' placeholder='Full Name*'></input>
                    <label>Email address*</label>
                    <input type='text' placeholder='example@gmail.com'></input>
                    <label>Department*</label>
                    <select><option>Please Select</option></select>
                    <label>Time*</label>
                    <select><option>4:00 Available</option></select>
                    <button>Book Appointment</button>
                </form>
            </div>
            <div className='body3'>
                <div className='body3-text'>
                    <h3>Consulting Agency For Your Business</h3>
                    <p>the quick fox jumps over the lazy dog</p>
                </div>
                <button>Contact Us</button>
            </div>
        </div>
    );
}

export default Contactbody;
