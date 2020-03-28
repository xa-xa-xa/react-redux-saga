import React from 'react';

const Spinner = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-end'
      style={{
        width: '100%',
        height: '100%'
      }}>
      <div
        className='spinner-border text-success'
        style={{
          width: '6rem',
          height: '6rem'
        }}
        role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
