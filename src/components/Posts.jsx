import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className='text-center'>No posts here yet...</p>;
  }
  return posts.map(post => <Post post={post} key={post.id} />);
};

const mapStateToProps = state => {
  console.log(state);

  return { syncPosts: state.posts.posts };
};

export default connect(mapStateToProps, null)(Posts);
