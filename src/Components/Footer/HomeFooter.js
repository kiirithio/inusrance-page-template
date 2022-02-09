import React from 'react';
import './HomeFooter.css';
import usergroup from '../../images/icons8-user-account-40.png';
import bookmark from '../../images/icons8-bookmark-64.png';
import book from '../../images/icons8-book-50.png';

const Homefooter = () => {
    return (
        <div className='container'>
            <div className='footer-cards'>
                <div className='footer-card'>
                <img src={book}></img>
                    <h3>Peace of Mind</h3>
                    <p>So it really behaves like neither. Now we have given up.</p>
                </div>
                <div className='footer-card'>
                <img src={bookmark}></img>
                    <h3>Set for Life</h3>
                    <p>They were used to create the machines that launched.</p>
                </div>
                <div className='footer-card'>
                    <img src={usergroup}></img>
                    <h3>100% Satisfaction</h3>
                    <p>So it really behaves like neither. Now we have given up.</p>
                </div>
            </div>
        </div>
    );
}

export default Homefooter;
