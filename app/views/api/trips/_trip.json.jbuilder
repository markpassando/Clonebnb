json.extract! trip, :id, :status, :check_in, :check_out, :num_guests

json.set! :room do
  json.extract! trip.room, :title, :address, :id, :price
  json.main_pic_url asset_path(trip.room.main_pic.url(:thumb))
  json.avatar_url asset_path(trip.host.avatar.url(:thumb))
end
