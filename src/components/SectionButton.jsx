import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SectionButton = ({ tittle, icon, sectionRef }) => {
  return (
    <button
      type='button'
      className='my-5 text-left'
      style={{ width: '85%' }}
      onClick={() => {
        sectionRef.current.scrollIntoView();
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        className='mx-2'
        style={{ fontSize: '24px' }}
      />
      <span>{tittle}</span>
      <hr style={{ borderColor: 'black' }} />
    </button>
  );
};

export default SectionButton;
