import React from 'react';
import '../Home/Home.css';
import Body from './Body/Body';
import Navbar from './NavBar/NavBar';


const Home = () => {
    return (
        <div className='homepage'>
            <div className='container'>
                <Navbar/>
                <Body/>
            </div>
            
        </div>
    );
}

export default Home;
