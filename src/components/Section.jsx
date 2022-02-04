import React from 'react';

const Section = ({ tittle, content = [], sRef }) => {
  return (
    <div className='w-full my-7' ref={sRef}>
      <div
        className='w-fit bg-purple-400 shadow-lg'
        style={{ borderTopRightRadius: '15px' }}
      >
        <span className='text-2xl leding-8 font-semibold px-2'>{tittle}</span>
      </div>
      <div
        className='border-solid border-2 border-purple-400 py-3 px-6 shadow-md text-xl leading-7'
        style={{
          borderTopRightRadius: '15px',
          borderBottomLeftRadius: '15px',
          borderBottomRightRadius: '15px',
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Section;
