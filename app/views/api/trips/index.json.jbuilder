@trips.each do |trip|
  json.set! trip.id do
    json.extract! trip, :id, :room_id, :status, :check_in, :check_out, :num_guests
  end
end
