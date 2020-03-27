import React from 'react';

const Post = ({ post }) => {
  return (
    <div className='card mb-4 text-grey'>
      <div className='card-body'>
        <h5 className='card-title text-dark'>{post.title}</h5>
        <div className='card-text text-secondary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime!
        </div>
      </div>
    </div>
  );
};

export default Post;
