import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div>
            <table>
                <tr>
                    <th>Company Info</th>
                    <th>Legal</th>
                    <th>Features</th>
                    <th>Resources</th>
                    <th>Get In Touch</th>
                </tr>
                <tr>
                    <td>About Us</td>
                    <td>About Us</td>
                    <td>Business Marketing</td>
                    <td>IOS & Android</td>
                    <td>+254793018396</td>
                </tr>
                <tr>
                    <td>Carrier</td>
                    <td>Carrier</td>
                    <td>User Analytic</td>
                    <td>Watch a Demo</td>
                    <td>10100 Nyeri</td>
                </tr>
                <tr>
                    <td>We are hiring</td>
                    <td>We are hiring</td>
                    <td>Live Chat</td>
                    <td>Customers</td>
                    <td>kiirithio@outlook.com</td>
                </tr>
                <tr>
                   <td>Blog</td> 
                   <td>Blog</td> 
                   <td>Unlimited Support</td> 
                    <td>API</td>
                </tr>
            </table>
            <p style={{fontSize:"14px"}}>Made With Love By Kiirithio Waweru,Not All Rights Reserved.</p>
        </div>
    );
}

export default Footer;
