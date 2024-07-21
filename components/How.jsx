import Image from 'next/image'
import React from 'react'

export const How = () => {
  return (
    <section className="section-how" id="how">
        <div className="container">
            <span className="subheading">How it works</span>
            <h2 className="heading-secondary">
                Your Personalized Card in 3 simple steps
            </h2>
        </div>

        <div className="container grid grid--2-cols grid--center-v">
            {/* <!-- STEP 01 --> */}
            <div className="step-text-box">
                <p className="step-number">01</p>
                <h3 className="heading-tertiary">
                    Tell us what you want
                </h3>
                <p className="step-description">
                Never again waste time thinking about making papercards! Tapitt crafts 100% personalized digital cards just for you. Add all the information and links you want and just share it with a tap.

                </p>
            </div>

            <div className="step-img-box">
                <img
                        src="/step1_big_.png"
                        className="step-img"
                        alt="Questions Image"
                />
            </div>

            {/* <!-- STEP 02 --> */}
            <div className="step-img-box">
                <img
                        src="/step2.png"
                        className="step-img"
                        alt="Card Image"
                />
            </div>
            <div className="step-text-box">
                <p className="step-number">02</p>
                <h3 className="heading-tertiary">Customize Your Card and Looks</h3>
                <p className="step-description">
                Customize your card's design to showcase your style and preferences, creating a unique appearance that stands a cut above the rest. Seamlessly integrate it with your branding for a lasting impression that sets you apart.

                </p>
            </div>

            {/* <!-- STEP 03 --> */}
            <div className="step-text-box">
                <p className="step-number">03</p>
                <h3 className="heading-tertiary">Instantly Access Details with just a Tap</h3>
                <p className="step-description">
                Welcome to the  world of convenience with our NFC-enabled cards. Effortlessly retrieve product details, description and links with just a tap
Making things easier than ever.

                </p>
            </div>
            <div className="step-img-box">
                <img
                        src="/step3_new.png"
                        className="step-img"
                        alt="iPhone image with example"
                />
            </div>
        </div>
    </section>
  )
}
