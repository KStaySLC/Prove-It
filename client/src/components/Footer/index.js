import React from 'react';
import '../../static/footer.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
      <div className="footer">
        {location.pathname !== '/' && (
          <button
            className="backBtn"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Tech Thoughts team.
        </h4>
      </div>
  );
};

export default Footer;
