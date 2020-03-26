import React from 'react';

const Post = ({ post }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Post title here {post.title}</h5>
        <div className='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime!
        </div>
      </div>
    </div>
  );
};

export default Post;
