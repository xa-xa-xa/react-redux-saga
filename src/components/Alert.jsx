import React from 'react';

const Alert = ({ text }) => {
  return (
    <div
      className='alert alert-dismissible fade show text-center'
      role='alert'
      style={{ backgroundColor: '#fe346e' }}>
      {text}
    </div>
  );
};

export default Alert;
