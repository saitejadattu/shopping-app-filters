import React from 'react'
import "./index.css"
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer-bg-container'>
            <div className='footer-container'>
                <div className='contact-and-info-container'>
                    <div>
                        <h1>Be the first to know</h1>
                        <p>Sign up for updates from mettā muse.</p>
                        <div>
                            <input type="text" placeholder="Enter your e-mail..." className='footer-input-element' />
                            <button className='footer-input-button'>Subscribe</button>
                        </div>
                    </div>
                    <div>
                        <h1>CONTACT US</h1>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                        <h1>Currency</h1>
                        <div className='footer-american-png'>
                            <img className='american-png' alt="img" src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1734001676/United_States_of_America_US_pwoqlk.png" />
                            <p>USD</p>
                        </div>
                        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
                <hr />
                <div className='foooter-about-container'>
                    <div>
                        <h1>mettā muse</h1>
                        <p>About Us</p>
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Boutiques</p>
                        <p>Contact Us</p>
                        <p>EU Compliances Docs</p>
                    </div>
                    <div>
                        <h1>Quick Links</h1>
                        <p>Orders & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refunds</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div>
                        <h1>Follow Us</h1>
                        <div className='insta-and-linkedin-pngs'>
                            <AiFillInstagram className='insta-png' />
                            <FaLinkedin className='insta-png' />
                        </div>
                        <h1>mettā muse Accepts</h1>
                        <div className='footer-company-logo-container'>
                            <div className='footer-company-logo'>
                                <img className='company-png' alt="img" src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1734003683/Group_136187_dmz3zh.png" />
                            </div>
                            <div className='footer-company-logo'>
                                <img className='company-png' alt="img" src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1734004659/Group_136189_gdw1zv.png" />
                            </div>
                            <div className='footer-company-logo'>
                                <img className='company-png' alt="img" src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1734004690/Group_136191_kgcnot.png" />
                            </div>
                            <div className='amex-div'>
                                <img className='amex' alt="img" src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1734004987/Vector_i4cvpl.png" />
                            </div>
                            <div className='footer-company-logo'>
                                <img className='company-png' alt="img" src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1734004817/Group_sg7srv.png" />
                            </div>
                            <div className='phonepay-div'>
                                <img className='phonepay' alt="img" src="https://res.cloudinary.com/ddruw0mnk/image/upload/v1734004989/Vector_lf3ntz.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer