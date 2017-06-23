class Trip < ActiveRecord::Base
  validates :user_id, :room_id, :num_guests, presence: true

  belongs_to :room

  has_one :host,
    through: :room,
    source: :host

  has_one :customer,
    class_name: 'User',
    foreign_key: :user_id

end

# Trip.create(user_id: User.last.id, room_id: Room.first.id, status: "Approved", check_in: Date.new, check_out: Date.new, num_guests: 2)
