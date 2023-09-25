import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import { pageLinks, socialLinks } from '../data.js';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    // console.log('hello');
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className='nav-center'>
        <div class='nav-header'>
          <h2 className='logo1'>
            my<span>Travel</span>
          </h2>
          <button type='button' onClick={toggleLinks} class='nav-toggle'>
            <FaBars />
          </button>
        </div>

        <div
          className={
            showLinks ? 'links-container show-container' : 'links-container'
          }
        >
          <ul class='links'>
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className=''>
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul class='nav-icons'>
          {socialLinks.map((link) => {
            return (
              <li>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='nav-icon'
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
