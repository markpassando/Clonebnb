import { connect } from 'react-redux';
import RoomPage from './RoomPage';
import { fetchRoom } from '../../../actions/room_actions';

const mapStateToProps = ({ rooms }) => ({
  room: rooms.entities[rooms.currentRoom],
});

const mapDispatchToProps = dispatch => ({
  fetchRoom: id => dispatch(fetchRoom(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomPage);
