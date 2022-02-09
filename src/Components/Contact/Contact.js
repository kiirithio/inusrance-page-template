import React from 'react';
import Contactbody from './Body/ContactBody';
import Footer from './Footer/Footer';
import '../Contact/Contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-sub'>
                <Contactbody/>
                <Footer/>
            </div>
        </div>
    );
}

export default Contact;
