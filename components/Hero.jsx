import React, { useEffect } from 'react';
import Link from 'next/link';
import { Model } from './Model';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber'
import HeroImage from "../public/Hero.gif"
import Spline from '@splinetool/react-spline';



export const Hero = () => {
    useEffect(() => {
        const sectionHeroEl = document.querySelector(".section-hero");
      
        const obs = new IntersectionObserver(
          function (entries) {
            const ent = entries[0];
            console.log(ent);
      
            if (ent.isIntersecting === false) {
              document.body.classList.add("sticky");
            } else {
              document.body.classList.remove("sticky");
            }
          },
          {
            // In the viewport
            root: null,
            threshold: 0,
            rootMargin: "-80px",
          }
        );
        obs.observe(sectionHeroEl);
      }, []);
       // Empty dependency array ensures the effect runs only once after mounting

  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            Connecting the World with a Tap.
          </h1>
          <p className="hero-description">
          Unlock seamless networking opportunities with Tapitt's Digital business cards. From brochures to business cards and catalogs to social media links -
          share all your business details with just a single tap, maximizing your networking potential.

          </p>
          <Link href="#cta" className="btn btn--full margin-right-sm">Start your journey</Link>

          <Link href="#how" className="btn btn--outline">Learn more &darr;</Link>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src="img/customers/customer-1.jpg" alt="Customer photo"/>
              <img src="img/customers/customer-2.jpg" alt="Customer photo"/>
              <img src="img/customers/customer-3.jpg" alt="Customer photo"/>
              <img src="img/customers/customer-4.jpg" alt="Customer photo"/>
              <img src="img/customers/customer-5.jpg" alt="Customer photo"/>
              <img src="img/customers/customer-6.jpg" alt="Customer photo"/>
            </div>
            <p className="delivered-text">
              <span>250+ </span>cards delivered!
            </p>
          </div>
          <div className='inline-block'>
  <p className='mt-10 text-2xl text-green-600'>
    2500+ paper cards avoided and more than 100 number of trees saved by using Tapitt Cards.
    <img src='Tree.svg' alt='tree' className='tree-img inline pl-3' width={25} />
    <img src='Tree.svg' alt='tree' className='tree-img inline pl-3' width={25} />
  </p>
</div>

          <span class="icon-[noto--deciduous-tree]"></span>
        </div>
        <div className="hero-img-box">
        <div className='hero-img'>
          <div className='hero-mobile'>
          <Image src={HeroImage} className="hero-img" alt="Tapitt hero image" height={800} width={1000}  />
          </div>
          <div className='hero-desktop'>
        <Spline scene="https://prod.spline.design/hFOqxgrMrvnpxUhk/scene.splinecode" />
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};
