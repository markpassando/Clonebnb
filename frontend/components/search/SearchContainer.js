import { connect } from 'react-redux';
import Search from './Search';
import { fetchRooms } from '../../actions/room_actions';
import { selectAllRooms } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {
  return ({
    rooms: selectAllRooms(state),
    // currentbench: selectSingleBench(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchRooms: () => dispatch(fetchRooms()),
    updateFilter: (bounds) => dispatch(updateFilter(bounds))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
