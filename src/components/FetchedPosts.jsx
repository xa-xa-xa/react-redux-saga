import React from 'react';
import Post from './Post';

const FetchedPosts = ({ posts }) => {
  if (!posts) {
    return <button className='btn btn-primary'>Download posts</button>;
  }
  return posts.map(post => <Post post={post} key={post} />);
};

export default FetchedPosts;
