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
    const { title } = this.state;

    // check if empty post
    if (!title.trim())
      return this.props.showAlert('Title of a post cannot be empty!');

    const newPost = {
      title,
      id: Date.now().toString()
    };

    this.props.createPost(newPost);
    this.setState({ title: '' });
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
        <div className='form-group'>
          <label htmlFor='title'>Post's header</label>
          <div className='input-group mb-3'>
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.onChangeInputHandler}
              className='form-control'
              placeholder='Create new post here...'
              aria-label='Create new post here...'
              aria-describedby='button-addon2'
            />
            <div className='input-group-append'>
              <button
                className='btn btn-outline-primary bg-light'
                type='submit'
                id='button-create-post'>
                create
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = { createPost, showAlert };

const mapStateToProps = state => ({ alert: state.app.alert });

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
