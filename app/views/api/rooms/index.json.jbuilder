@rooms.each do |room|
  json.set! room.id do
    json.extract! room, :id, :title, :lat, :lng, :address, :price, :beds, :room_type
    json.main_pic_url asset_path(room.main_pic.url(:thumb))
  end
end
