import { SHOW_SPINNER, HIDE_SPINNER, SHOW_ALERT, HIDE_ALERT } from './types';

const initialState = {
  loading: false,
  alert: null
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return { loading: true };
    case HIDE_SPINNER:
      return { loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
