@rooms.each do |room|
  json.set! room.id do
    json.extract! room, :id, :title, :lat, :lng, :address, :price, :beds, :room_type
  end
end
