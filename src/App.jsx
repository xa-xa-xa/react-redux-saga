import React from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className='container pt-3'>
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col'>
          <h2>Synchronous Posts</h2>
          <Posts posts={[]} />
        </div>
        <div className='col'>
          <h2>Asynchronous Posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
