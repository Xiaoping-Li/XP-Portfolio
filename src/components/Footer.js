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
      <div className="contact-list">
        <div className="list-item">
          <FontAwesomeIcon icon={faGithubSquare} size="3x" inverse />
          <span className="item-name">GITHUB</span>
        </div>
        <div className="list-item">
          <FontAwesomeIcon icon={faLinkedin} size="3x" inverse />
          <span className="item-name">LINKEDIN</span>
        </div>
        <div className="list-item">
          <FontAwesomeIcon icon={faYoutubeSquare} size="3x" inverse />
          <span className="item-name">YOUTUBE</span>
        </div>
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