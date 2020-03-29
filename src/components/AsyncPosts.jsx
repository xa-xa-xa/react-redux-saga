import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';

import Post from './Post';
import Spinner from './Spinner';

const AsyncPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => {
    return state.app.loading;
  });

  if (loading) return <Spinner />;

  if (!posts.length) {
    return (
      <button
        onClick={() => dispatch(fetchPosts())}
        className='btn btn-primary'>
        Download posts
      </button>
    );
  }
  return posts.map(post => <Post post={post} key={post.id} />);
};

export default AsyncPosts;
