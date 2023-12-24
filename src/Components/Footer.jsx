import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer'>
            <form action="">
                <label htmlFor="subscribe">
                    <input type="email" id='subscribe' placeholder='Email...'/>
                </label>
                <button className='subscribe'>Subscribe</button>
            </form>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <div className='footerMain'>
                <div>
                    <h3>INFORMATION</h3>
                    <ul>
                        <li>About us</li>
                        <li>User agreement</li>
                    </ul>
                </div>
                <div>
                    <h3>CUSTOMER SERVICE</h3>
                    <ul>
                        <Link to="/contact" className='contactLink'><li>Contact</li></Link>
                        <li>Site map</li>
                    </ul>
                </div>
                <div>
                    <h3>APPENDICES</h3>
                    <ul>
                        <li>Special offers</li>
                    </ul>
                </div>
                <div>
                    <h3>MY ACCOUNT</h3>
                    <ul>
                        <li>My account</li>
                        <li>Order history</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
                <div>
                    <h3>SUPPORT</h3>
                    <ul>
                        <li>F.A.Q.</li>
                    </ul>

                </div>
                <div>
                    <h3>APPS</h3>
                    <ul>
                        <li>Iphone</li>
                        <li>Ipad</li>
                        <li>Android</li>
                    </ul>
                </div>
            </div>
            <br />
            <br />
            <hr />
            <div className='footerBottom'>
                <p>2023 easpeasy.com site operates within the framework of the Laws of the Republic of Azerbaijan</p>
                <p>Azerbaijan, Baku, Memar Ajami</p>
                <p>Contact : +994 50 349 20 34</p>
            </div>
        </div>
    )
}

export default Footer