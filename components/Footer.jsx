import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="container grid grid--footer">
        <div className="logo-col">
            <Link href="#" className="footer-logo">
                <img className="logo" alt="Omnifood logo" src="/logo.svg"/>
            </Link>

            <ul className="social-links">
                <li>
                    <Link className="footer-link" target="_blank" href="https://www.instagram.com/tapitt.digital/"
                    >
                        <ion-icon className="social-icon" name="logo-instagram"></ion-icon
                        >
                    </Link>
                </li>
                <li>
                    <Link className="footer-link" target="_blank" href="https://www.facebook.com/profile.php?id=61555978989738&mibextid=uzlsIk"
                    >
                        <ion-icon className="social-icon" name="logo-facebook"></ion-icon
                        >
                    </Link>
                </li>
                <li>
                    <Link className="footer-link" href="https://www.linkedin.com/company/tapitt-digittal/" target="_blank"
                    >
                        <ion-icon className="social-icon" name="logo-linkedin"></ion-icon
                        >
                    </Link>
                </li>
            </ul>

            <p className="copyright">
                Copyright &copy; <span className="year">2024</span> by Tapitt, Inc.
                All rights reserved.
            </p>
        </div>

        <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
                <p className="address">
                    Vadodara
                </p>
                <p>
                    <Link className="footer-link" href="tel:+918849778106">+91 8849778106</Link>
                    <br/>
                    <Link className="footer-link" href="mailto:tapitt.digital@gmail.com">tapitt.digital@gmail.com</Link>
                </p>
            </address>
        </div>
    </div>
</footer>
  )
}
