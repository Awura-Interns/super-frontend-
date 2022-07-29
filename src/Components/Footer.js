import React from 'react'
import {Link}from'react-router-dom'
export default function Footer() {
  return (
    <>
    
    <section className="featured" id="featured">
        <h1 className="heading"> <span>we're here to help, and get you the best product!!!</span> </h1>
    </section>
    
    
    
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><Link to="#">about us</Link></li>
                        <li><Link to="#">our services</Link></li>
                        <li><Link to="#">privacy policy</Link></li>
    
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
    
                        <li><Link to="#">shipping</Link></li>
                        <li><Link to="#">returns</Link></li>
                        <li><Link to="#">order status</Link></li>
                        <li><Link to="#">payment options</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><Link to="#">food</Link></li>
                        <li><Link to="#">food</Link></li>
    
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                        <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    
    <Link className="scrollup show">
        <img src="spuer_image/question.png" alt="arrow up" />
    </Link>
    
        <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    
        <script src="js/script.js"></script>
        </>
      )
    }
    
  

