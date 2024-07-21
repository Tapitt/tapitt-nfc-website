import Image from 'next/image'
import React from 'react'

export const Testimonials = () => {
  return (
    <section className="section-testimonials" id="testimonials">
        <div className="testimonials-container">
            <span className="text-3xl text-sky-50 mb-4 uppercase">Testimonials</span>
            <h2 className="heading-secondary">Happy Clients: Testimonials That Speak Volumes
</h2>

            <div className="testimonials">
                <figure className="testimonial">
                    <p className='text-2xl text-black font-bold mb-2'>Kanha Group</p>
                    {/* <img
                            className="testimonial-img"
                            alt="Photo of customer Dave Bryson"
                            src="company/5.png"
                    /> */}
                    <blockquote className="testimonial-text">
                    Tapitt has revolutionized how we share our brochures. With Tapitt's smart cards, printing multi-page brochures is a thing of the past. Tapitt has become our top choice for showcasing our products to our customers.

                    </blockquote>
                    <p className="testimonial-name">&mdash; Darshit Thakkar, Director</p>
                </figure>

                <figure className="testimonial">
                <p className='text-2xl text-black font-bold mb-2'>Modern Tourism</p>
                    {/* <img
                            className="testimonial-img"
                            alt="Photo of customer Ben Hadley"
                            src="company/2.png"
                    /> */}
                    <blockquote className="testimonial-text">
                    Sharing tour itineraries has never been easier. Tapitt's digital business cards streamline the process, allowing customers to access our tour details with just a tap. 

                    </blockquote>
                    <p className="testimonial-name">&mdash; Sajan Diwan, Director </p>
                </figure>

                <figure className="testimonial">
                <p className='text-2xl text-black font-bold mb-2'>Impress Digital Studio</p>
                    {/* <img
                            className="testimonial-img"
                            alt="Photo of customer Steve Miller"
                            src="company/4.png"
                    /> */}
                    <blockquote className="testimonial-text">
                    Tapitt NFC cards make accessing information effortless a true game-changer
                    </blockquote>
                    <p className="testimonial-name">&mdash; Raja Patel, Founder</p>
                </figure>

                <figure className="testimonial">
                <p className='text-2xl text-black font-bold mb-2'>Ramnath Group</p>
                    {/* <img
                            className="testimonial-img"
                            alt="Photo of customer Hannah Smith"
                            src="company/3.png"
                    /> */}
                    <blockquote className="testimonial-text">
                    Tapitt's eco-friendly approach and stylish design are unbeatable in the market.
                    </blockquote>
                    <p className="testimonial-name">&mdash; Punit Thakkar, Co-Partner</p>
                </figure>
            </div>
        </div>

        <div className="gallery">
            <figure className="gallery-item">
                <img
                        src="testimonials/1.png"
                        alt="Photo of beautifully
            arranged food"
                />
                {/* <!-- <figcaption>Caption</figcaption> --> */}
            </figure>
            <figure className="gallery-item">
                <img
                        src="testimonials/2.png"
                        alt="Photo of beautifully
            arranged food"
                />
            </figure>
            <figure className="gallery-item">
                <img
                        src="testimonials/3.png"
                        alt="Photo of beautifully
            arranged food"
                />
            </figure>
            <figure className="gallery-item">
                <img
                        src="testimonials/4.png"
                        alt="Photo of beautifully
            arranged food"
                />
            </figure>
            <figure className="gallery-item">
                <img
                        src="testimonials/5.png"
                        alt="Photo of beautifully
            arranged food"
                />
            </figure>
            <figure className="gallery-item">
                <img
                        src="testimonials/6.png"
                        alt="Photo of beautifully
            arranged food"
                />
            </figure>
            <figure className="gallery-item">
                <img
                        src="testimonials/7.png"
                        alt="Photo of beautifully
            arranged food"
                />
            </figure>
            <figure className="gallery-item">
                <img
                        src="testimonials/8.png"
                        alt="Photo of beautifully
            arranged food"
                />
            </figure>
            <figure className="gallery-item">
                <img
                        src="testimonials/9.png"
                        alt="Photo of beautifully
            arranged food"
                />
            </figure>
        </div>
    </section>
  )
}
