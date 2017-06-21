import React from 'react';

// import FilterForm from './filter_form';
import RoomIndex from '../room/RoomIndex';
import RoomMap from './../room/map/RoomMap';

const Search = ({ rooms, fetchRooms }) => (
  <div className="user-pane">
      <RoomMap
        rooms={rooms}
      />
    <RoomIndex
      rooms={rooms}
      fetchRooms={fetchRooms}
    />
  </div>
);

export default Search;
