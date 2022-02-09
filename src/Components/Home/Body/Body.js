import React from 'react';
import '../Body/Body.css';
import usergroup from '../../../images/icons8-user-account-40.png';

const Body = () => {
    return (
        <div>
            <div className='body-text'>
                <h1>We Ensure A Best Insurance Service</h1>
                <h2>We know how large objects will act, but things on a small scale just do not act that way.</h2>
                <div className='body-buttons'>
                    <button className='btn1'>Get Quote Now</button>
                    <button className='btn2'>Learn More</button>
                </div>
            </div>
            <div className='cards3'>
                <div className='card'>
                <img src={usergroup}></img>
                    <h3>Peace of Mind</h3>
                    <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className='card'>
                <img src={usergroup}></img>
                    <h3>Set for Life</h3>
                    <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className='card2'>
                <img src={usergroup}></img>
                    <h3>100% Satisfaction</h3>
                    <p>the quick fox jumps over the lazy dog</p>
                </div>
            </div>
        </div>
    );
}

export default Body;
