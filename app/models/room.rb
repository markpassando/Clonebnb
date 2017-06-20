class Room < ActiveRecord::Base
  validates :host_id, :title, :price, :num_guests, :bedrooms, :beds, :description,
    :rules, :prop_type, :room_type, :wifi, :kitchen, :ac, :tv,
    presence: true
end
