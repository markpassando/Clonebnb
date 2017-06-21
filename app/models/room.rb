class Room < ActiveRecord::Base
  validates :host_id, :title, :address, :price, :num_guests, :bedrooms, :beds, :description,
    :rules, :prop_type, :room_type,
    presence: true
  validates :wifi, :kitchen, :ac, :tv, inclusion: { in: [true, false] }
end
