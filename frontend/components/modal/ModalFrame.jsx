import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal_actions';

const ModalFrame = ({ hideModal, visible, content }) => {debugger; return(
  <div className={ visible ? 'modal-frame' : 'modal-frame hidden' } onClick={() => hideModal}>
    <div className='modal-contents' onClick={(e) => e.stopPropagation()}>
      { content }
    </div>
  </div>
)}

const mSTP = ({modal: { visible, content }}) => ({
  visible,
  content
})

const mDTP = (dispatch) => ({
  hideModal: () => dispatch(hideModal())
})

export default connect(mSTP, mDTP)(ModalFrame);
