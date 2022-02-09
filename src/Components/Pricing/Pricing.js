import React from 'react';
import '../Pricing/Pricing.css'

const Pricing = () => {
    return (
        <div className='container'>
            <div className='pricing-page'>
                <div className='pricing-text'>
                    <h1>Pricing</h1>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian Mechanics</p>
                </div>
                <div className='price-cards'>
                    <div className='price-card'>
                        <h2>FREE</h2>
                        <h3>Organize across all apps by hand</h3>
                        <h1>0 <sup>$</sup><sub>Per Month</sub> </h1>
                        <div>
                            <input type="checkbox" ></input>
                            <span ></span>
                            <label>Unlimited Products Updates</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>Unlimited Products Updates</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>Unlimited Products Updates</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>1GB cloud storage</label>
                        </div><div>
                            <input type="checkbox"/>
                            <label>Email and community support</label>
                        </div>
                        <button>Try for free</button>
                    </div>
                    <div className='price-card-mid'>
                        <h2>STANDARD</h2>
                        <h3>Organize across all apps by hand</h3>
                        <h1>9.99<sup>$</sup><sub>Per Month</sub> </h1>
                        <div>
                            <input type="checkbox"/>
                            <label>Unlimited Products Updates</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>Unlimited Products Updates</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>Unlimited Products Updates</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>1GB cloud storage</label>
                        </div><div>
                            <input type="checkbox"/>
                            <label>Email and community support</label>
                        </div>
                        <button>Try for free</button>
                    </div>
                    <div className='price-card'>
                        <h2>PREMIUM</h2>
                        <h3>Organize across all apps by hand</h3>
                        <h1>19.99 <sup>$</sup><sub>Per Month</sub> </h1>
                        <div>
                            <input type="checkbox"/>
                            <label>Unlimited Products Updates</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>Unlimited Products Updates</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>Unlimited Products Updates</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label>1GB cloud storage</label>
                        </div><div>
                            <input type="checkbox"/>
                            <label>Email and community support</label>
                        </div>
                        <button>Try for free</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;

