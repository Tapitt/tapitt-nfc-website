import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Services = () => {
  return (
    <section className="section-meals" id="gallery">
        <div className="container center-text">
            <span className="subheading">Gallery</span>
            <h2 className="heading-secondary">
            Customize your cards from a selection of over 100 designs
            </h2>
        </div>

        <div className="container grid grid--2-cols margin-bottom-md">
            <div className="meal">
                <img
                        src="/professional.png"
                        className="meal-img"
                        alt="Professional"
                />
                <div className="meal-content">
                    <div className="meal-tags">
                        <span className="tag tag--vegetarian">Trending</span>
                    </div>
                    <p className="meal-title">Blue Topaz</p>
                    {/* <ul className="meal-attributes">
                        <li className="meal-attribute">
                            <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                            <span><strong>650</strong> clients</span>
                        </li>
                        <li className="meal-attribute">
                            <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                            <span><strong>4.9</strong> rating (537)</span>
                        </li>
                    </ul> */}
                </div>
            </div>

            <div className="meal">
                <img
                        src="/personal.png"
                        className="meal-img"
                        alt="Personal"
                />
                <div className="meal-content">
                    <div className="meal-tags">
                        <span className="tag tag--vegan">Featured</span>
                    </div>
                    <p className="meal-title">Style Sculpt</p>
                    {/* <ul className="meal-attributes">
                        <li className="meal-attribute">
                            <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                            <span><strong>400</strong> followers</span>
                        </li>
                        <li className="meal-attribute">
                            <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                            <span><strong>4.8</strong> rating (441)</span>
                        </li>
                    </ul> */}
                </div>
            </div>

                {/* <div className="diets">
                    <h3 className="heading-tertiary">Works with any anything:</h3>
                    <ul className="list">
                        <li className="list-item">
                            <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                            <span>Cafe</span>
                        </li>
                        <li className="list-item">
                            <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                            <span>Store</span>
                        </li>
                        <li className="list-item">
                            <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                            <span>Restaurant</span>
                        </li>
                        <li className="list-item">
                            <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                            <span>Hotels</span>
                        </li>
                        <li className="list-item">
                            <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                            <span>Personal</span>
                        </li>
                        <li className="list-item">
                            <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                            <span>Pet Shop</span>
                        </li>
                        <li className="list-item">
                            <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                            <span>Freelencer</span>
                        </li>
                        <li className="list-item">
                            <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                            <span>Local Shop</span>
                        </li>
                        <li className="list-item">
                            <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                            <span>Everything</span>
                        </li>
                    </ul>
                </div> */}
            </div>

        <div className="container all-recipes">
            <Link href="/gallery" className="link">See all cards &rarr;</Link>
        </div>
    </section>
  )
}
