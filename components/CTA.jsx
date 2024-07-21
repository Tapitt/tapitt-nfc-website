import React from 'react'

const linkToWhatsApp = () => {
    window.open('https://wa.me/+918849778106', '_blank');
}
export const CTA = () => {
  return (
    <section className="section-cta" id="cta">
        <div className="container">
            <div className="cta">
                <div className="cta-text-box">
                    <h2 className="text-5xl font-bold text-sky-50">Experience the Future of Networking and customer interactions:
</h2>
                    <p className="cta-text pt-8">
                    Say goodbye to paper cards, get your personalized digital business card today with Tapitt. 
                    </p>

                    <form className="cta-form" name="sign-up">
                        <div>
                            <label for="full-name">WhatsApp</label>
                            <a href='https://wa.me/+918849778106' target='_blank' className='text-3xl text-sky-50'>+91 8849778106</a>
                            
                        </div>

                        <div>
                            <label for="email">Email address</label>
                            <a href='mailto:tapitt.digital@gmail.com' target='_blank' className='text-3xl text-sky-50'>tapitt.digital@gmail.com</a>
                        </div>

                        <button className="btn btn--form bg-black" onClick={linkToWhatsApp}>Contact us</button>

                        {/* <!-- <input type="checkbox" />
                        <input type="number" /> --> */}
                    </form>
                </div>
                <div
                        className="cta-img-box"
                        role="img"
                        aria-label="CTA Image"
                ></div>
            </div>
        </div>
    </section>
  )
}
