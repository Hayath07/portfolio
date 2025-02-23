/*
import React, { useState } from 'react';
import Link from 'next/link';

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleScroll = (e, link) => {
    e.preventDefault();
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsNavCollapsed(true); // Close the navbar on mobile after click
    }
  };

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-secondary"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >

      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <span>{title}</span>
          </a>
        </Link>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarsExample09"
        >
          <div className="navbar-nav">
            {links.map((value, index) => (
              <a
                key={index}
                href={value.link}
                className="nav-link"
                onClick={(e) => handleScroll(e, value.link)}
              >
                {value.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
*/



import React, { useState } from 'react';
import Link from 'next/link';

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav 
      className="navbar navbar-expand-sm navbar-light bg-secondary" 
      style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}
    >
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <span>{title}</span>
          </a>
        </Link>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarsExample09"
        >
          <div className="navbar-nav">
            {links.map((value, index) => (
              <Link key={index} href={value.link} legacyBehavior>
                <a className="nav-link" onClick={() => setIsNavCollapsed(true)}>
                  {value.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};