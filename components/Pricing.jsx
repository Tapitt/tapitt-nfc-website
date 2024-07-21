import Link from 'next/link'
import React from 'react'
import {Sprout, Globe, Nfc, ClipboardPenLine} from 'lucide-react'

const linkToWhatsApp = () => {
    window.open('https://wa.me/+918849778106', '_blank');
}

export const Pricing = () => {
  return (
    <section className="section-pricing" id="services">
        <div className="container-pricing">
            <span className="subheading">Services</span>
            <h2 className="heading-secondary">
            Tailored Services: Because Your Needs Are Unique.
            </h2>
        </div>

        <div className="container-pricing grid grid--4-cols margin-bottom-md">
            <div className="pricing-plan pricing-plan--starter">
                <header className="plan-header">
                    <p className="plan-name">Basic</p>
                    {/* <p className="plan-price"><span>₹</span>399</p> */}
                </header>
                <ul className="list">
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Name</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Contact Poster</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Contact Number</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Email</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Website Link</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Company Name</span>
                    </li>
                    {/* <li className="list-item">
                        <ion-icon className="list-icon" name="close-outline"></ion-icon>
                    </li> */}
                </ul>
                <div className="plan-sing-up">
                    <a href="https://wa.me/+918849778106" target='_blank' className="btn btn--full">Contact Us</a>
                </div>
            </div>
            <div className="pricing-plan pricing-plan--starter">
                <header className="plan-header">
                    <p className="plan-name">Classic</p>
                    {/* <p className="plan-price"><span>₹</span>399</p> */}
                </header>
                <ul className="list">
                <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Basic</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Company Address</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Social Profile links</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Company Details</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Customizable Card</span>
                    </li>
                    <span className="text-[#94a1b2] ml-1 text-2xl">* Additional charges applied</span>
                    {/* <li className="list-item">
                        <ion-icon className="list-icon" name="close-outline"></ion-icon>
                    </li> */}
                </ul>
                <div className="plan-sing-up">
                    <a href="https://wa.me/+918849778106" target='_blank' className="btn btn--full">Contact Us</a>
                </div>
            </div>
            <div className="pricing-plan pricing-plan--starter">
                <header className="plan-header">
                    <p className="plan-name">Premium</p>
                    {/* <p className="plan-price"><span>₹</span>399</p> */}
                </header>
                <ul className="list">
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Classic</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Brochure</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Catalogue</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Company Details</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Customizable Card</span>
                    </li>
                    <span className="text-[#94a1b2] ml-1 text-2xl">* Additional charges applied</span>
                    {/* <li className="list-item">
                        <ion-icon className="list-icon" name="close-outline"></ion-icon>
                    </li> */}
                </ul>
                <div className="plan-sing-up">
                    <a href="https://wa.me/+918849778106" target='_blank' className="btn btn--full">Contact Us</a>
                </div>
            </div>

            <div className="pricing-plan pricing-plan--complete">
                <header className="plan-header">
                    <p className="plan-name">Premium +</p>
                    {/* <p className="plan-price"><span> ₹</span>649</p> */}
                    
                </header>
                <ul className="list">
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Premium</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Multiple Brochures</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Multiple Catalogues</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Video</span>
                    </li>
                    <li className="list-item">
                        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Customizable Card</span>
                    </li>
                    <span className="text-[#94a1b2] text-2xl">* Additional charges applied</span>
                </ul>
                <div className="plan-sing-up">
                    <a href="tel:+918849778106" className="btn btn--full">Start your journey</a>
                </div>
            </div>
        </div>

        {/* <div className="container grid">
            <aside className="plan-details">
                Prices include all applicable taxes. You can cancel at any time.
                All plans include the following:
            </aside>
        </div> */}

        <div className="container grid grid--4-cols">
            <div className="feature mt-10">
            <Globe color='#7f5af0' size={48} />
                {/* <ion-icon className="feature-icon" name="infinite-outline"></ion-icon> */}
                <p className="feature-title mt-10">Connections Amplified!</p>
            </div>
            <div className="feature mt-10">
            <Sprout color='#7f5af0' size={48} />
                <p className="feature-title mt-10">Eco-Friendly Solution</p>
            </div>
            <div className="feature mt-10">
            <Nfc color='#7f5af0' size={48} />
                <p className="feature-title mt-10">NFC Enabled</p>
            </div>
            <div className="feature mt-10">
                <div className='mr-2'>
                <ClipboardPenLine color='#7f5af0' size={48} />
                </div>
                <p className="feature-title mt-10">Efficient Reviews</p>
            </div>
        </div>
    </section>
  )
}
