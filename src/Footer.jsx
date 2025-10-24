import React from 'react';
import { Instagram, Youtube, Music, MapPin, Phone, Mail, ExternalLink, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    // { name: 'Music', href: '#music' },
    // { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const musicalServices = [
    'Live Performances',
    'Studio Recording',
    'Music Concerts',
    'Private Functions'
  ];

 const handleSocialNav = (url) => {
    window.open(url, '_blank'); 
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:neetv7990@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919951155742';
  };

  return (
    <footer className="singer-footer">
      <div className="singer-footer__container">
        
        {/* Main Footer Content */}
        <div className="singer-footer__main">
          
          {/* Brand Section */}
          <div className="singer-footer__brand">
            <div className="singer-footer__brand-content">
              <h3 className="singer-footer__logo">Burgula Laxman</h3>
              <p className="singer-footer__tagline">Professional Playback Singer</p>
              <p className="singer-footer__description">
                Bringing melodies to life with passion and soul. Specialized in Telugu folk, classical, and contemporary music with performances across India.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="singer-footer__social">
              <h5 className="singer-footer__social-title">Follow My Journey</h5>
              <div className="singer-footer__social-buttons">
                {/* <button 
                  className="singer-footer__social-btn singer-footer__social-btn--instagram"
                  onClick={() => handleSocialNav('instagram')}
                  aria-label="Follow on Instagram"
                >
                  <Instagram size={20} />
                  <span className="singer-footer__social-text">Instagram</span>
                </button> */}
                 <button 
      className="singer-footer__social-btn singer-footer__social-btn--youtube"
      onClick={() => handleSocialNav('https://www.youtube.com/@neetv2531')}
      aria-label="Subscribe on YouTube"
    >
      <Youtube size={20} />
      <span className="singer-footer__social-text">YouTube</span>
    </button>
                {/* <button 
                  className="singer-footer__social-btn singer-footer__social-btn--facebook"
                  onClick={() => handleSocialNav('facebook')}
                  aria-label="Like on Facebook"
                >
                  <Facebook size={20} />
                  <span className="singer-footer__social-text">Facebook</span>
                </button>
                <button 
                  className="singer-footer__social-btn singer-footer__social-btn--twitter"
                  onClick={() => handleSocialNav('twitter')}
                  aria-label="Follow on Twitter"
                >
                  <Twitter size={20} />
                  <span className="singer-footer__social-text">Twitter</span>
                </button> */}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="singer-footer__section">
            <h4 className="singer-footer__title">
              <span className="singer-footer__title-text">Quick Links</span>
              <div className="singer-footer__title-line"></div>
            </h4>
            <nav className="singer-footer__nav">
              <ul className="singer-footer__nav-list">
                {navLinks.map((link, index) => (
                  <li key={index} className="singer-footer__nav-item">
                    <a href={link.href} className="singer-footer__nav-link">
                      <ExternalLink size={14} />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Musical Services */}
          <div className="singer-footer__section">
            <h4 className="singer-footer__title">
              <span className="singer-footer__title-text">Services</span>
              <div className="singer-footer__title-line"></div>
            </h4>
            <ul className="singer-footer__services-list">
              {musicalServices.map((service, index) => (
                <li key={index} className="singer-footer__services-item">
                  <Music size={14} className="singer-footer__services-icon" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="singer-footer__section">
            <h4 className="singer-footer__title">
              <span className="singer-footer__title-text">Get In Touch</span>
              <div className="singer-footer__title-line"></div>
            </h4>
            <div className="singer-footer__contact">
              <div className="singer-footer__contact-item">
                {/* <div className="singer-footer__contact-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div className="singer-footer__contact-content">
                  <span className="singer-footer__contact-label">Location</span>
                  <span className="singer-footer__contact-text">Hyderabad, Telangana<br />India</span>
                </div> */}
              </div>
              
              <button 
                className="singer-footer__contact-item singer-footer__contact-item--clickable"
                onClick={handlePhoneClick}
                aria-label="Call for bookings"
              >
                <div className="singer-footer__contact-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="singer-footer__contact-content">
                  <span className="singer-footer__contact-label">Bookings</span>
                  <span className="singer-footer__contact-text">+91 9951155742</span>
                </div>
              </button>
              
              <button 
                className="singer-footer__contact-item singer-footer__contact-item--clickable"
                onClick={handleEmailClick}
                aria-label="Email for inquiries"
              >
                <div className="singer-footer__contact-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="singer-footer__contact-content">
                  <span className="singer-footer__contact-label">Email</span>
                  <span className="singer-footer__contact-text">neetv7990@gmail.com</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="singer-footer__bottom">
          <div className="singer-footer__bottom-content">
            <p className="singer-footer__copyright">
              © {currentYear} Burgula Laxman. All rights reserved. 
            </p>
            <nav className="singer-footer__legal-nav">
              <a href="/privacy" className="singer-footer__legal-link">Privacy Policy</a>
              <span className="singer-footer__separator">•</span>
              <a href="/terms" className="singer-footer__legal-link">Terms of Service</a>
              <span className="singer-footer__separator">•</span>
              <a href="/booking-policy" className="singer-footer__legal-link">Booking Policy</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;