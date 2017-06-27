import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import { selectAllReviews } from '../../reducers/selectors';
import ReviewIndex from './ReviewIndex';

const mapStateToProps = (state) => {
  return ({
    reviews: selectAllReviews(state),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchReviews: (roomId) => dispatch(fetchReviews(roomId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
