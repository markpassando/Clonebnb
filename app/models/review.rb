class Review < ActiveRecord::Base
  validates :user, :room, presence: true

  validates :user_id, uniqueness: { scope: :room_id, message: "You may only review a room once." }
  validates :rating, presence: { message: "You must leave a rating."}
  validates :body, presence: { message: "You must write a comment."}
  validate :can_not_review_own_room, :min_comment_length

  belongs_to :user
  belongs_to :room

  def can_not_review_own_room
    if self.user.id == self.room.host.id
      errors.add(:samePerson, "You can not review your own room.")
    end
  end

  def min_comment_length
    if self.body.length < 4
      errors.add(:body, "Your comment must be at least 4 characters long.")
    end
  end

  def only_review_once
    # debugger
    if self.body == "" && self.rating.nil?
      errors.add(:emptyForm, "You must at least rate or comment to review.")
    end
  end
end
