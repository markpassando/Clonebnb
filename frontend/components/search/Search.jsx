import React from 'react';

// import FilterForm from './filter_form';
import RoomIndex from '../room/RoomIndex';
import RoomMap from './../room/map/RoomMap';

const Search = ({ rooms, fetchRooms, updateFilter }) => (
  <div className="search-page">
    <div>
      <RoomIndex
        rooms={rooms}
        fetchRooms={fetchRooms}
      />
    </div>

    <div>
      <RoomMap
        rooms={rooms}
        updateFilter={updateFilter}
      />
    </div>
  </div>
);

export default Search;
