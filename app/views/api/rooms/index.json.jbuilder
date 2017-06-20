@rooms.each do |room|
  json.set! room.id do
    json.partial! 'room', room: room
  end
end
