import React from 'react';

const Spinner = () => {
  return (
    <div
      className='spinner-border text-success'
      style={{ width: '3rem', height: '3rem' }}
      role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default Spinner;
