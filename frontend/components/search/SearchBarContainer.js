import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { withRouter } from 'react-router-dom';
import { changeFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {
  return ({

  });
};

const mapDispatchToProps = dispatch => {
  return ({
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
  });
};

export default connect(null, mapDispatchToProps)(SearchBar);
