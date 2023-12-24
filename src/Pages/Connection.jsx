import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./Connection.css"
const Connection = () => {
    return (
        <div className='connectionAll'>
            <Header />
            <div className='connectionContainer'>
                <h1 className='contact'>Contact</h1>
                <div className='contactInformation'>
                    <div>
                        <h4>Easypeasy.com</h4>
                        <p>Azerbaijan, Baku </p>
                        <p>Memar Ajami</p>
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <p>+994 50 349 20 34</p>
                    </div>
                </div>
                <br />
                <br />
                <h2>Contact form</h2>
                <br />
                <div className='formContainer'>
                    <form action="">
                        <label htmlFor="">
                            <p>Your Name</p>
                        <input type="text" required/>
                        </label>
                        <br />
                        <label htmlFor="">
                            <p>Email</p>
                            <input type="email" required/>
                        </label>
                        <br />
                        <label htmlFor="">
                            <p>Letter</p>
                            <textarea name="" id="" cols="30" rows="10" required></textarea>
                        </label>
                        <br />
                        <button className='contactSubmit'>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Connection