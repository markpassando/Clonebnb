json.extract! room, :id, :host_id, :title, :address, :lat, :lng, :price, :num_guests,
:bedrooms, :beds, :bathrooms, :description, :rules, :prop_type, :room_type,
:wifi, :kitchen, :ac, :tv
json.main_pic_url asset_path(room.main_pic.url)

json.host do
  json.username room.host.username
  json.avatar_url asset_path(room.host.avatar.url(:thumb))
end
