import Image from 'next/image'
import React from 'react'
//rafc

import {Logo1} from '../public/company/1.png'
import {Logo2} from '../public/company/2.png'
import {Logo3} from '../public/company/3.png'
import {Logo4} from '../public/company/4.png'
import {Logo5} from '../public/company/5.png'

export const LOGOS = [
  <img src="company/1.png" alt="Techcrunch logo"/>, 
  <img src="company/2.png" alt="Business Insider logo"/>, 
  <img src="company/3.png" alt="The New York Times logo"/>, 
  <img src="company/4.png" alt="Forbes logo"/>, 
  <img src="company/5.png" alt="USA Today logo"/>,
  <img src="company/6.png" alt="Techcrunch logo"/>, 
  <img src="company/7.png" alt="Business Insider logo"/>, 
  <img src="company/8.png" alt="The New York Times logo"/>, 
  <img src="company/9.png" alt="Forbes logo"/>, 
  <img src="company/10.png" alt="USA Today logo"/>,
  <img src="company/11.png" alt="USA Today logo"/>
]

export const Featured = () => {
  return (
    <section className="section-featured">
      <h2 className="heading-featured-in">Clients</h2>
      <div className="relative m-auto w-[1600px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(500px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center mr-8 justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center mr-8 justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
    {/* <div className="container">
        <h2 className="heading-featured-in">Clients</h2>
        <div className="logos">
            <img src="company/1.png" alt="Techcrunch logo"/>
            <img
                    src="company/2.png"
                    alt="Business Insider logo"
            />
            <img
                    src="company/3.png"
                    alt="The New York Times logo"
            />
            <img src="company/4.png" alt="Forbes logo"/>
            <img src="company/5.png" alt="USA Today logo"/>
        </div>
    </div> */}
    </section>
  )
}
