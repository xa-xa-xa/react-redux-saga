import React from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import AsyncPosts from './components/AsyncPosts';
import css from './App.css';

function App() {
  return (
    <div
      className='container text-white'
      style={{ backgroundColor: '#10375c' }}>
      <div className='row mt-3'>
        <div className='col'></div>
      </div>
      <div className='row mt-4'>
        <div className='col mt-2'>
          <h2>
            <span style={{ color: '#f8fab8' }}>Synchronous </span>Posts
          </h2>
          <PostForm />

          <Posts />
        </div>
        <div className='col mt-2'>
          <h2>
            <span style={{ color: '#a1e6e3' }}>Asynchronous</span> Posts
          </h2>
          <AsyncPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
