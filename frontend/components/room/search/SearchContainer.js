import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/room_actions';
import RoomIndex from './RoomIndex';
import { selectAllRooms } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    rooms: selectAllRooms(state),
    // currentbench: selectSingleBench(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchRooms: () => dispatch(fetchRooms())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomIndex);
