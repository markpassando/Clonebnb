class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :room_id, null: false
      t.integer :rating
      t.text :body
      t.timestamps null: false
    end

    add_index :reviews, :room_id
    add_index :reviews, :user_id
  end
end
