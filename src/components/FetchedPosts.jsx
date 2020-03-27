import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';

import Post from './Post';
import Spinner from './Spinner';

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  if (!posts.length > 0) {
    return (
      <button
        onClick={() => dispatch(fetchPosts())}
        className='btn btn-primary'>
        Download posts
      </button>
    );
  }
  if (loading) return <Spinner />;
  return posts.map(post => <Post post={post} key={post.id} />);
};

export default FetchedPosts;
