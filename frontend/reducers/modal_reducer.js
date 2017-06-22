import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/modal_actions';

const defaultState = {
  visible: false,
  contents: null,
};


const modalReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_MODAL:
      return { visible: true, content: action.contents }

    case HIDE_MODAL:
      return defaultState;

    default:
      return state;
  }

};

export default modalReducer;
