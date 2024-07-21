import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { MenuOutline, CloseOutline } from 'react-ionicons';

export const Header = () => {
  const btnNavRef = useRef(null);
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        !btnNavRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className={`header ${isOpen ? 'nav-open' : ''}`} ref={headerRef}>
      <Link href="#">
        <img className="logo" alt="Tapitt logo" src="/logo.svg" />
      </Link>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li><a className="main-nav-link text-sky-50" href="#how" onClick={closeNav}>How it works</a></li>
          <li><a className="main-nav-link" href="#gallery" onClick={closeNav}>Gallery</a></li>
          <li><a className="main-nav-link" href="#testimonials" onClick={closeNav}>Testimonials</a></li>
          <li><a className="main-nav-link" href="#services" onClick={closeNav}>Services</a></li>
          <li><a className="main-nav-link" href="#faq" onClick={closeNav}>FAQs</a></li>
          <li><a className="main-nav-link" href="#cta" onClick={closeNav}>Contact Us</a></li>
        </ul>
      </nav>

      <button className="btn-mobile-nav" ref={btnNavRef} onClick={toggleNav}>
        {isOpen ? (
          <CloseOutline className="icon-mobile-nav" name="close-outline" height="4.1rem" width="4.1rem" color={'#00000'} />
        ) : (
          <MenuOutline className="icon-mobile-nav" name="menu-outline" height="4.1rem" width="4.1rem" color={'#00000'} />
        )}
      </button>
    </div>
  );
};
