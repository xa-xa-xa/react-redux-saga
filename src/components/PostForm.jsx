import React from 'react';

import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import Alert from './Alert';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;

    // check if empty post
    if (!title.trim())
      return this.props.showAlert('Title of a post cannot be empty!');

    const newPost = {
      title,
      body,
      id: Date.now().toString()
    };

    this.props.createPost(newPost);
    this.setState({ title: '' });
    this.setState({ body: '' });
  };

  onChangeInputHandler = e => {
    e.persist();
    this.setState(prev => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className='form-group d-flex flex-column'>
          <div className='mb-3 d-flex flex-column'>
            <label htmlFor='title'>Post's Title</label>
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.onChangeInputHandler}
              className='rounded-top border-light'
              placeholder='Create title for your post.'
              aria-label='Create title for your post.'
              aria-describedby='button-addon2'
            />
            <textarea
              type='text'
              name='body'
              value={this.state.body}
              onChange={this.onChangeInputHandler}
              className='rounded-bottom border-light rounded-top-0 border-gray'
              placeholder='text of your post goes here...'
              aria-label='text of your post goes here...'
              aria-describedby='button-addon2'
            />
          </div>

          {/* <div className='mb-4 d-flex flex-column'>
            <label htmlFor='title'>Post's Text</label>
          </div> */}
          <button
            className='btn btn-success btn-lg'
            type='submit'
            id='button-create-post'>
            create
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = { createPost, showAlert };

const mapStateToProps = state => ({ alert: state.app.alert });

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
