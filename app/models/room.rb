class Room < ActiveRecord::Base
  has_attached_file :main_pic, styles: { thumb: "639x426#" }, default_url: "placeholder_room.jpg"
  validates_attachment_content_type :main_pic, content_type: /\Aimage\/.*\z/

  validates :host_id, :title, :address, :price, :num_guests, :bedrooms, :beds, :description,
    :rules, :prop_type, :room_type,
    presence: true
  validates :wifi, :kitchen, :ac, :tv, inclusion: { in: [true, false] }

  belongs_to :host,
    class_name: 'User',
    foreign_key: :host_id

  has_many :trips

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end
