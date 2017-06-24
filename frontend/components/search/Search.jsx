import React from 'react';

// import FilterForm from './filter_form';
import RoomIndex from '../room/RoomIndex';
import RoomMap from './../room/map/RoomMap';

const Search = ({ rooms, fetchRooms, updateFilter, place }) => (
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
        place={place}
      />
    </div>
  </div>
);

export default Search;
