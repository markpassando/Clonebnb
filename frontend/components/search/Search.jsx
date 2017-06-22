import React from 'react';

// import FilterForm from './filter_form';
import RoomIndex from '../room/RoomIndex';
import RoomMap from './../room/map/RoomMap';

const Search = ({ rooms, fetchRooms, updateFilter }) => (
  <div className="container">
      <RoomMap
        rooms={rooms}
        updateFilter={updateFilter}
      />
    <RoomIndex
      rooms={rooms}
      fetchRooms={fetchRooms}
    />
  </div>
);

export default Search;
