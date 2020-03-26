import { CREATE_POST } from './types';

export function createPosts(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}
