// import { useState, useEffect } from 'react';
import Header from './Header';
import background from './background.jpg';
import headshot from './headshot.png';
import { Icon } from '@iconify/react';
import linkedin from './linkedin.png';
import github from './github.png';
import youtube from './youtube.png';
import behance from './behance.png';
import instagram from './instagram.png';
import twitter from './twitter.png';
import Resume from './resume.pdf';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <img className="background-image" src={background} />
        <div className="text-container">
          <div className="text-center">
            <h1 id="greeting">
              hi, i'm <span id="brody">Brody</span>
            </h1>
            <h3 id="occupation">SOFTWARE ENGINEER</h3>
            <h3 id="location">
              <Icon icon="carbon:location-filled" inline={true} />
              Columbus, Ohio
            </h3>
            {/* <ul className="social-media-list">
            <li>
              <a href="https://www.linkedin.com/in/brodylosh/">
                <img src={linkedin} alt="LinkedIn" title="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/brodylosh">
                <img src={github} alt="Github" title="Github" />
              </a>
            </li>
            <li>
              <a href="https://youtu.be/H9oE8iUtHd0">
                <img src={youtube} alt="YouTube" title="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/brodylosh">
                <img src={behance} alt="Behance" title="Behance" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/brodylosh/">
                <img src={instagram} alt="Instagram" title="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/BrodyLosh">
                <img src={twitter} alt="Twitter" title="Twitter" />
              </a>
            </li>
          </ul> */}
            <a href={Resume} download="Brody Losh - Resume" target="_blank">
              <button id="download">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src={headshot} alt="Brody Losh Headshot" id="headshot" />
        </div>
      </div>
    </div>
  );
}

export default Home;
