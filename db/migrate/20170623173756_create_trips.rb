class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.integer :user_id, null: false
      t.integer :room_id, null: false
      t.string :status, default: "Pending"
      t.date :check_in
      t.date :check_out
      t.integer :num_guests, null: false
      t.timestamps null: false
    end
  end
end
