class Review < ActiveRecord::Base
  validates :user, :room, presence: true

  belongs_to :user
  belongs_to :room
end
