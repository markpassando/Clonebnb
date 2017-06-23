import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal_actions';

const ModalFrame = ({ hideModal, visible, content }) => (
  <div className={ visible ? 'modal-frame' : 'modal-frame hidden' } onClick={hideModal}>
      { content }
  </div>
)

const mapStateToProps = ({modal: { visible, content }}) => ({
  visible,
  content
})

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalFrame);
