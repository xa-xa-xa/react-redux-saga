import React from 'react';
import moduleName from '../redux/types';

const Alert = ({ text }) => {
  return (
    <div
      className='alert alert-warning alert-dismissible fade show'
      role='alert'>
      {text}
    </div>
  );
};

export default Alert;
