import React from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className='container'>
      <div className='container text-white'>
        <div className='row mt-3'>
          <div className='col'>
            <PostForm />
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col'>
            <h2>Synchronous Posts</h2>
            <Posts />
          </div>
          <div className='col'>
            <h2>Asynchronous Posts</h2>
            <FetchedPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
