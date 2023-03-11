import React, { useState } from 'react';
// Images
import LogoFB from '../../assets/images/facebook-logo.svg';
import LogoIN from '../../assets/images/instagram-logo.svg';
import LogoLI from '../../assets/images/linkedin-logo.svg';
import IconHome from '../../assets/images/home-icon.svg';
import IconAbout from '../../assets/images/about-icon.svg';
import IconProject from '../../assets/images/project-icon.svg';
import IconContact from '../../assets/images/contact-icon.svg';
import IconSkill from '../../assets/images/skill-icon.svg';

const socialMedia = [
  {
    name: 'Facebook',
    image: LogoFB,
    link: 'https://facebook.com',
  },
  {
    name: 'Instagram',
    image: LogoIN,
    link: 'https://instagram.com',
  },
  {
    name: 'Linkedin',
    image: LogoLI,
    link: 'https://linkedin.com',
  },
];

const pages = [
  {
    page: 'Home',
    icon: IconHome,
    link: '#Home',
  },
  {
    page: 'About',
    icon: IconAbout,
    link: '#About',
  },
  {
    page: 'Skills',
    icon: IconSkill,
    link: '#Skills',
  },
  {
    page: 'Publications',
    icon: IconProject,
    link: '#Publications',
  },
  {
    page: 'Contact',
    icon: IconContact,
    link: '#Contact',
  },
];

const NavBar = () => {
  const websiteLink = (link) => {
    window.open(link, '_blank');
  };

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleActivePages = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="navigation">
      <div className="navigation__profile-container">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Toktom Picture"
          />
        </div>
        <p>Toktom Wikiano</p>
      </div>

      <ul className="navigation__social-medias">
        {socialMedia.map((sm, i) => (
          <li key={sm.name}>
            <div
              tabIndex="0"
              onClick={() => websiteLink(sm.link)}
              onKeyDown={(event) =>
                event.key === 'Enter' ? websiteLink(sm.link) : ''
              }
            >
              <img src={sm.image} />
            </div>
          </li>
        ))}
      </ul>

      <ul className="navigation__pages">
        {pages.map((nav, index) => (
          <li key={nav.page} onClick={() => handleActivePages(index)}>
            <div
              className={`navigation__pages-icons ${
                index === activeIndex ? 'active-icon' : ''
              }`}
              style={{ background: `url(${nav.icon})` }}
            />
            <a className={index === activeIndex ? 'active' : ''} href={nav.link}>
              {nav.page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
