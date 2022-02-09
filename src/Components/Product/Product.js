import React from 'react';
import '../Product/Product.css'
import user1 from '../../images/user.1.png';
import user2 from '../../images/user.2.png';
import user3 from '../../images/user.3.png';
import Vector from '../../images/Vector.png'
import Vector1 from '../../images/Vector-1.png'
import Vector2 from '../../images/Vector-2.png'
import Vector3 from '../../images/Vector-3.png'
import Vector4 from '../../images/Vector-4.png'
import Vector5 from '../../images/Vector-5.png'
import stars from '../../images/stars.png'


const Product = () => {
    return (
        <div className='container'>
            <div className='product'>
                <div className='product-text'>
                    <h1>Industry</h1>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian Mechanics</p>
                </div>
                <div className='review-cards'>
                    <div className='review-card'>
                        <img src={user1}></img>
                        <p>State helps you see how many more days you need to work to reach your financial goal of the month and year.</p>
                        <img src={stars}></img>
                    </div>
                    <div className='review-card'>
                        <img src={user2}></img>
                        <p>State helps you see how many more days you need to work to reach your financial goal of the month and year.</p>
                        <img src={stars}></img>
                    </div>
                    <div className='review-card'>
                        <img src={user3}></img>
                        <p>State helps you see how many more days you need to work to reach your financial goal of the month and year.</p>
                        <img src={stars}></img>
                    </div>
                </div>
                <div className='product-vector'>
                    <img src={Vector}></img>
                    <img src={Vector1}></img>
                    <img src={Vector2}></img>
                    <img src={Vector3}></img>
                    <img src={Vector4}></img>
                    <img src={Vector5}></img>
                </div>
                <div className='subscribe-card'>
                    <h2>Subscribe For Latest Newsletter</h2>
                    <div>
                        <input type='text'placeholder='Your Email'></input>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
