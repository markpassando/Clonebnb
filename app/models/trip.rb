class Trip < ActiveRecord::Base
  validates :user_id, :room, presence: true
  validates :check_in, presence: { message: "You must have a check in date."}
  validates :check_out, presence: { message: "You must have a check out date."}
  validates :num_guests, presence: { message: "There must be at least 1 guest."}
  # validates :num_guests, numericality: { less_than_or_equal_to: room.num_guests }

  validate :guest_capacity, :can_not_book_own_room

  belongs_to :room

  has_one :host,
    through: :room,
    source: :host

  belongs_to :customer,
    class_name: 'User',
    foreign_key: :user_id

  def guest_capacity
    if num_guests
      if num_guests <= 0
        errors.add(:num_guests, "Number of guests must be at least 1.")
      elsif num_guests > room.num_guests
        errors.add(:num_guests, "Number of guests can not exceed capacity.")
      end
    end
  end

  def can_not_book_own_room
    if host.id == self.customer.id
      errors.add(:host, "You can not book your own room.")
    end
  end

  def start_end_dates
    if room.check_in == nil
      errors.add(:start, "You must have a check in date.")
    end

    if room.check_out == nil
      errors.add(:end, "You must have a check out date.")
    end
  end

end

# Trip.create(user_id: User.last.id, room_id: Room.first.id, status: "Approved", check_in: Date.new, check_out: Date.new, num_guests: 2)
