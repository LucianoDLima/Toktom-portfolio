import React, { useEffect, useState } from 'react';
// Images
import LogoRG from '../../assets/images/researchgate-logo.svg';
import LogoLI from '../../assets/images/linkedin-logo.svg';
import LogoGH from '../../assets/images/github-logo.svg';
import IconHome from '../../assets/images/home-icon.svg';
import IconAbout from '../../assets/images/about-icon.svg';
import IconProject from '../../assets/images/project-icon.svg';
import IconContact from '../../assets/images/contact-icon.svg';
import IconSkill from '../../assets/images/skill-icon.svg';

const socialMedia = [
  {
    name: 'Github',
    image: LogoGH,
    link: 'https://github.com/Toktom',
  },
  {
    name: 'Researchgate',
    image: LogoRG,
    link: 'https://www.researchgate.net/profile/Michael-Ackermann-3',
  },
  {
    name: 'Linkedin',
    image: LogoLI,
    link: 'https://www.linkedin.com/in/michael-markus-ackermann/',
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

const NavBar = ({ navBarHide, tab }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const websiteLink = (link) => {
    window.open(link, '_blank');
  };

  const handleActivePages = (index) => {
    setActiveIndex(index);
  };

  // Responsible for making last selected navbar option active based on the URL, if none is active, then the first will automatically be (Home)
  useEffect(() => {
    const hash = window.location.hash;
    const index = pages.findIndex((page) => page.link === hash);
    setActiveIndex(index !== -1 ? index : 0);
  }, []);

  return (
    <nav className={`navigation ${navBarHide}`}>
      <div className="navigation__profile-container">
        <div className="img">
          <img src="https://github.com/Toktom.png" alt="Toktom Picture" />
        </div>
        <p>Michael Ackermann</p>
      </div>

      <ul className="navigation__social-medias">
        {socialMedia.map((sm, i) => (
          <li key={sm.name}>
            <div
              tabIndex={tab}
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
            <a
              className={index === activeIndex ? 'active' : ''}
              href={nav.link}
              tabIndex={tab}
            >
              {nav.page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
