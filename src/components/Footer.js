import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithubSquare, 
  faLinkedin, 
  faYoutubeSquare,  
} from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../CSS/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">Full Stack Dev | Bay Area San Francisco</div>
      <div className="contact-list">
        <a className="list-item" href="https://github.com/Xiaoping-Li" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" inverse />
          <span className="item-name">GITHUB</span>
        </a>
        <a className="list-item" href="https://www.linkedin.com/in/xiaoping-li-21405594/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" inverse />
          <span className="item-name">LINKEDIN</span>
        </a>
        <a className="list-item" href="https://www.youtube.com/channel/UC8DxiP44q-zWFkVXDKVEbFg?view_as=subscriber" target="_blank">
          <FontAwesomeIcon icon={faYoutubeSquare} size="2x" inverse />
          <span className="item-name">YOUTUBE</span>
        </a>
        {/* <div className="list-item">
          <FontAwesomeIcon icon={faEnvelope} size="2x" inverse />
          <span className="item-name">EMAIL</span>
        </div>   */}
      </div>
      <div className="copyright">&copy;XP.L</div>
    </div>
  );
}

export default Footer;