import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal_actions';

const ModalFrame = ({ hideModal, visible, content }) => (
  <div className={ visible ? 'modal-frame' : 'modal-frame hidden' } onClick={hideModal}>
    <span className='modal-contents' onClick={(e) => e.stopPropagation()}>
      { content }
    </span>
  </div>
)

const mSTP = ({modal: { visible, content }}) => ({
  visible,
  content
})

const mDTP = (dispatch) => ({
  hideModal: () => dispatch(hideModal())
})

export default connect(mSTP, mDTP)(ModalFrame);
