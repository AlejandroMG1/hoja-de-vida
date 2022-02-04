import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialButton = ({ icon, link }) => {
  return (
    <button
      type='button'
      className='side-button mx-1'
      onClick={() => {
        window.open(link);
      }}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default SocialButton;
