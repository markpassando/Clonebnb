import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import { selectAllReviews } from '../../reducers/selectors';
import ReviewIndex from './ReviewIndex';
import { showModal } from '../../actions/modal_actions';
import ReviewFormContainer from './form/ReviewFormContainer';

const mapStateToProps = (state) => {
  return ({
    reviews: selectAllReviews(state),
    currentUser: state.session.currentUser

  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchReviews: (roomId) => dispatch(fetchReviews(roomId)),
    showCreateReview: () => dispatch(showModal(<ReviewFormContainer formType={'signup'}/>)),
    showEditReview: () => dispatch(showModal(<ReviewFormContainer formType={'login'}/>))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
