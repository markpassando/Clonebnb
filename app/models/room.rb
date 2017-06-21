class Room < ActiveRecord::Base
  validates :host_id, :title, :address, :price, :num_guests, :bedrooms, :beds, :description,
    :rules, :prop_type, :room_type,
    presence: true
  validates :wifi, :kitchen, :ac, :tv, inclusion: { in: [true, false] }

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end
