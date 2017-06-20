class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.integer :price, null: false
      t.integer :num_guests, null: false
      t.integer :bedrooms, null: false
      t.integer :beds, null: false
      t.text :description, null: false
      t.string :address, null: false
      t.text :rules, null: false
      t.string :prop_type, null: false
      t.string :room_type, null: false

      t.boolean :wifi, default: false
      t.boolean :kitchen, default: false
      t.boolean :ac, default: false
      t.boolean :tv, default: false

      t.timestamps null: false
    end

    add_index :rooms, :host_id
  end
end
