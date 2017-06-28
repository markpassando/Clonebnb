class AddReviewOnlyOnce < ActiveRecord::Migration
  def change
    add_index :reviews, [:user_id, :room_id], unique: true
  end
end
